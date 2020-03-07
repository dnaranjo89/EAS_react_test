// Express requirements
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import winston from 'winston';
import morgan from 'morgan';
import path from 'path';
import * as Sentry from '@sentry/node';
import { initWinstonLogging, getMorganStream } from '../src/logging';

import loader from './loader.jsx';
import config from '../src/config/config';

// Setup Node Sentry
Sentry.init({
  dsn: config.sentryDsn,
  environment: config.environment,
});
initWinstonLogging({ isServer: true });

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3000;

// Setup Sentry error logs (step 1)
app.use(Sentry.Handlers.requestHandler());

// Setup access logs
const accessLogStream = getMorganStream();
app.use(morgan('combined', { stream: accessLogStream }));

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve ads.txt
app.get('/ads.txt', (req, res) => {
  res.sendFile(path.join(`${__dirname}/ads.txt`));
});

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(loader);

winston.info('App started');
app.listen(PORT, console.log(`App listening on port ${PORT}!`));

// Setup Sentry error logs (step 2)
app.use(Sentry.Handlers.errorHandler());

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.statusCode = 500;
  winston.error('Error 500', { error: error.toString(), sentryErrorId: res.sentry });
  res.end(
    `Something went bad, but we are working very hard to fix it.\n\n
    Ah! if someone ask you for a number, this is the one: ${res.sentry}`,
  );
});

// Handle the bugs somehow
app.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

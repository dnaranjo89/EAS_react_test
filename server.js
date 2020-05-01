/**
 * We are only using a custom server because next-i18next requires it.
 * Hopefully at some point in time this is not necessary anymore, as
 * it's stopping us from using Nextjs' Automatic Static Optimization
 * https://github.com/isaachinman/next-i18next/issues/586
 */
const express = require('express');
const next = require('next');
const chalk = require('chalk');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = process.env.PORT || 3000;

const isDevelopmentServer = process.env.NODE_ENV !== 'production';

// eslint-disable-next-line no-console
console.log(
  chalk.yellow(
    'Running a',
    chalk.underline.bold(isDevelopmentServer ? 'development' : 'production-like'),
    'server',
  ),
);

const app = next({ dev: isDevelopmentServer });

// Use our custom router
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  // Adding i18next
  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();

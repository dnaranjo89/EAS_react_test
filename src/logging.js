import winston, { format } from 'winston';
import path from 'path';
import rfs from 'rotating-file-stream';
import * as fs from 'fs';
import { NullTransport } from 'winston-null';
import config from './config/config';

const { LOGS_PATH, LOGS_SUFFIX, MAX_FILES } = process.env;
const DEFAULT_MAX_FILES = 5;
const MAX_SIZE_MORGAN = '10M'; // 10 MB
const MAX_SIZE_WINSTON = 10485760;
const maxFiles = MAX_FILES || DEFAULT_MAX_FILES;
const logsSuffix = LOGS_SUFFIX ? `_${LOGS_SUFFIX}.log` : '.log';

const setupDefaultLogsPath = () => {
  const logsDirectory = path.join('.', 'logs');
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
  }
  return logsDirectory;
};

const getLogsPath = () => LOGS_PATH || setupDefaultLogsPath();

const getFileTransports = () => {
  const logsPath = getLogsPath();
  const baseRotationOptions = {
    maxsize: MAX_SIZE_WINSTON,
    tailable: true,
    maxFiles,
  };
  return [
    new winston.transports.File({
      filename: path.join(logsPath, `error${logsSuffix}`),
      level: 'error',
      ...baseRotationOptions,
    }),
    new winston.transports.File({
      filename: path.join(logsPath, `combined${logsSuffix}`),
      ...baseRotationOptions,
    }),
  ];
};

export const initWinstonLogging = ({ isServer }) => {
  const env = config.environment;
  let transports;
  if (env === 'test') {
    transports = [];
  } else if (env === 'local') {
    transports = [new winston.transports.Console()];
  } else if (env === 'production') {
    if (isServer) {
      transports = [...getFileTransports(), new winston.transports.Console()];
    } else {
      // We don't use winston to log stuff clientside in prod
      transports = [new NullTransport()];
    }
  }
  winston.configure({
    transports,
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.printf(info => `${JSON.stringify(info)}`),
    ),
  });

  return winston;
};

export const getMorganStream = () =>
  rfs(`access${logsSuffix}`, {
    maxFiles,
    size: MAX_SIZE_MORGAN,
    path: getLogsPath(),
  });

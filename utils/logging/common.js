import path from 'path';
// import * as fs from 'fs';

const { LOGS_PATH } = process.env;

const { LOGS_SUFFIX, MAX_FILES } = process.env;
const DEFAULT_MAX_FILES = 5;

const maxFiles = MAX_FILES || DEFAULT_MAX_FILES;
const logsSuffix = LOGS_SUFFIX ? `_${LOGS_SUFFIX}.log` : '.log';

const setupDefaultLogsPath = () => {
  const fs = require('fs');
  const logsDirectory = path.join('.', 'logs');
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
  }
  return logsDirectory;
};

const getLogsPath = () => LOGS_PATH || setupDefaultLogsPath();

// eslint-disable-next-line import/prefer-default-export
export { getLogsPath, logsSuffix, maxFiles };

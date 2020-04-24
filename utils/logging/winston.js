import winston, { format } from 'winston';
// import path from 'path';

import { NullTransport } from 'winston-null';
import config from '../../config/config';
// import { getLogsPath, maxFiles, logsSuffix } from './common';

// const MAX_SIZE_WINSTON = 10485760;

// // const getFileTransports = () => {
// //   const logsPath = getLogsPath();
// //   const baseRotationOptions = {
// //     maxsize: MAX_SIZE_WINSTON,
// //     tailable: true,
// //     maxFiles,
// //   };
// //   return [
// //     new winston.transports.File({
// //       filename: path.join(logsPath, `error${logsSuffix}`),
// //       level: 'error',
// //       ...baseRotationOptions,
// //     }),
// //     new winston.transports.File({
// //       filename: path.join(logsPath, `combined${logsSuffix}`),
// //       ...baseRotationOptions,
// //     }),
// //   ];
// // };

const initWinstonLogging = ({ isServer }) => {
  const env = config.environment;
  let transports;
  if (env === 'test') {
    transports = [];
  } else if (env === 'local') {
    transports = [new winston.transports.Console()];
  } else if (env === 'production') {
    if (isServer) {
      // transports = [...getFileTransports(), new winston.transports.Console()];
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

export default initWinstonLogging;

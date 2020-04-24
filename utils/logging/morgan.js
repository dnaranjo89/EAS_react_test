import rfs from 'rotating-file-stream';
import { getLogsPath, maxFiles, logsSuffix } from './common';

const MAX_SIZE_MORGAN = '10M'; // 10 MB

const getMorganStream = () =>
  rfs(`access${logsSuffix}`, {
    maxFiles,
    size: MAX_SIZE_MORGAN,
    path: getLogsPath(),
  });

export default getMorganStream;

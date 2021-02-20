import { environment } from '../utils';
import { TYPE_APP_ENV_TEST } from '../constants/environment';

const MINIMUM_TIME = 1000;
const VARIABLE_TIME = 500;

const throttle = async tsStart =>
  new Promise(resolve => {
    const tsEnd = new Date().getTime();
    const randomDelay = Math.floor(Math.random() * VARIABLE_TIME + MINIMUM_TIME);
    const tsDelta = tsEnd - tsStart;
    if ([TYPE_APP_ENV_TEST].includes(environment)) {
      // Do not throttle requests in integration tests
      resolve();
    } else {
      setTimeout(resolve, randomDelay - tsDelta);
    }
  });

export default throttle;

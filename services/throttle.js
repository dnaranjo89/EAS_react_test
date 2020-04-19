import config from '../config/config';

const MINIMUM_TIME = 1500;
const VARIABLE_TIME = 1000;

/**
 * This function delays the execution of `request` by a random amount of milliseconds
 * when the elapsed time from `tsStart` until now was shorter than a minimum.
 * @param {function} request Function to run
 * @param {function} tsStart Timestamp of the moment when something starts executing
 * @returns {void}
 */
async function throttle(request, tsStart) {
  const tsEnd = new Date().getTime();
  const randomDelay = Math.floor(Math.random() * VARIABLE_TIME + MINIMUM_TIME);
  const tsDelta = tsEnd - tsStart;
  if (config.environment === 'test') {
    // Do not throttle requests in integration tests
    request();
  } else {
    setTimeout(request, randomDelay - tsDelta);
  }
}

export default throttle;

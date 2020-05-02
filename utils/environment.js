const chalk = require('chalk');

/** ****************
 * We use two environment variables to define the environment where the app will be running
 *
 * 1) NODE_ENV
 * It specifies whether a production-like server or a development server (with hot reloading, etc) should be used.
 * Possible values:
 * - production:  A production-like server will be used
 * - anything else: Otherwise, a development server will be used (with hot reloading, etc)
 *
 * 2) REACT_APP_ENV
 * It specify which environment should be used. This decides whether analytics and logs are sent
 * and to which accounts, if pages should be indexed, etc.
 * Possible environments:
 * - production (deployed app, both in the prod and dev server)
 * - local (running locally)
 * - test (running battery tests)
 **************** */
const { NODE_ENV, REACT_APP_ENV } = process.env;

const isDevelopmentServer = NODE_ENV !== 'production';

function getEnvironmentFromENV() {
  if (!isDevelopmentServer && !REACT_APP_ENV) {
    // eslint-disable-next-line no-console
    console.log(
      chalk.bold.red(
        'If you are running `npm run build` or `npm run start` you need to specify an environment in REACT_APP_ENV. Possible values [production, local, test]',
      ),
    );
    throw Error('No environment specified');
  }
  return REACT_APP_ENV || 'local';
}

module.exports = {
  getEnvironmentFromENV,
  isDevelopmentServer,
};

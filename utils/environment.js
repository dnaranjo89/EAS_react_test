/* eslint-disable no-console */
const chalk = require('chalk');
const {
  TYPE_NODE_ENV_PRODUCTION,
  TYPE_APP_ENV_LOCAL,
  APP_ENV_TYPES,
} = require('../constants/environment');

/** ****************
 * We use the `NODE_ENV` and `REACT_APP_ENV` environment variables to define the environment where the app will be running.
 * THIS ENV VARIABLES MUST BE DEFINED AT BUILD AND RUN TIME (so they are available for the server and client)
 *
 * PLEASE REFER TO THE DOCS TO UNDERSTAND HOW TO USED THEM: docs/environment.md
 **************** */
const { NODE_ENV, REACT_APP_ENV } = process.env;

const isDevelopmentServer = NODE_ENV !== TYPE_NODE_ENV_PRODUCTION;

/**
 * getEnvironmentAtBuildTime should only be used when bundling the app since it's using ENV variables
 * that are only available then.
 * @returns {String} One of the environments in APP_ENV_TYPES
 */
function getEnvironmentAtBuildTime() {
  if (!isDevelopmentServer && !REACT_APP_ENV) {
    console.log(
      chalk.bold.red(
        `If you are running 'npm run build' or 'npm run start' you need to specify an environment in REACT_APP_ENV. (REACT_APP_ENV=${REACT_APP_ENV}, NODE_ENV=${NODE_ENV})`,
      ),
    );
    throw Error('No environment specified');
  }
  if (!APP_ENV_TYPES.includes(REACT_APP_ENV)) {
    console.log(
      chalk.bold.red(
        `You haven't specified a valid REACT_APP_ENV. Possible values are [${APP_ENV_TYPES}]`,
      ),
    );
    throw Error('Invalid environment in REACT_APP_ENV');
  }
  return REACT_APP_ENV || TYPE_APP_ENV_LOCAL;
}

module.exports = {
  getEnvironmentAtBuildTime,
  isDevelopmentServer,
};

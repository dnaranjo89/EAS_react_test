/* eslint-disable no-console */

let config = {};
const environment = process.env.APP_ENV;

try {
  const baseConfig = {};

  const environmentConfig = require(`./${environment}`); // eslint-disable-line
  config = { ...baseConfig, ...environmentConfig };
} catch (e) {
  console.error('No application config could be found.', e);
}

module.exports = config;

/* eslint-disable no-console */

let config = {};
const environment = process.env.APP_ENV;

try {
  const baseConfig = {
    sentryDsn: 'https://5062c00c390b4ebc8f3239f85aec1054@o151502.ingest.sentry.io/5571829',
  };

  const environmentConfig = require(`./${environment}`); // eslint-disable-line
  config = { ...baseConfig, ...environmentConfig };
} catch (e) {
  console.error('No application config could be found.', e);
}

module.exports = config;

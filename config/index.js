/* eslint-disable no-console */

let config = {};
const environment = process.env.APP_ENV;

if (process.env.REACT_APP_COMMIT) {
  const deployedCommit = process.env.REACT_APP_COMMIT;
  console.log(deployedCommit);
}

try {
  const baseConfig = {
    sentryDsn: 'https://bebd8f08ca1e44b0bd2b2d5f352332f4@o170509.ingest.sentry.io/1247679',
  };

  const environmentConfig = require(`./${environment}`); // eslint-disable-line
  config = { ...baseConfig, ...environmentConfig };
} catch (e) {
  console.error('No application config could be found.', e);
}

module.exports = config;

/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

let config = {};
const environment = process.env.APP_ENV;

if (!environment) {
  console.error('No environment specified. Please set the REACT_APP_ENV environment variable');
}

if (process.env.REACT_APP_COMMIT) {
  const deployedCommit = process.env.REACT_APP_COMMIT;
  console.log(deployedCommit);
}
console.log('environment', environment);

try {
  if (['production', 'test'].indexOf(environment) < 0) {
    console.log(`Loading application config for environment: ${environment}`);
  }

  const baseConfig = {
    OGImagesFullDomain: 'https://echaloasuerte.com',
    environment,
    sentryDsn: 'https://bebd8f08ca1e44b0bd2b2d5f352332f4@o170509.ingest.sentry.io/1247679',
  };

  const environmentConfig = require(`./${environment}`); // eslint-disable-line
  config = Object.assign({}, baseConfig, environmentConfig);
} catch (e) {
  console.error('No application config could be found.', e);
}

module.exports = config;

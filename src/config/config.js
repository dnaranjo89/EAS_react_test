/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const isServer = !(typeof window !== 'undefined' && window.document);

let config = {};
let environment;

if (process.env.REACT_APP_ENV) {
  environment = process.env.REACT_APP_ENV;
} else if (typeof window !== 'undefined' && window.__internal) {
  environment = window.__internal.ENVIRONMENT;
}

if (process.env.REACT_APP_COMMIT) {
  const deployedCommit = process.env.REACT_APP_COMMIT;
  console.log(deployedCommit);
}

if (environment) {
  try {
    if (environment !== 'production') {
      console.log(`Loading application config for environment: ${environment}`);
    }

    const baseConfig = {
      OGImagesFullDomain: 'https://echaloasuerte.com',
      environment,
      domain: isServer ? 'https://echaloasuerte.com' : window.location.origin,
      isServer,
      sentryDsn: 'https://31465bb4331a44fc9262616650942a64@sentry.io/1413974',
    };

    const environmentConfig = require(`./${environment}`).default; // eslint-disable-line 

    config = Object.assign({}, baseConfig, environmentConfig);

    console.log('environment:', process.env.REACT_APP_ENV);
    // Disable logs and events when rendering in server
    config.analiticsEnabled = !isServer && config.analiticsEnabled;
    config.sentryEnabled = !isServer && config.sentryEnabled;
  } catch (e) {
    console.error('No application config could be found.', e);
  }
} else {
  console.error('No environment specified. Please set the REACT_APP_ENV environment variable');
}

module.exports = config;

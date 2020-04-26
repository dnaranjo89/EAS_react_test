const config = {
  indexPages: false,
  googleAnalyticsID: 'UA-XXXXX-Y',
  mixpanelID: 'fake-mixpanel-id',
  mixpanelDebug: false,
  hotjarEnabled: false,
  googleAnalyticsEnabled: true,
  // We keep mixpanel disabled as it's causing problems with cypress.clock()
  // More details on https://github.com/etcaterva/eas-frontend/issues/122
  mixpanelEnabled: false,
  sentryEnabled: false,
  apiBasePath: 'http://127.0.0.1:8000/api', // We are mocking this server in the integration tests (see cypress/serverMock.js)
  facebookAppId: '00000000000',
};

module.exports = config;

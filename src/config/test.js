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
  APIBasePath: 'http://unexisting-domain.com/api',
  facebookAppId: '00000000000',
};

export default config;

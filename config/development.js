const prodConfig = require('./production.js');

const config = {
  ...prodConfig,
  indexPages: false,
  googleAnalyticsID: 'UA-62791775-4',
  mixpanelID: '6eb5138e22dfa7135f6e00be724b7b05',
  hotjarEnabled: false,
};

module.exports = config;

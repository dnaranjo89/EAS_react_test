const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'es_ES',
  otherLanguages: ['en_GB'],
  // ignoreRoutes: ['/_next/', '/static/', 'robots.txt'],
});

module.exports = NextI18NextInstance;

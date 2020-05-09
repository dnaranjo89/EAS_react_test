const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  localePath: 'public/static/locales',
  defaultLanguage: 'es-ES',
  otherLanguages: ['en-GB'],
  browserLanguageDetection: false,
  serverLanguageDetection: false,
});

module.exports = NextI18NextInstance;

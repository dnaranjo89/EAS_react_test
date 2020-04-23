const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'es-ES',
  otherLanguages: ['en-GB'],
});

module.exports = NextI18NextInstance;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esES from './translations/es_ES/translations.json';
import enGB from './translations/en_GB/translations.json';
import config from '../config/config';

const getLanguageBasedOnHostname = hostname => {
  const hostnameRegex = /(chooserandom|echaloasuerte)\.com/;
  const match = hostname.match(hostnameRegex);
  const hostnameMatch = match ? match[1] : null;
  const defaultLanguage = 'es-ES';

  switch (hostnameMatch) {
    case 'chooserandom':
      return 'en-GB';
    case 'echaloasuerte':
      return 'es-ES';
    default:
      return defaultLanguage;
  }
};

const init = hostname => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        'es-ES': esES,
        'en-GB': enGB,
      },
      fallbackLng: 'es-ES',
      lng: getLanguageBasedOnHostname(hostname),
      debug: config !== 'production',
      ns: ['translations'], // have a common namespace used around the full app
      defaultNS: 'translations',
      keySeparator: false,
      interpolation: {
        formatSeparator: ',',
      },
      transSupportBasicHtmlNodes: true,
    });
};

export default init;

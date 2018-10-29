import i18n from 'i18next';
import config from '../config/config';

import esES from './translations/es_ES/translations.json';
import enGB from './translations/en_GB/translations.json';

const getLanguageBasedOnHostname = () => {
  const { hostname } = window.location;
  const hostnameRegex = /(woreep|echaloasuerte)\.com/;
  const match = hostname.match(hostnameRegex);
  const hostnameMatch = match ? match[1] : null;
  const defaultLanguage = 'es-ES';

  switch (hostnameMatch) {
    case 'woreep':
      return 'en-GB';
    case 'echaloasuerte':
      return 'es-ES';
    default:
      return defaultLanguage;
  }
};

i18n.init({
  // we init with resources
  resources: {
    'es-ES': esES,
    'en-GB': enGB,
  },
  fallbackLng: 'en-GB',
  lng: getLanguageBasedOnHostname(),
  debug: config.environment === 'local',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
  backend: {
    projectId: '511fa9cb-9426-47d3-b5d5-67093adf8e96',
    apiKey: '87f24a2b-5043-42c2-8f29-3d7525447bca',
    referenceLng: 'es-ES',
  },
});

export default i18n;

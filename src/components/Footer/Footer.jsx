import React from 'react';
import i18n from '../../i18n/i18n';
import config from '../../config/config';

import TranslationsSwitch from '../TranslationsSwitch/TranslationsSwitch';
import STYLES from './Footer.scss';

const c = className => STYLES[className];

const availableLocales = ['es-ES', 'en-GB'];

const redirect = domain => {
  const { protocol, pathname, search } = window.location;
  const targetUrl = `${protocol}//${domain}${pathname}${search}`;
  window.location.replace(targetUrl);
};

const handleChangeLanguage = l => {
  if (config.environment === 'local') {
    // Avoid redirecting to ease the translation process in local
    i18n.changeLanguage(l);
  } else {
    switch (l) {
      case 'en-GB':
        redirect('woreep.com');
        break;
      case 'es-ES':
        redirect('echaloasuerte.com');
        break;
      default:
        throw Error('Trying to set incorrect locale:', l);
    }
  }
};

const Footer = () => (
  <footer className={c('Footer')}>
    <TranslationsSwitch onChange={handleChangeLanguage} available={availableLocales} />
  </footer>
);

Footer.propTypes = {};

export default Footer;

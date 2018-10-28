import React from 'react';
import i18n from '../../i18n/i18n';
import config from '../../config/config';

import TranslationsSwitch from '../TranslationsSwitch/TranslationsSwitch';
import STYLES from './Footer.scss';

const c = className => STYLES[className];

const availableLocales = ['es-ES', 'en-GB'];

const redirect = locale => {
  const { protocol, pathname, search } = window.location;
  const environment = config.environment;
  let newDomain;
  if (locale === 'en-GB') {
    if (environment === 'production') {
      newDomain = 'woreep.com';
    } else {
      newDomain = 'dev.woreep.com';
    }
  } else if (environment === 'production') {
    newDomain = 'echaloasuerte.com';
  } else {
    newDomain = 'beta-dev.echaloasuerte.com';
  }
  const targetUrl = `${protocol}//${newDomain}${pathname}${search}`;
  window.location.replace(targetUrl);
};

const handleChangeLanguage = l => {
  if (config.environment === 'local') {
    // Avoid redirecting to ease the translation process in local
    i18n.changeLanguage(l);
  } else {
    redirect(l);
  }
};

const Footer = () => (
  <footer className={c('Footer')}>
    <TranslationsSwitch onChange={handleChangeLanguage} available={availableLocales} />
  </footer>
);

Footer.propTypes = {};

export default Footer;

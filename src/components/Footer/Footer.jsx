import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import TranslationsSwitch from '../TranslationsSwitch/TranslationsSwitch.jsx';
import STYLES from './Footer.scss';
import config from '../../config/config';

const c = classnames.bind(STYLES);

const availableLocales = ['es-ES', 'en-GB'];

const redirect = locale => {
  const { protocol, pathname, search } = window.location;
  const { environment } = config;
  let newDomain;
  if (locale === 'en-GB') {
    if (environment === 'production') {
      newDomain = 'chooserandom.com';
    } else {
      newDomain = 'dev.chooserandom.com';
    }
  } else if (environment === 'production') {
    newDomain = 'echaloasuerte.com';
  } else {
    newDomain = 'dev.echaloasuerte.com';
  }
  const targetUrl = `${protocol}//${newDomain}${pathname}${search}`;
  window.location.replace(targetUrl);
};

const Footer = ({ t, i18n }) => {
  const handleChangeLanguage = l => {
    if (config.environment === 'local') {
      // Avoid redirecting to ease the translation process in local
      i18n.changeLanguage(l);
    } else {
      redirect(l);
    }
  };

  return (
    <footer className={c('Footer')}>
      <Link component={RouterLink} to="/privacy-policy" color="textPrimary">
        <Typography className={c('Footer__link')} variant="body1" component="span">
          {t('privacy_policy')}
        </Typography>
      </Link>
      <TranslationsSwitch onChange={handleChangeLanguage} available={availableLocales} />
    </footer>
  );
};

Footer.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTranslation('Footer')(Footer);

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import TranslationsSwitch from '../TranslationsSwitch.jsx';
import STYLES from './Footer.module.scss';
import { environment } from '../../utils';
import Button from '../Button.jsx';

const c = classnames.bind(STYLES);

const availableLocales = ['es-ES', 'en-GB'];

const redirect = locale => {
  const { protocol, pathname, search } = window.location;
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
    if (environment === 'local') {
      // Avoid redirecting to ease the translation process in local
      i18n.changeLanguage(l);
    } else {
      redirect(l);
    }
  };

  return (
    <footer className={c('Footer')}>
      <Button href="/privacy-policy">
        <Typography className={c('Footer__link')} variant="body2" component="span">
          {t('privacy_policy')}
        </Typography>
      </Button>
      <TranslationsSwitch onChange={handleChangeLanguage} available={availableLocales} />
    </footer>
  );
};

Footer.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTranslation('common')(Footer);

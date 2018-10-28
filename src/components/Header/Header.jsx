import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-i18next';

import STYLES from './Header.scss';
import logo from './logo_vector2.svg';

const c = classNames.bind(STYLES);

const Header = ({ t }) => (
  <header className={c('Header')}>
    <Link to={'/'} className={c('Header__link')}>
      <img className={c('Header__logo')} src={logo} alt={t('brand_name')} />
      <Typography variant="h4" component="span" className={c('Header__title')}>
        {t('brand_name')}
      </Typography>
    </Link>
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('Header')(Header);

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import { withTranslation } from '../../i18n';

import STYLES from './Header.scss';
import logo from './logo_vector.svg';

const c = classNames.bind(STYLES);

const Header = ({ t }) => (
  <header className={c('Header')}>
    <a href="/" className={c('Header__link')}>
      <img className={c('Header__logo')} src={logo} alt={t('brand_name')} />
      <Typography variant="h4" component="span" className={c('Header__title')}>
        {t('brand_name')}
      </Typography>
    </a>
    {/* <span className={c('Header__links')}>
      <Link component={RouterLink} to="/recent" color="textPrimary">
        <Typography variant="body1" component="span" inline>
          {t('recent_draws')}
        </Typography>
      </Link>
    </span> */}
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('Header')(Header);

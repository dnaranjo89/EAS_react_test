import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';

import STYLES from './Header.scss';
import logo from './logo_vector2.svg';

const c = classNames.bind(STYLES);

const Header = () => (
  <header className={c('Header')}>
    <Link to={'/'} className={c('Header__link')}>
      <img className={c('Header__logo')} src={logo} alt="EchaloASuerte" />
      <Typography variant={'display4'} className={c('Header__title')} component="span">
        EchaloASuerte
      </Typography>
    </Link>
  </header>
);

export default Header;

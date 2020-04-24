import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import STYLES from './FacebookLoginButton.scss';

const c = classNames.bind(STYLES);

const FacebookLoginButton = ({ label, onLogin }) => (
  <div className={c('FacebookLoginButton')} data-testid="FacebookLoginButton">
    <button
      type="button"
      onClick={() => window.FB.login(onLogin)}
      className={c('FacebookLoginButton__button')}
    >
      {label}
    </button>
  </div>
);

FacebookLoginButton.propTypes = {
  label: PropTypes.string,
  onLogin: PropTypes.func,
};

FacebookLoginButton.defaultProps = {
  label: '',
  onLogin: null,
};

export default FacebookLoginButton;

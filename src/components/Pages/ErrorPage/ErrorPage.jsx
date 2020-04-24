import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import STYLES from './ErrorPage.scss';

const c = classnames.bind(STYLES);
const ErrorPage = ({ children }) => (
  <div className={c('ErrorPage')}>
    <div>{children}</div>
  </div>
);

ErrorPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorPage;

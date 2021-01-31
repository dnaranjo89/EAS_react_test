import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import STYLES from './BoxWithBorder.module.scss';

const c = classnames.bind(STYLES);

const BoxWithBorder = ({ error, children, ...rest }) => (
  <div role="presentation" className={c(STYLES.container, { [STYLES.error]: error })} {...rest}>
    {children}
  </div>
);

BoxWithBorder.propTypes = {};

export default BoxWithBorder;

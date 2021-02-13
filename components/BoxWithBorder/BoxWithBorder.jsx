import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import STYLES from './BoxWithBorder.module.scss';

const c = classnames.bind(STYLES);

const BoxWithBorder = ({ error, children, className, ...rest }) => (
  <div
    role="presentation"
    className={c(STYLES.container, { [STYLES.error]: error }, className)}
    {...rest}
  >
    {children}
  </div>
);

BoxWithBorder.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
BoxWithBorder.defaultProps = {
  className: null,
  error: false,
};

export default BoxWithBorder;

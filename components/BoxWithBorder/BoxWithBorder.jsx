import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import STYLES from './BoxWithBorder.module.scss';

const c = classnames.bind(STYLES);

const BoxWithBorder = ({ error, children, className, 'data-testid': dataTestId }) => (
  <div
    role="presentation"
    className={c(STYLES.container, { [STYLES.error]: error }, className)}
    data-testid={dataTestId}
  >
    {children}
  </div>
);

BoxWithBorder.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
  'data-testid': PropTypes.string,
};
BoxWithBorder.defaultProps = {
  className: null,
  error: false,
  'data-testid': null,
};

export default BoxWithBorder;

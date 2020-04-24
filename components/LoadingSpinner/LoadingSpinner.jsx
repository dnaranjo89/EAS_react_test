import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import classnames from 'classnames/bind';
import STYLES from './LoadingSpinner.module.scss';

const c = classnames.bind(STYLES);

const LoadingSpinner = ({ fullpage }) => (
  <div className={c('LoadingSpinner', { 'LoadingSpinner--fullpage': fullpage })}>
    <CircularProgress />
  </div>
);

LoadingSpinner.propTypes = {
  fullpage: PropTypes.bool,
};

LoadingSpinner.defaultProps = {
  fullpage: false,
};

export default LoadingSpinner;

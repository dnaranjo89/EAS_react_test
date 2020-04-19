import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import STYLES from './LoadingButton.module.scss';

const LoadingButton = ({ loading, children, ...rest }) => (
  <span className={STYLES.Container}>
    <Button disabled={loading} {...rest}>
      {children}
    </Button>
    {loading && <CircularProgress size={24} className={STYLES.Progress} />}
  </span>
);

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LoadingButton.defaultProps = {
  loading: false,
};

export default LoadingButton;

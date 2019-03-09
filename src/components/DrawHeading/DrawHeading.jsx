import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import STYLES from './DrawHeading.scss';

const c = classnames.bind(STYLES);

const DrawHeading = ({ title, subtitle }) => (
  <div className={c('DrawHeading')}>
    <Typography variant="h1">{title}</Typography>
    {subtitle && (
      <Typography variant="body1" color="textSecondary" className={c('DrawHeading__subtitle')}>
        {subtitle}
      </Typography>
    )}
  </div>
);

DrawHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

DrawHeading.defaultProps = {
  subtitle: null,
};

export default DrawHeading;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import STYLES from './DrawHeading.module.scss';

const c = classnames.bind(STYLES);

const DrawHeading = ({ title, subtitle }) => (
  <div className={c('DrawHeading')}>
    <Typography align="center" variant="h1" data-testid="DrawHeading__title">
      {title}
    </Typography>
    {subtitle && (
      <Typography
        align="center"
        variant="subtitle1"
        className={c('DrawHeading__subtitle')}
        data-testid="DrawHeading__subtitle"
      >
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

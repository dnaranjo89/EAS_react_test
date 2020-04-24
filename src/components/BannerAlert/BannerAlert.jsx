import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Info from '@material-ui/icons/Info';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Warning from '@material-ui/icons/Warning';
import Typography from '@material-ui/core/Typography';

import STYLES from './BannerAlert.scss';

const c = classNames.bind(STYLES);

export const ALERT_TYPES = {
  SUCCESS: 'success',
  WARN: 'warn',
  ERROR: 'error',
  NEUTRAL: 'neutral',
};

const getIconForType = type => {
  const styles = { style: { fontSize: 18 }, className: c(`BannerAlert__${type}-icon`) };
  const icons = {
    [ALERT_TYPES.NEUTRAL]: <Info {...styles} />,
    [ALERT_TYPES.SUCCESS]: <CheckCircle {...styles} />,
    [ALERT_TYPES.WARN]: <Warning {...styles} />,
    [ALERT_TYPES.ERROR]: <Info {...styles} />,
  };
  return icons[type];
};

const BannerAlert = props => {
  const { type, title } = props;
  return (
    <section className={c('BannerAlert', `BannerAlert--${type}`)}>
      {getIconForType(type)}
      &nbsp;
      <Typography variant="body2">{title}</Typography>
      &nbsp;
    </section>
  );
};

BannerAlert.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BannerAlert;

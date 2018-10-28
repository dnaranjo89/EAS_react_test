import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import classnames from 'classnames/bind';
import CountdownHandler from 'react-countdown-now';
import Typography from '@material-ui/core/Typography';
import STYLES from './Countdown.scss';

const c = classnames.bind(STYLES);

const Countdown = ({ date, t }) => (
  <CountdownHandler
    date={date}
    zeroPadLength={0}
    renderer={({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return 'done';
      }

      let countdownMessage = '';
      if (days) {
        countdownMessage = `${days}d`;
      }
      if (hours) {
        countdownMessage = `${countdownMessage} ${hours}d`;
      }
      if (minutes) {
        countdownMessage = `${countdownMessage} ${minutes}m`;
      }
      if (seconds) {
        countdownMessage = `${countdownMessage} ${seconds}s`;
      }
      return (
        <div className={c('Countdown')} data-component="Countdown">
          <Typography>{t('time_remaining')}</Typography>
          <Typography className={c('Countdown__message')}>{countdownMessage}</Typography>
        </div>
      );
    }}
  />
);

Countdown.propTypes = {
  t: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default translate('Countdown')(Countdown);

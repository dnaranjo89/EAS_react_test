import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames/bind';
import CountdownHandler from 'react-countdown-now';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';
import STYLES from './Countdown.scss';

const c = classnames.bind(STYLES);

const Countdown = ({ date, t, i18n }) => {
  moment.locale(i18n.language);
  return (
    <div className={c('Countdown')} data-testid="Countdown">
      <Typography variant="subtitle2">
        {t('results_published_on')}{' '}
        <Tooltip placement="top" title={moment(date).format()}>
          <span>{moment(date).format('LLL')}</span>
        </Tooltip>
      </Typography>
      <CountdownHandler
        date={date}
        zeroPadLength={0}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return 'Results are public now';
          }

          let countdownMessage = '';
          if (days) {
            countdownMessage = `${days}d`;
          }
          if (hours) {
            countdownMessage = `${countdownMessage} ${hours}h`;
          }
          if (minutes) {
            countdownMessage = `${countdownMessage} ${minutes}m`;
          }
          if (seconds) {
            countdownMessage = `${countdownMessage} ${seconds}s`;
          }
          return (
            <div>
              <Typography variant="subtitle2">{t('time_remaining')}</Typography>
              <Typography className={c('Countdown__message')}>{countdownMessage}</Typography>
            </div>
          );
        }}
      />
    </div>
  );
};

Countdown.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTranslation('Countdown')(Countdown);

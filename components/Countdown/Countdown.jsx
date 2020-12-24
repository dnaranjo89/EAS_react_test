import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import CountdownHandler from 'react-countdown';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';
import useTranslation from 'next-translate/useTranslation';
import STYLES from './Countdown.module.scss';

const c = classnames.bind(STYLES);

const Countdown = ({ date }) => {
  const { t, lang } = useTranslation('CommonPublishedDraw');
  moment.locale(lang);
  return (
    <div className={c('Countdown')} data-testid="Countdown">
      <Typography variant="subtitle2">
        {t('Countdown_results_published_on')}{' '}
        <Tooltip placement="top" title={moment(date).format()}>
          <span>{moment(date).format('LLL')}</span>
        </Tooltip>
      </Typography>
      {/* TODO this package has been deprecated, need to migrate it to 'react-countdown' */}
      <CountdownHandler
        date={date}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <Typography variant="subtitle2">{t('Countdown_reload_page')}</Typography>;
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
              <Typography variant="subtitle2">{t('Countdown_time_remaining')}</Typography>
              <Typography className={c('Countdown__message')}>{countdownMessage}</Typography>
            </div>
          );
        }}
      />
    </div>
  );
};

Countdown.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};

export default Countdown;

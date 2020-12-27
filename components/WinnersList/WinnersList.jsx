import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Pair from '../Pair/Pair.jsx';

import STYLES from './WinnersList.module.scss';

const c = classNames.bind(STYLES);
const WinnersList = ({ winners }) => {
  const { t } = useTranslation('CommonDrawRaffle');
  return (
    <div className={c('WinnersList')} data-testid="WinnersList">
      <div className={STYLES.Titles}>
        <Typography className={STYLES.Title} variant="h3">
          {t('prize_label')}
        </Typography>
        <Typography className={STYLES.Title} variant="h3">
          {t('winner_label')}
        </Typography>
      </div>
      {winners.map(winner => (
        <Pair key={winner.prize.id} first={winner.participant.name} second={winner.prize.name} />
      ))}
    </div>
  );
};

WinnersList.propTypes = {
  winners: PropTypes.arrayOf(Object).isRequired,
};

export default WinnersList;

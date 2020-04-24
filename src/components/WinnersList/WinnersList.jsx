import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import getOrdinal from '../../i18n/ordinals';

import STYLES from './WinnersList.scss';

const c = classNames.bind(STYLES);
const WinnersList = ({ winners, t }) => (
  <div className={c('WinnersList')}>
    {winners.map((winner, index) => (
      <div key={winner.prize.id} data-testid="WinnersList__result">
        <Typography variant="h5" display="inline">
          {getOrdinal(index + 1)} {t('prize')} (
        </Typography>
        <Typography variant="h2" display="inline">
          {winner.prize.name}
        </Typography>
        <Typography variant="h5" display="inline">
          ): {winner.participant.name}
        </Typography>
      </div>
    ))}
  </div>
);

WinnersList.propTypes = {
  winners: PropTypes.arrayOf(Object).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('WinnersList')(WinnersList);

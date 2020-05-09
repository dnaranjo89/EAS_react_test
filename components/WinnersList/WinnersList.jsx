import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import getOrdinal from '../../utils/ordinals';

import STYLES from './WinnersList.module.scss';

const c = classNames.bind(STYLES);
const WinnersList = ({ winners, t, i18n }) => (
  <div className={c('WinnersList')}>
    {winners.map((winner, index) => (
      <div key={winner.prize.id} data-testid="WinnersList__result">
        <Typography variant="h5" display="inline">
          {getOrdinal(index + 1, i18n)} {t('prize')} (
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
  i18n: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTranslation('CommonPublishedDraw')(WinnersList);

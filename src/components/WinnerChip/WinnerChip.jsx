import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { RaffleResultValue } from 'echaloasuerte-js-sdk';

import STYLES from './WinnerChip.scss';

const c = classNames.bind(STYLES);

const WinnerChip = ({ winner }) => (
  <div className={c('WinnerChip')}>
    <div className={c('WinnerChip__leftside-box')}>{winner.prize.name}</div>
    <div className={c('WinnerChip__rigthside-box')}>{winner.participant.name}</div>
  </div>
);

WinnerChip.propTypes = {
  winner: PropTypes.instanceOf(RaffleResultValue).isRequired,
};

export default WinnerChip;

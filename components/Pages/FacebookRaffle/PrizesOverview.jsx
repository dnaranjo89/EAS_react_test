/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames/bind';
import { withTranslation } from '../../../i18n';

import STYLES from './PrizesOverview.module.scss';

const c = classNames.bind(STYLES);

const PrizesOverview = ({ prizes, t }) => (
  <div className={c('PrizesOverview')}>
    <Typography variant="h2">{t('prizes')}</Typography>
    <ul className={c('PrizesOverview__prizes-list')}>
      {prizes.map((prize, i) => (
        <li key={`prize-${prize.id}-${i}`}>
          <Chip label={prize.name} />
        </li>
      ))}
    </ul>
  </div>
);

PrizesOverview.propTypes = {
  prizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,

      facebook_id: PropTypes.string,
    }),
  ).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('PrizesOverview')(PrizesOverview);

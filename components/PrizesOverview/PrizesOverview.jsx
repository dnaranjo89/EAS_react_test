/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import useTranslation from 'next-translate/useTranslation';

import STYLES from './PrizesOverview.module.scss';

const PrizesOverview = ({ prizes }) => {
  const { t } = useTranslation('CommonDrawRaffle');
  return (
    <div className={STYLES.container}>
      <Typography variant="h2">{t('prizes_label')}</Typography>
      <ul className={STYLES.list}>
        {prizes.map((prize, i) => (
          <li key={`prize-${prize}-${i}`}>
            <Chip label={prize} />
          </li>
        ))}
      </ul>
    </div>
  );
};

PrizesOverview.propTypes = {
  prizes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PrizesOverview;

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames/bind';
import STYLES from './RandomNumberResult.scss';

const c = classnames.bind(STYLES);

const RandomNumberResult = ({ result }) => (
  <div className={c('RandomNumberResult')}>
    <Typography
      className={c('RandomNumberResult__results')}
      variant="body1"
      align="center"
      data-component={'RandomNumberResult__result'}
    >
      {result.join(', ')}
    </Typography>
  </div>
);

RandomNumberResult.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RandomNumberResult;
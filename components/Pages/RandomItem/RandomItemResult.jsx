import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import STYLES from './RandomItemResult.module.scss';

const RandomLetterResult = ({ result }) => (
  <div className={STYLES.Result} data-testid="RandomItemResult">
    {result.value.map((value, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Paper key={i} className={STYLES.Card} elevation={2}>
        <Typography className={STYLES.Item} variant="body1" align="center">
          {value}
        </Typography>
      </Paper>
    ))}
  </div>
);

RandomLetterResult.propTypes = {
  result: PropTypes.shape({
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    value: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default RandomLetterResult;

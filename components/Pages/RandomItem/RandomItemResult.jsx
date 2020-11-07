import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import STYLES from './RandomItemResult.module.scss';

const RandomItemResult = ({ result }) => (
  <div className={STYLES.Result} data-testid="RandomItemResult">
    {result.value.map(({ name, id }) => (
      <Paper key={id} className={STYLES.Card} elevation={2}>
        <Typography className={STYLES.Item} variant="body1" align="center">
          {name}
        </Typography>
      </Paper>
    ))}
  </div>
);

RandomItemResult.propTypes = {
  result: PropTypes.shape({
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    value: PropTypes.arrayOf(Object),
  }).isRequired,
};

export default RandomItemResult;

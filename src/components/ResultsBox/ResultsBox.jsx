import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';

import trumpetIcon from './trumpet.png';
import STYLES from './ResultsBox.scss';

const c = classNames.bind(STYLES);

const TrumpetIcon = ({ inverted }) => (
  <img
    src={trumpetIcon}
    className={c('ResultsBox__trumpet-icon', {
      'ResultsBox__trumpet-icon--flipped': inverted,
    })}
    alt={'Trumpet icon'}
  />
);

TrumpetIcon.propTypes = {
  inverted: PropTypes.bool,
};

TrumpetIcon.defaultProps = {
  inverted: false,
};

const WinnersTitle = ({ winnersLabel }) => (
  <Grid container direction={'row'} justify={'center'}>
    <Grid item>
      <TrumpetIcon inverted />
    </Grid>
    <Grid item>
      <Typography variant="display1" component={'p'}>
        {winnersLabel}
      </Typography>
    </Grid>
    <Grid item>
      <TrumpetIcon />
    </Grid>
  </Grid>
);

WinnersTitle.propTypes = {
  winnersLabel: PropTypes.string.isRequired,
};

const ResultsBox = ({ title, children }) => (
  <section className={c('ResultsBox__results-panel')}>
    <div>
      <WinnersTitle winnersLabel={title} />
    </div>
    <div>
      <Grid item>{children}</Grid>
    </div>
  </section>
);

ResultsBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResultsBox;

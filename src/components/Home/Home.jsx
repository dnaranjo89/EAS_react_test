import React from 'react';
import { translate } from 'react-translate';
import Grid from 'material-ui/Grid';

import Chip from './../DrawCard/DrawCard';

const Home = ({t}) => (
  <Grid container justify="center">
    <Grid item sm={4}>
      <Chip icon="https://echaloasuerte.com/static/img/draw_icons/raffle.ecc02d7cd162.png" href="/number">{t('random_number_title')}</Chip>
    </Grid>
    <Grid item sm={4}>
      <Chip icon="https://echaloasuerte.com/static/img/draw_icons/random_letter.07b9689f39d4.png" href="/letter">{t('random_letter_title')}</Chip>
    </Grid>
  </Grid>
  );

export default translate('Home')(Home);

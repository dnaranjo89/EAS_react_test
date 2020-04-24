/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';

import PublicSummaryPanel from '../../PublicSummaryPanel/PublicSummaryPanel.jsx';
import STYLES from './PublishedFacebookPhotoRafflePage.module.scss';

const c = className => STYLES[className];

const PublishedFacebookPhotoRafflePage = props => (
  <div>
    <div className={c('PublishedFacebookPhotoRafflePage')}>
      <section className={c('PublishedFacebookDraw__results-panel')}>
        <Typography variant="display2">{props.title}</Typography>
        <Typography variant="h1">{props.t('winners')}</Typography>
        <div>
          {props.results.map(result => (
            <div>{result}</div>
          ))}
        </div>
      </section>
      <section className={c('PublishedFacebookDraw__summary-panel')}>
        <PublicSummaryPanel>
          <div>
            <Typography variant="h1">{props.t('draw_details')}</Typography>
            <div>Number of winners: {props.numberOfWinners}</div>
            <div>
              Descripcion:
              <p>{props.description}</p>
            </div>
          </div>
        </PublicSummaryPanel>
      </section>
    </div>
  </div>
);

PublishedFacebookPhotoRafflePage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  numberOfWinners: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func.isRequired,
};

PublishedFacebookPhotoRafflePage.defaultProps = {
  results: [],
};

export default withTranslation('PublishedFacebookPhotoRafflePage')(
  PublishedFacebookPhotoRafflePage,
);

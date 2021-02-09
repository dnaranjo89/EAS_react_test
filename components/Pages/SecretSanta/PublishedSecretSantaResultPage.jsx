import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { RaffleApi, Participant } from 'echaloasuerte-js-sdk';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Page from '../../Page/Page.jsx';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import PrizesOverview from '../../PrizesOverview/PrizesOverview.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import STYLES from './PublishedSecretSantaResultPage.module.scss';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import withTracking from '../../../hocs/withTracking.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import withFacebookSdk from '../../../hocs/withFacebookSdk.jsx';
// import facebookRaffleOgImage from './facebook_raffle_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_FACEBOOK } from '../../../constants/analyticsTypes';

const c = classNames.bind(STYLES);
const raffleApi = new RaffleApi();

const PublishedSecretSantaResultPage = ({ draw, track, facebookContext }) => {
  // const { id: drawId, values, results } = draw;
  // const { title, description, participants, prizes } = values;
  // const result = results[0];
  // const shareUrl = getCurrentUrlFromWindow();

  const { t } = useTranslation('DrawSecretSanta');

  const participantName = 'David';
  const gifteeName = 'Mario';

  return (
    <Page
      // ogImage={facebookRaffleOgImage} // TODO add image
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Secret Santan Published"
    >
      <DrawHeading title={t('page_title')} />
      <br />
      <br />
      <br />
      <Typography align="center" variant="body2">
        Tienes que hacer un regalo a
      </Typography>
      <br />
      <Typography align="center" variant="h2">
        {participantName}
      </Typography>
      {/* <ResultsBox title={t('congratulations')}>Hey {participantName}!</ResultsBox> */}
    </Page>
  );
};

PublishedSecretSantaResultPage.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      participants: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          created_at: PropTypes.string.isRequired.isRequired,
          facebook_id: PropTypes.string,
        }),
      ).isRequired,
      prizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    id: PropTypes.string,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        created_at: PropTypes.string.isRequired,
        schedule_date: PropTypes.string.isRequired.isRequired,
        value: PropTypes.arrayOf(PropTypes.shape()),
      }),
    ),
    isOwner: PropTypes.bool,
  }).isRequired,
  facebookContext: PropTypes.shape({
    username: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  track: PropTypes.func.isRequired,
};

export default withTracking(withFacebookSdk(PublishedSecretSantaResultPage));

import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { RaffleApi, Participant } from 'echaloasuerte-js-sdk';
import { useRouter } from 'next/router';
import { withTranslation } from '../../../i18n';
import Page from '../../Page/Page.jsx';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import PrizesOverview from './PrizesOverview.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import STYLES from './PublishedFacebookRafflePage.module.scss';
import ParticipateWithFbPanel from './ParticipateWithFbPanel.jsx';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import withTracking from '../../../hocs/withTracking.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import withFacebookSdk from '../../../hocs/withFacebookSdk.jsx';
import facebookRaffleOgImage from './facebook_raffle_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_FACEBOOK } from '../../../constants/analyticsTypes';

const c = classNames.bind(STYLES);
const raffleApi = new RaffleApi();

const PublishedFacebookRafflePage = ({ draw, t, track, facebookContext }) => {
  const { id: drawId, title, description, participants, prizes, result, isLoading } = draw;
  const { username, userId } = facebookContext;
  const [userRegisteredInRaffle, setUserRegisteredInRaffle] = useState(false);
  const [registerFailedErrorMessage, setRegisterFailedErrorMessage] = useState('');
  const [registeringInRaffle, setRegisteringInRaffle] = useState(false);
  const router = useRouter();
  const shareUrl = getCurrentUrlFromWindow();

  useEffect(() => {
    if (userId) {
      const participant = participants.find(p => p.facebook_id === userId);
      if (participant) {
        setUserRegisteredInRaffle(true);
      } else {
        setUserRegisteredInRaffle(false);
      }
    }
  }, [participants, userId]);

  useLoadDataAfterCountdown(result);

  if (isLoading) {
    return <LoadingSpinner fullpage />;
  }

  /**
   * Register the user in the current raffle
   *
   * @param {*} userDetails This param will only
   * be passed when the function is called as callback after login
   * @returns {undefined}
   */
  const registerUserInRaffle = async userDetails => {
    let name;
    let facebookId;
    if (userDetails) {
      name = userDetails.username;
      facebookId = userDetails.userId;
    } else {
      name = username;
      facebookId = userId;
    }

    const userIsRegistered = participants.find(p => p.facebook_id === facebookId);
    if (userIsRegistered) {
      return;
    }

    setRegisteringInRaffle(true);
    const participant = Participant.constructFromObject({ name, facebook_id: facebookId });
    try {
      await raffleApi.raffleParticipantsAdd(drawId, participant);
      track({
        mp: {
          name: `Participate - ${ANALYTICS_TYPE_FACEBOOK}`,
          properties: { drawType: ANALYTICS_TYPE_FACEBOOK },
        },
        ga: { action: 'Participate', category: ANALYTICS_TYPE_FACEBOOK },
      });
    } catch (error) {
      setRegisterFailedErrorMessage(t('unable_to_register_in_raffle'));
      Sentry.withScope(scope => {
        scope.setExtra(
          'message',
          'There was an error when trying to participate a Facebook raffle',
        );
        scope.setExtra('drawId', drawId);
        Sentry.captureException(error);
      });
    }
    setRegisteringInRaffle(false);

    // "Redirecting" to force the data reload
    router.push(router.pathname, router.asPath);
  };

  return (
    <Page
      ogImage={facebookRaffleOgImage}
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Facebook Raffle Published"
      enableHotjar
    >
      <DrawHeading title={title || t('page_title')} subtitle={description} />
      {result.value ? (
        <>
          <ResultsBox title={t('winners')}>
            <WinnersList winners={result.value} />
            <br />
            <ShareButtons
              drawType={ANALYTICS_TYPE_FACEBOOK}
              sectionTitle={t('CommonPublishedDraw:share_result')}
              url={shareUrl}
            />
          </ResultsBox>
          <PublishedDrawDetails sectionTitle={t('published_raffle_details')}>
            <Typography variant="body2">
              {t('label_prizes')} {prizes.map(p => p.name).join(', ')}
            </Typography>
            <Typography variant="body2" data-testid="FacebookRaffle__number-of-participants">
              {t('label_number_of_participants')} {participants.length}
            </Typography>
          </PublishedDrawDetails>
        </>
      ) : (
        <>
          <PrizesOverview prizes={prizes} />
          <div className={c('PublishedFacebookRafflePage__participate-with-facebook')}>
            <ParticipateWithFbPanel
              userRegisteredInRaffle={userRegisteredInRaffle}
              registerUserInRaffle={registerUserInRaffle}
              registerFailedErrorMessage={registerFailedErrorMessage}
              registeringInRaffle={registeringInRaffle}
              t={t}
            />
          </div>
          <Typography variant="body2" align="center">
            {participants.length > 0 &&
              t('people_registered_already', {
                count: participants.length,
              })}
            <br />
          </Typography>
          <Countdown date={result.schedule_date} />
          <ShareButtons
            drawType={ANALYTICS_TYPE_FACEBOOK}
            sectionTitle={t('CommonPublishedDraw:share_draw')}
            url={shareUrl}
          />
        </>
      )}
    </Page>
  );
};

PublishedFacebookRafflePage.propTypes = {
  draw: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
        facebook_id: PropTypes.string,
      }),
    ).isRequired,
    prizes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
        facebook_id: PropTypes.string,
      }),
    ).isRequired,
    description: PropTypes.string,
    result: PropTypes.shape({
      created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      value: PropTypes.arrayOf(PropTypes.shape()),
    }),
    isOwner: PropTypes.bool,
    isLoading: PropTypes.bool,
  }).isRequired,
  facebookContext: PropTypes.shape({
    username: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  track: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTracking(
  withFacebookSdk(withTranslation('DrawFacebook')(PublishedFacebookRafflePage)),
);

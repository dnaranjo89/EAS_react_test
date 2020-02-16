import React, { useState, useEffect } from 'react';
import { frontloadConnect } from 'react-frontload';
import { connect } from 'react-redux';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from 'react-i18next';
import { RaffleApi, RaffleResult, Participant, Prize } from 'echaloasuerte-js-sdk';
import Page from '../../Page/Page.jsx';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import PrizesOverview from '../../PrizesOverview/PrizesOverview.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import STYLES from './PublishedFacebookRafflePage.scss';
import ParticipateWithFbPanel from './ParticipateWithFbPanel.jsx';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import withTracking from '../../withTracking/withTracking.jsx';
import { fetchRaffleDraw } from '../../../actions/drawActions';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import withFacebookSDK from '../../withFacebookSDK/withFacebookSDK.jsx';
import facebookRaffleOgImage from './facebook_raffle_og_image.png';
import useCurrentUrl from '../../../hooks/useCurrentUrl.js';

const c = classNames.bind(STYLES);
const raffleApi = new RaffleApi();
const analyticsDrawType = 'FacebookRaffle';

const loadData = async props => {
  const { drawId } = props.match.params;
  await props.fetchRaffleDraw(drawId);
};

const PublishedFacebookRafflePage = props => {
  const { draw, match, t, track, facebookContext } = props;
  const { title, description, participants, prizes, result, isLoading } = draw;
  const { params } = match;
  const { drawId } = params;
  const { username, userId } = facebookContext;
  const [userRegisteredInRaffle, setUserRegisteredInRaffle] = useState(false);
  const [registerFailedErrorMessage, setRegisterFailedErrorMessage] = useState('');
  const [registeringInRaffle, setRegisteringInRaffle] = useState(false);
  const shareUrl = useCurrentUrl();

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

  useLoadDataAfterCountdown(result, () => loadData(props));

  if (isLoading) {
    return <LoadingSpinner fullpage />;
  }

  /**
   * Register the urse in the current raffle
   *
   * @param {*} userDetails This param will only
   * be passed when the function is called as callback after login
   * @returns {undefined}
   */
  const registerUserInRaffle = async userDetails => {
    setRegisteringInRaffle(true);
    let name;
    let facebookId;
    if (userDetails) {
      name = userDetails.username;
      facebookId = userDetails.userId;
    } else {
      name = username;
      facebookId = userId;
    }
    const participant = Participant.constructFromObject({ name, facebook_id: facebookId });
    try {
      await raffleApi.raffleParticipantsAdd(drawId, participant);
      track({
        mp: {
          name: `Participate - ${analyticsDrawType}`,
          properties: { drawType: analyticsDrawType },
        },
        ga: { action: 'Participate', category: analyticsDrawType },
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
    loadData(props);
  };

  return (
    <Page
      ogImage={facebookRaffleOgImage}
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Facebook Raffle Published"
    >
      <DrawHeading title={title || t('page_title')} subtitle={description} />
      {result.value ? (
        <>
          <ResultsBox title={t('winners')}>
            <WinnersList winners={result.value} />
            <br />
            <ShareButtons
              drawType={analyticsDrawType}
              sectionTitle={t('share_result')}
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
            drawType={analyticsDrawType}
            sectionTitle={t('share_draw')}
            url={shareUrl}
          />
        </>
      )}
    </Page>
  );
};

PublishedFacebookRafflePage.propTypes = {
  draw: PropTypes.shape({
    title: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.instanceOf(Participant)).isRequired,
    prizes: PropTypes.arrayOf(PropTypes.instanceOf(Prize)),
    description: PropTypes.string,
    result: PropTypes.instanceOf(RaffleResult),
    isOwner: PropTypes.bool,
    isLoading: PropTypes.bool,
  }).isRequired,
  facebookContext: PropTypes.shape({
    username: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  track: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

const TranslatedPage = withTracking(
  withFacebookSDK(withTranslation('FacebookRaffle')(PublishedFacebookRafflePage)),
);

const mapsStateToProps = state => ({
  draw: state.draws.draw,
});

export default connect(mapsStateToProps, { fetchRaffleDraw })(
  frontloadConnect(loadData, {
    onMount: true,
    onUpdate: false,
  })(TranslatedPage),
);

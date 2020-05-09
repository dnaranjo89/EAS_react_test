import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { RaffleApi } from 'echaloasuerte-js-sdk';
import * as Sentry from '@sentry/node';
import { withTranslation } from '../../../i18n';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import raffleOgImage from './raffle_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_RAFFLE } from '../../../constants/analyticsTypes';

const raffleApi = new RaffleApi();

const loadData = async drawId => {
  try {
    const draw = await raffleApi.raffleRead(drawId);
    const { id, private_id: privateId, title, description, participants, prizes, results } = draw;
    const lastToss = results[0];
    return {
      id,
      title,
      description,
      participants,
      prizes,
      result: lastToss,
      isOwner: Boolean(privateId),
    };
  } catch (error) {
    Sentry.withScope(scope => {
      scope.setExtra('message', 'API Error');
      scope.setExtra('Action', 'raffleRead');
      scope.setExtra('drawId', drawId);
      Sentry.captureException(error);
    });
    throw error;
  }
};

const PublishedRafflePage = props => {
  const { draw, t } = props;
  const { title, description, participants, prizes, result } = draw;
  const shareUrl = getCurrentUrlFromWindow();
  useLoadDataAfterCountdown(result);

  return (
    <Page
      ogImage={raffleOgImage}
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Raffle Published Draw"
    >
      <DrawHeading title={title || t('page_title')} subtitle={description} />
      {result.value ? (
        <>
          <ResultsBox title={t('winners')}>
            <WinnersList winners={result.value} />
          </ResultsBox>
          <ShareButtons
            drawType={ANALYTICS_TYPE_RAFFLE}
            sectionTitle={t('CommonPublishedDraw:share_result')}
            url={shareUrl}
          />
        </>
      ) : (
        <>
          <Countdown date={result.schedule_date} />
          <ShareButtons
            drawType={ANALYTICS_TYPE_RAFFLE}
            sectionTitle={t('CommonPublishedDraw:share_draw')}
            url={shareUrl}
          />
        </>
      )}
      <PublishedDrawDetails sectionTitle={t('published_draw_details')}>
        <Typography component="div" variant="body2">
          {t('label_prizes')} {prizes.map(p => p.name).join(', ')}
        </Typography>
        <Typography component="div" variant="body2">
          {t('label_number_of_participants')} {participants.length}
        </Typography>
      </PublishedDrawDetails>
    </Page>
  );
};

PublishedRafflePage.propTypes = {
  draw: PropTypes.shape({
    title: PropTypes.string,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        facebook_id: PropTypes.string,
      }),
    ).isRequired,
    prizes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        facebook_id: PropTypes.string,
      }),
    ).isRequired,
    description: PropTypes.string,
    result: PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      schedule_date: PropTypes.string,
      value: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
    }),
    isOwner: PropTypes.bool,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

PublishedRafflePage.defaultProps = {};

PublishedRafflePage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  const draw = await loadData(drawId);
  return {
    draw,
    namespacesRequired: ['DrawRaffle', 'CommonPublishedDraw'],
  };
};

export default withTranslation('DrawRaffle')(PublishedRafflePage);

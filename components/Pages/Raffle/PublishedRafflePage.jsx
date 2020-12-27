import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import PrizesOverview from '../../PrizesOverview/PrizesOverview.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import raffleOgImage from './raffle_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_RAFFLE } from '../../../constants/analyticsTypes';

const PublishedRafflePage = props => {
  const { draw } = props;
  const { values, results } = draw;
  const { title, description, participants, prizes } = values;
  const result = results[0];
  const shareUrl = getCurrentUrlFromWindow();
  useLoadDataAfterCountdown(result);
  const { t } = useTranslation('DrawRaffle');

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
          <PrizesOverview prizes={prizes} />
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
          {t('label_number_of_participants')} {participants.length}
        </Typography>
      </PublishedDrawDetails>
    </Page>
  );
};

PublishedRafflePage.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      participants: PropTypes.arrayOf(PropTypes.string).isRequired,
      prizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
        schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
          .isRequired,
        value: PropTypes.arrayOf(PropTypes.shape({})),
      }),
    ).isRequired,
  }).isRequired,
};

PublishedRafflePage.defaultProps = {};

export default PublishedRafflePage;

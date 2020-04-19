import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import { RaffleResult, Participant, Prize } from 'echaloasuerte-js-sdk';
import { frontloadConnect } from 'react-frontload';
import { connect } from 'react-redux';
import { fetchRaffleDraw } from '../../../actions/drawActions';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import raffleOgImage from './raffle_og_image.png';
import useCurrentUrl from '../../../hooks/useCurrentUrl';
import { ANALYTICS_TYPE_RAFFLE } from '../../../constants/analyticsTypes';

const loadData = async props => {
  const { drawId } = props.match.params;
  await props.fetchRaffleDraw(drawId);
};

const PublishedRafflePage = props => {
  const { draw, t } = props;
  const { title, description, participants, prizes, result, isLoading } = draw;
  const shareUrl = useCurrentUrl();
  useLoadDataAfterCountdown(result, () => loadData(props));

  if (isLoading) {
    return <LoadingSpinner fullpage />;
  }

  const ShareButtonsList = () => (
    <ShareButtons
      drawType={ANALYTICS_TYPE_RAFFLE}
      sectionTitle={t('share_result')}
      url={shareUrl}
    />
  );
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
          <ShareButtonsList />
        </>
      ) : (
        <>
          <Countdown date={result.schedule_date} />
          <ShareButtonsList />
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
    participants: PropTypes.arrayOf(PropTypes.instanceOf(Participant)).isRequired,
    prizes: PropTypes.arrayOf(PropTypes.instanceOf(Prize)).isRequired,
    description: PropTypes.string,
    result: PropTypes.instanceOf(RaffleResult),
    isOwner: PropTypes.bool,
    isLoading: PropTypes.bool,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

PublishedRafflePage.defaultProps = {};

const TranslatedPage = withTranslation('Raffle')(PublishedRafflePage);

const mapsStateToProps = state => ({
  draw: state.draws.draw,
});

export default connect(mapsStateToProps, { fetchRaffleDraw })(
  frontloadConnect(loadData, {
    onMount: true,
    onUpdate: false,
  })(TranslatedPage),
);

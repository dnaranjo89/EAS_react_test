import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import LinkSetsResult from './LinkSetsResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import setsOgImage from './link_sets_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_SETS } from '../../../constants/analyticsTypes';

const PublishedLinkSetsPage = props => {
  const { draw } = props;
  const { values, results } = draw;
  const { title, description, set1, set2 } = values;
  const result = results[0];
  const shareUrl = getCurrentUrlFromWindow();
  useLoadDataAfterCountdown(result);
  const { t } = useTranslation('DrawLinkSets');

  return (
    <Page
      ogImage={setsOgImage}
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Link Set Published Draw"
    >
      <DrawHeading title={title || t('page_title')} subtitle={description} />
      {result.value ? (
        <>
          <ResultsBox title={t('selected_items')}>
            <LinkSetsResult result={result} />
          </ResultsBox>
        </>
      ) : (
        <>
          <Countdown date={result.schedule_date} />
        </>
      )}
      <ShareButtons
        drawType={ANALYTICS_TYPE_SETS}
        sectionTitle={t('CommonPublishedDraw:share_result')}
        url={shareUrl}
      />
      <PublishedDrawDetails sectionTitle={t('published_draw_details')}>
        <Typography component="div" variant="body2">
          {t('label_set1')} {set1.join(', ')}
        </Typography>
        <Typography component="div" variant="body2">
          {t('label_set2')} {set2.join(', ')}
        </Typography>
      </PublishedDrawDetails>
    </Page>
  );
};

PublishedLinkSetsPage.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      set1: PropTypes.arrayOf(PropTypes.string).isRequired,
      set2: PropTypes.arrayOf(PropTypes.string).isRequired,
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

PublishedLinkSetsPage.defaultProps = {};

export default PublishedLinkSetsPage;

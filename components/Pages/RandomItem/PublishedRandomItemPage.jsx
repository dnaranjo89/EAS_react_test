import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../../i18n';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import RandomItemResult from './RandomItemResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import itemOgImage from './random_item_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_ITEM } from '../../../constants/analyticsTypes';

const PublishedRandomItemPage = props => {
  const { draw, t } = props;
  const { values, results } = draw;
  const { title, description, items, numberOfItems } = values;
  const result = results[0];
  const shareUrl = getCurrentUrlFromWindow();
  useLoadDataAfterCountdown(result);

  return (
    <Page
      ogImage={itemOgImage}
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Item Published Draw"
    >
      <DrawHeading title={title || t('page_title')} subtitle={description} />
      {result.value ? (
        <>
          <ResultsBox title={t('selected_items')}>
            <RandomItemResult result={result} />
          </ResultsBox>
        </>
      ) : (
        <>
          <Countdown date={result.schedule_date} />
        </>
      )}
      <ShareButtons
        drawType={ANALYTICS_TYPE_ITEM}
        sectionTitle={t('CommonPublishedDraw:share_result')}
        url={shareUrl}
      />
      <PublishedDrawDetails sectionTitle={t('published_draw_details')}>
        <Typography component="div" variant="body2">
          {t('label_number_of_items')} {numberOfItems}
        </Typography>
        <Typography component="div" variant="body2">
          {t('label_items')} {items.join(', ')}
        </Typography>
      </PublishedDrawDetails>
    </Page>
  );
};

PublishedRandomItemPage.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
      numberOfItems: PropTypes.string.isRequired,
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
  t: PropTypes.func.isRequired,
};

PublishedRandomItemPage.defaultProps = {};

export default withTranslation('DrawItem')(PublishedRandomItemPage);

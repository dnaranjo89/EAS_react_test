import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import RandomNumberResult from './RandomNumberResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import { getCurrentUrlFromWindow } from '../../../utils';
import numberOgImage from './random_number_og_image.png';
import { ANALYTICS_TYPE_NUMBER } from '../../../constants/analyticsTypes';

const PublishedRandomNumberPage = props => {
  const { draw } = props;
  const { t } = useTranslation('DrawNumber');
  const shareUrl = getCurrentUrlFromWindow();
  const { values, results } = draw;
  const { title, rangeMin, rangeMax, numberOfResults, allowRepeated, description } = values;
  const result = results[0];

  useLoadDataAfterCountdown(result);

  return (
    <Page
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={numberOgImage}
      noIndex
      pageType="Numbers Published Draw"
    >
      <DrawHeading title={title || t('page_title')} subtitle={description} />
      {result.value ? (
        <ResultsBox title={t('generated_results')}>
          <RandomNumberResult result={result} />
        </ResultsBox>
      ) : (
        <Countdown date={result.schedule_date} />
      )}

      <ShareButtons
        drawType={ANALYTICS_TYPE_NUMBER}
        sectionTitle={
          result.value ? t('CommonPublishedDraw:share_result') : t('CommonPublishedDraw:share_draw')
        }
        url={shareUrl}
      />
      <PublishedDrawDetails sectionTitle={t('published_draw_details')}>
        {description && <Typography variant="body2">{description}</Typography>}
        <Typography component="div" variant="body2">
          {t('field_label_from')} {rangeMin}
        </Typography>
        <Typography component="div" variant="body2">
          {t('field_label_to')} {rangeMax}
        </Typography>
        <Typography component="div" variant="body2">
          {t('field_label_number_of_results')} {numberOfResults}
        </Typography>
        {numberOfResults > 1 && (
          <Typography component="div" variant="body2">
            {t('field_label_allow_repeated')} {allowRepeated ? 'yes' : 'no'}
          </Typography>
        )}
      </PublishedDrawDetails>
    </Page>
  );
};

PublishedRandomNumberPage.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      rangeMin: PropTypes.string,
      rangeMax: PropTypes.string,
      numberOfResults: PropTypes.string,
      allowRepeated: PropTypes.bool,
      description: PropTypes.string,
    }),
    results: PropTypes.arrayOf(
      PropTypes.shape({
        created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
        schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
          .isRequired,
        value: PropTypes.arrayOf(PropTypes.number),
      }),
    ),
  }).isRequired,
};

PublishedRandomNumberPage.defaultProps = {};

export default PublishedRandomNumberPage;

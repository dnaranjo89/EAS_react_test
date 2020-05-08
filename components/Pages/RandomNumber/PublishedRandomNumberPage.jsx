import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import { withTranslation } from '../../../i18n';
import Page from '../../Page/Page.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import RandomNumberResult from './RandomNumberResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_NUMBER } from '../../../constants/analyticsTypes';

const PublishedRandomNumberPage = props => {
  const { draw, t } = props;

  console.log('drawPublishedRandomNumberPage');

  const shareUrl = getCurrentUrlFromWindow();
  const { title, result, rangeMin, rangeMax, numberOfResults, allowRepeated, description } = draw;

  useLoadDataAfterCountdown(result);

  return (
    <Page
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Numbers Published Draw"
    >
      <div>
        <DrawHeading title={title || t('page_title')} subtitle={description} />
        {result.value ? (
          <ResultsBox title={t('generated_numbers')}>
            <RandomNumberResult result={result} />
          </ResultsBox>
        ) : (
          <Countdown date={result.schedule_date} />
        )}

        <ShareButtons
          drawType={ANALYTICS_TYPE_NUMBER}
          sectionTitle={result.value ? t('share_result') : t('share_draw')}
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
      </div>
    </Page>
  );
};

PublishedRandomNumberPage.propTypes = {
  draw: PropTypes.shape({
    title: PropTypes.string,
    rangeMin: PropTypes.number,
    rangeMax: PropTypes.number,
    numberOfResults: PropTypes.number,
    allowRepeated: PropTypes.bool,
    description: PropTypes.string,
    result: PropTypes.shape({
      created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      value: PropTypes.arrayOf(PropTypes.number),
    }),
  }).isRequired,
  t: PropTypes.func.isRequired,
};

PublishedRandomNumberPage.defaultProps = {};

export default withTranslation('NumberDraw')(PublishedRandomNumberPage);

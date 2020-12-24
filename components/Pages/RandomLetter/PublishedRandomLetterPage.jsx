import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import RandomLetterResult from './RandomLetterResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import letterOgImage from './random_letter_og_image.png';

import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_LETTER } from '../../../constants/analyticsTypes';

const PublishedRandomLetterPage = props => {
  const { draw } = props;
  const { t } = useTranslation('DrawLetter');
  const shareUrl = getCurrentUrlFromWindow();
  const { values, results } = draw;
  const { title, numberOfResults, allowRepeated, description } = values;
  const result = results[0];

  useLoadDataAfterCountdown(result);

  return (
    <Page
      ogImage={letterOgImage}
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      noIndex
      pageType="Letter Published Draw"
    >
      <div>
        <DrawHeading title={title || t('page_title')} subtitle={description} />
        {result.value ? (
          <ResultsBox title={t('generated_results')}>
            <RandomLetterResult result={result} />
          </ResultsBox>
        ) : (
          <Countdown date={result.schedule_date} />
        )}

        <ShareButtons
          drawType={ANALYTICS_TYPE_LETTER}
          sectionTitle={
            result.value
              ? t('CommonPublishedDraw:share_result')
              : t('CommonPublishedDraw:share_draw')
          }
          url={shareUrl}
        />
        <PublishedDrawDetails sectionTitle={t('published_draw_details')}>
          {description && <Typography variant="body2">{description}</Typography>}
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

PublishedRandomLetterPage.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      numberOfResults: PropTypes.string,
      allowRepeated: PropTypes.bool,
      description: PropTypes.string,
    }),
    results: PropTypes.arrayOf(
      PropTypes.shape({
        created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
        schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
          .isRequired,
        value: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
  }).isRequired,
};

PublishedRandomLetterPage.defaultProps = {};

export default PublishedRandomLetterPage;

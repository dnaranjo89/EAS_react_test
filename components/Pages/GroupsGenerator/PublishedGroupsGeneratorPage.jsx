import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import GroupsGeneratorResult from './GroupsGeneratorResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import groupsOgImage from './groups_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_GROUPS } from '../../../constants/analyticsTypes';

const PublishedGroupsGeneratorPage = props => {
  const { draw } = props;
  const { values, results } = draw;
  const { title, description, participants, numberOfGroups } = values;
  const result = results[0];
  const shareUrl = getCurrentUrlFromWindow();
  const { t } = useTranslation('DrawGroups');

  useLoadDataAfterCountdown(result);

  return (
    <Page
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={groupsOgImage}
      noIndex
      pageType="Groups Published Draw"
    >
      <DrawHeading title={title || t('page_title')} subtitle={description} />
      {result.value ? (
        <ResultsBox title={t('generated_groups')}>
          <GroupsGeneratorResult result={result} />
        </ResultsBox>
      ) : (
        <Countdown date={result.schedule_date} />
      )}
      <ShareButtons
        drawType={ANALYTICS_TYPE_GROUPS}
        sectionTitle={
          result.value ? t('CommonPublishedDraw:share_result') : t('CommonPublishedDraw:share_draw')
        }
        url={shareUrl}
      />
      <PublishedDrawDetails sectionTitle={t('published_draw_details')}>
        <Typography component="div" variant="body2">
          {t('label_number_of_groups')} {numberOfGroups}
        </Typography>
        <Typography component="div" variant="body2">
          {t('label_participants')} {participants.join(', ')}
        </Typography>
      </PublishedDrawDetails>
    </Page>
  );
};

PublishedGroupsGeneratorPage.propTypes = {
  draw: PropTypes.shape({
    values: PropTypes.shape({
      title: PropTypes.string,
      participants: PropTypes.arrayOf(PropTypes.string).isRequired,
      numberOfGroups: PropTypes.string,
      description: PropTypes.string,
    }),
    results: PropTypes.arrayOf(
      PropTypes.shape({
        created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
        schedule_date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
          .isRequired,
        value: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
      }),
    ),
  }).isRequired,
};

export default PublishedGroupsGeneratorPage;

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { GroupsApi } from 'echaloasuerte-js-sdk';
import * as Sentry from '@sentry/node';

import { withTranslation } from '../../../i18n';
import useLoadDataAfterCountdown from '../../../hooks/useLoadDataAfterCountdown';
import Page from '../../Page/Page.jsx';
import GroupsGeneratorResult from './GroupsGeneratorResult.jsx';
import ResultsBox from '../../ResultsBox/ResultsBox.jsx';
import Countdown from '../../Countdown/Countdown.jsx';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx';
import ShareButtons from '../../ShareButtons/ShareButtons.jsx';
import PublishedDrawDetails from '../../PublishedDrawDetails/PublishedDrawDetails.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import groupsOgImage from './groups_og_image.png';
import { getCurrentUrlFromWindow } from '../../../utils';
import { ANALYTICS_TYPE_GROUPS } from '../../../constants/analyticsTypes';

const groupsApi = new GroupsApi();

const loadData = async drawId => {
  try {
    const draw = await groupsApi.groupsRead(drawId);
    const {
      id,
      private_id: privateId,
      title,
      description,
      participants,
      number_of_groups: numberOfGroups,
      results,
    } = draw;
    const lastToss = results[0];
    return {
      id,
      title,
      description,
      participants,
      numberOfGroups,
      result: lastToss,
      isOwner: Boolean(privateId),
      isLoading: false,
    };
  } catch (error) {
    Sentry.withScope(scope => {
      scope.setExtra('message', 'API Error');
      scope.setExtra('Action', 'groupsRead');
      scope.setExtra('drawId', drawId);
      Sentry.captureException(error);
    });
    throw error;
  }
};

const PublishedGroupsGeneratorPage = props => {
  const { draw, t } = props;
  const { title, description, participants, numberOfGroups, result, isLoading } = draw;
  const shareUrl = getCurrentUrlFromWindow();

  useLoadDataAfterCountdown(result);

  if (isLoading) {
    return <LoadingSpinner fullpage />;
  }

  return (
    <Page
      ogImage={groupsOgImage}
      htmlTitle={title || t('html_title')}
      htmlDescription={description || t('html_description')}
      htmlKeywords={t('html_keywords')}
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
        sectionTitle={result.value ? t('share_result') : t('share_draw')}
        url={shareUrl}
      />
      <PublishedDrawDetails sectionTitle={t('published_draw_details')}>
        <Typography component="div" variant="body2">
          {t('label_number_of_groups')} {numberOfGroups}
        </Typography>
        <Typography component="div" variant="body2">
          {t('label_participants')} {participants.map(p => p.name).join(', ')}
        </Typography>
      </PublishedDrawDetails>
    </Page>
  );
};

PublishedGroupsGeneratorPage.propTypes = {
  draw: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    participants: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        facebook_id: PropTypes.string,
      }),
    ).isRequired,
    numberOfGroups: PropTypes.number,
    description: PropTypes.string,
    result: PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      schedule_date: PropTypes.string,
      value: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
    }),
    isOwner: PropTypes.bool,
    isLoading: PropTypes.bool,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

PublishedGroupsGeneratorPage.defaultProps = {};

PublishedGroupsGeneratorPage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  const draw = await loadData(drawId);
  return {
    draw,
    namespacesRequired: ['GroupsDraw', 'CommonPublished'],
  };
};

export default withTranslation('GroupsDraw')(PublishedGroupsGeneratorPage);

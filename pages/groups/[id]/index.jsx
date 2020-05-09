import * as Sentry from '@sentry/node';
import { GroupsApi } from 'echaloasuerte-js-sdk';
import PublishedGroupsGeneratorPage from '../../../components/Pages/GroupsGenerator/PublishedGroupsGeneratorPage.jsx';

const groupsApi = new GroupsApi();

const loadData = async drawId => {
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
};

PublishedGroupsGeneratorPage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  let draw = null;
  try {
    draw = await loadData(drawId);
  } catch (error) {
    Sentry.withScope(scope => {
      scope.setExtra('message', 'API Error');
      scope.setExtra('Action', 'groupsRead');
      scope.setExtra('drawId', drawId);
      Sentry.captureException(error);
    });
  }
  return {
    namespacesRequired: ['DrawGroups', 'CommonPublishedDraw', 'Common'],
    draw,
  };
};

export default PublishedGroupsGeneratorPage;

import { GroupsApi } from 'echaloasuerte-js-sdk';
import { logApiError } from '../../../utils/logger';
import PublishedGroupsGeneratorPage from '../../../components/Pages/GroupsGenerator/PublishedGroupsGeneratorPage.jsx';
import { ANALYTICS_TYPE_GROUPS } from '../../../constants/analyticsTypes';

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
  };
};

PublishedGroupsGeneratorPage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  let draw = null;
  try {
    draw = await loadData(drawId);
  } catch (error) {
    console.log('error', error);
    logApiError(error, ANALYTICS_TYPE_GROUPS);
  }
  return {
    namespacesRequired: ['DrawGroups', 'CommonPublishedDraw', 'Common'],
    draw,
  };
};

export default PublishedGroupsGeneratorPage;

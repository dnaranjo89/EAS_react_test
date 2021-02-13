import { SecretSantaApi } from 'echaloasuerte-js-sdk';
import PublishedSecretSantaResultPage from '../../components/Pages/SecretSanta/PublishedSecretSantaResultPage.jsx';
import { serializeResponse } from '../../utils/fetchData';
import { logApiError } from '../../utils/logger';

import { ANALYTICS_TYPE_SECRET_SANTA } from '../../constants/analyticsTypes';

export const getServerSideProps = async ctx => {
  const { id: drawId } = ctx.query;
  const secretSantaApi = new SecretSantaApi();
  let props;
  try {
    const result = await secretSantaApi.secretSantaResultGet(drawId);
    props = serializeResponse({ result });
    return { props };
  } catch (error) {
    logApiError(error, ANALYTICS_TYPE_SECRET_SANTA);
    props = {
      error: {
        statusCode: error.status || 500,
      },
    };
  }
  return props;
};

export default PublishedSecretSantaResultPage;

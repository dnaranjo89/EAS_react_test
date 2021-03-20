import { SecretSantaApi } from 'echaloasuerte-js-sdk';
import forwarded from 'forwarded';
import PublishedSecretSantaResultPage from '../../components/Pages/SecretSanta/PublishedSecretSantaResultPage.jsx';
import { serializeResponse } from '../../utils/fetchData';
import { logApiError } from '../../utils/logger';

import { ANALYTICS_TYPE_SECRET_SANTA } from '../../constants/analyticsTypes';

export const getServerSideProps = async ({ req, query }) => {
  const { id: resultId } = query;
  const secretSantaApi = new SecretSantaApi();
  let props;
  try {
    const result = await secretSantaApi.secretSantaResultGet(resultId);
    props = serializeResponse({ result });
    return { props };
  } catch (error) {
    const forwardedIps = forwarded(req);
    const options = {
      tags: { drawType: ANALYTICS_TYPE_SECRET_SANTA, resultId },
      userIp: forwardedIps[0],
    };

    logApiError(error, options);
    props = {
      error: {
        statusCode: error.status || 500,
      },
    };
  }
  return props;
};

export default PublishedSecretSantaResultPage;

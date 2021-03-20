import { fetchDraw } from './api';
import { logApiError } from './logger';

import { analyticsTypesBySlug } from '../constants/analyticsTypes';

const getInitialProps = async ({ drawId, urlSlug }) => {
  try {
    return {
      draw: await fetchDraw({ urlSlug, drawId }),
    };
  } catch (error) {
    const analyticsType = analyticsTypesBySlug[urlSlug];
    const options = {
      tags: { drawType: analyticsType, drawId },
      // TODO missing IP?
    };
    logApiError(error, options);
    return {
      error: {
        statusCode: error.status || 500,
      },
    };
  }
};

export default getInitialProps;

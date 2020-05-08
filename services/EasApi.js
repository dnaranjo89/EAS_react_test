import * as EASApi from 'echaloasuerte-js-sdk';
import { apiDomain } from '../config';
import { environment, isServer } from '../utils';

const { TYPE_APP_ENV_PRODUCTION, TYPE_APP_ENV_STAGING } = require('../constants/environment');

const API_BASE_PATH = '/api';

const environmentsWithSameHost = [TYPE_APP_ENV_STAGING, TYPE_APP_ENV_PRODUCTION];

const init = () => {
  const defaultClient = EASApi.ApiClient.instance;

  if (isServer) {
    // If we are one the server we need the absolute path to the API
    defaultClient.basePath = apiDomain + API_BASE_PATH;
  } else if (environmentsWithSameHost.includes(environment)) {
    // If we are on the client and it's a production-like server (i.e. the API lives in the same host) we use the relative url
    defaultClient.basePath = API_BASE_PATH;
  } else {
    // If we are on the client but the API lives in a different host we need to use the absolute path
    // This is normally only the case of development, otherwise it may get blocked by CORS
    defaultClient.basePath = apiDomain + API_BASE_PATH;
  }

  defaultClient.timeout = 10000;
};

export default {
  init,
};

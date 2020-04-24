import * as EASApi from 'echaloasuerte-js-sdk';
import config from '../config';

const init = () => {
  const { apiBasePath } = config;
  const defaultClient = EASApi.ApiClient.instance;

  // hostname is only set server side. In client side the path will be relative
  defaultClient.basePath = apiBasePath;
  defaultClient.timeout = 10000;
};

export default {
  init,
};

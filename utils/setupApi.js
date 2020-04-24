import * as EASApi from 'echaloasuerte-js-sdk';
import config from '../config';

export default function(hostname) {
  const { APIBasePath } = config;
  const defaultClient = EASApi.ApiClient.instance;

  // hostname is only set server side. In client side the path will be relative
  defaultClient.basePath = `${hostname || ''}${APIBasePath}`;
  defaultClient.timeout = 10000;
}

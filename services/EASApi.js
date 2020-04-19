import * as EASApi from 'echaloasuerte-js-sdk';
import config from '../config/config';

const { APIBasePath } = config;

const defaultClient = EASApi.ApiClient.instance;
defaultClient.basePath = APIBasePath;

export default EASApi;

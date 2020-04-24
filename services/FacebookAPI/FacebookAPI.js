// eslint-disable-line no-console
import config from '../../config';

const DEBUG = false;
const log = message => DEBUG && console.log(message);

/**
 * Set up the FB SDK
 * @param {function} onStatusChange - Login/logout callback.
 * @return {undefined}
 */
export const fbAsyncInit = async onStatusChange => {
  window.cypressEas = { statusChange: onStatusChange }; // This is only used for integration tests
  window.fbAsyncInit = () => {
    log('init FB');
    window.FB.init({
      appId: config.facebookAppId,
      autoLogAppEvents: true,
      xfbml: true,
      status: true,
      version: 'v5.0',
    });
    window.FB.Event.subscribe('auth.statusChange', onStatusChange);

    window.FB.Event.subscribe('auth.statusChange', response => {
      log(response.authResponse);
      if (response.authResponse) {
        log('logged in');
      } else {
        log('logged out');
      }
    });
    window.FB.getLoginStatus(onStatusChange);
  };
};

export const injectScript = locale => {
  // eslint-disable-next-line func-names
  (function(d, s, id) {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s);
    js.id = id;
    // const locale = i18n.language.replace('-', '_');
    js.src = `https://connect.facebook.net/${locale}/sdk.js`;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

const promisifiedApi = (apiEndpoint, options) =>
  new Promise(resolve => {
    window.FB.api(apiEndpoint, options, response => resolve(response));
  });

/**
 * Make an API call
 * @param {string} endpoint - Endpoint to hit. E.g '/123123213/likes'
 * @param {string} accessToken - Access token used to make the request '/123123213/likes'
 * @return {Promise} - Response from the API
 */
export const apiCall = async (endpoint, accessToken = null) =>
  new Promise(async (resolve, reject) => {
    log(`Facebook API call: ${endpoint} (Access Token: ${accessToken})`);
    const options = accessToken ? { access_token: accessToken } : {};
    const response = await promisifiedApi(endpoint, options);
    if (response && !response.error) {
      return resolve(response);
    }
    return reject(response);
  });

/**
 * Get the current user's name and id
 * @return {object} - Contains the username and userId
 * @throws {Exception}
 */
export const queryUserDetails = async () => {
  const response = await apiCall('/me');
  if (!response || response.error) {
    throw Error('Unable to get user details', response.error);
  }
  return {
    username: response.name,
    userId: response.id,
  };
};

/**
 * Get the people who liked a given facebook object
 * @param {string} objectId - Facebook object to check
 * @param {string} pageAccessToken - Page Access Token'
 * @return {Array} - People who liked the given object
 */
export const getLikesOnObject = async (objectId, pageAccessToken = null) => {
  const response = await apiCall(`${objectId}/likes`, pageAccessToken);
  const participants = response.data.map(item => item.name);
  return participants;
  // this.onFieldChange('participants', participants);
};

function getUrlParams(search) {
  const hashes = search.slice(search.indexOf('?') + 1).split('&');
  return hashes.reduce((params, hash) => {
    const [key, val] = hash.split('=');
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
}

export const getObjectIdFromUrl = urlString => {
  log('url:', urlString);
  const url = new URL(urlString);
  const path = url.pathname.replace(/\/$/, '');
  const searchParams = getUrlParams(url.search);
  let parcialObjectId = searchParams.story_fbid;
  let pageId = searchParams.id;
  if (pageId && parcialObjectId) {
    return `${pageId}_${parcialObjectId}`;
  }

  const PageRegex = /\/([0-9]+)/;
  const pageIdResults = path.match(PageRegex);
  if (!pageIdResults || pageIdResults.length <= 1) {
    throw Error('URL not valid');
  }
  pageId = pageIdResults[1];

  const objectRegex = /\/([0-9]+)(?=[^/]*$)/;
  const parcialObjectIdResults = path.match(objectRegex);
  if (!parcialObjectIdResults || parcialObjectIdResults.length <= 1) {
    throw Error('URL not valid');
  }
  parcialObjectId = parcialObjectIdResults[1];
  return `${pageId}_${parcialObjectId}`;
};

export const logout = () => {
  window.FB.logout(() => {});
};

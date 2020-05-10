const isServer = !(typeof window !== 'undefined' && window.document);

const environment = process.env.APP_ENV;

const releaseCommit = process.env.RELEASE_COMMIT;

/**
 * Returns the current url without hashes or querystring params
 * This function should only be used when we don't need that url
 * on the server (e.g: in share buttons)
 * @returns {string} Current URL
 */
function getCurrentUrlFromWindow() {
  if (isServer) {
    return '';
  }
  const { host, pathname } = window.location;
  return `https://${host}${pathname}`;
}

export { isServer, environment, releaseCommit, getCurrentUrlFromWindow };

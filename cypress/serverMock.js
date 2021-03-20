/**
 * When running the integration tests with Cypress we need to mock the calls
 * done from the server (when doing SSR).
 */
const nock = require('nock');
const fs = require('fs');
const path = require('path');

const normalizedPath = path.join(__dirname, 'fixtures');

function mockServerCalls() {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const fixturesSets = fs.readdirSync(normalizedPath).map(file => require(`./fixtures/${file}`));
  let fixtures = fixturesSets.map(fixturesSet =>
    fixturesSet.filter(fixture => fixture.method === 'GET'),
  );

  // Flatten the array
  fixtures = [].concat(...fixtures);

  fixtures.forEach(fixture => {
    const { response, method, path: url } = fixture;
    nock('http://127.0.0.1:8000').persist().intercept(url, method).reply(200, response);
  });
}

module.exports = mockServerCalls;

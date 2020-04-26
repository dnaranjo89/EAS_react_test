/**
 * When running the integration tests with Cypress we need to mock the calls
 * done from the server (when doing SSR).
 */

const nock = require('nock');

const groupsJson = require('./fixtures/GroupsGenerator.json');

const callToMock = [
  // A draw with results
  '/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b/',
  // A request of a schedule draw which doesn't have results yet
  '/api/groups/af52a47d-98fd-4685-8510-aaaaaaaaaaaa/',
];

const fixtures = groupsJson.filter(fixture => callToMock.includes(fixture.path));

fixtures.forEach(fixture => {
  const { response, method, path } = fixture;
  nock('http://127.0.0.1:8000')
    .persist()
    .intercept(path, method)
    .reply(200, response);
});

/**
 * When running the integration tests with Cypress we need to mock the calls
 * done from the server (when doing SSR).
 */
const nock = require('nock');
const groupsJson = require('./fixtures/GroupsGenerator.json');
const raffleJson = require('./fixtures/Raffle.json');
const facebookJson = require('./fixtures/FacebookRaffle.json');

function getGroupsFixtures() {
  const callToMock = [
    // A draw with results
    '/api/groups/af52a47d-98fd-4685-8510-26d342e16f9b/',
    // A request of a schedule draw which doesn't have results yet
    '/api/groups/af52a47d-98fd-4685-8510-aaaaaaaaaaaa/',
  ];

  return groupsJson.filter(fixture => callToMock.includes(fixture.path));
}

function getRaffleFixtures() {
  const callToMock = [
    // A draw with results
    '/api/raffle/b29f44c2-1022-408a-925f-63e5f77a12ad/',
    // A request of a schedule draw which doesn't have results yet
    '/api/raffle/b29f44c2-1022-408a-925f-aaaaaaaaaaaa/',
  ];
  return raffleJson.filter(fixture => callToMock.includes(fixture.path));
}

function getFacebookRaffleFixtures() {
  const callToMock = [
    // A draw with results
    '/api/raffle/11111111-1022-408a-925f-63e5f77a12ad/',
    // A request of a schedule draw which doesn't have results yet
    '/api/raffle/11111111-1022-408a-925f-aaaaaaaaaaaa/',
  ];
  return facebookJson.filter(fixture => callToMock.includes(fixture.path));
}

function mockServerCalls() {
  const groupsFixtures = getGroupsFixtures();
  const raffleFixtures = getRaffleFixtures();
  const facebookRaffleFixtures = getFacebookRaffleFixtures();
  const fixtures = [...groupsFixtures, ...raffleFixtures, ...facebookRaffleFixtures];

  fixtures.forEach(fixture => {
    const { response, method, path } = fixture;
    nock('http://127.0.0.1:8000')
      .persist()
      .intercept(path, method)
      .reply(200, response);
  });
}

module.exports = mockServerCalls;

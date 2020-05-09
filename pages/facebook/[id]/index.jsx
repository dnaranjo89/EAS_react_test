import React from 'react';
import { RaffleApi } from 'echaloasuerte-js-sdk';
import * as Sentry from '@sentry/browser';
import PublishedFacebookRafflePage from '../../../components/Pages/FacebookRaffle/PublishedFacebookRafflePage.jsx';
import FacebookProvider from '../../../hocs/FacebookProvider.jsx';

const raffleApi = new RaffleApi();

// TODO Need to check what happens when results are published and no one registered
const loadData = async drawId => {
  const draw = await raffleApi.raffleRead(drawId);
  const { id, private_id: privateId, title, description, participants, prizes, results } = draw;
  const lastToss = results[0];
  return {
    id,
    title,
    description,
    participants,
    prizes,
    result: lastToss,
    isOwner: Boolean(privateId),
  };
};

const PublishedFacebookPage = props => (
  <FacebookProvider>
    <PublishedFacebookRafflePage {...props} />;
  </FacebookProvider>
);

PublishedFacebookPage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  let draw;
  try {
    draw = await loadData(drawId);
  } catch (error) {
    Sentry.withScope(scope => {
      scope.setExtra('message', 'API Error');
      scope.setExtra('Action', 'raffleRead');
      scope.setExtra('drawId', drawId);
      Sentry.captureException(error);
    });
  }
  return {
    draw,
    namespacesRequired: ['DrawFacebook', 'CommonPublishedDraw', 'Common'],
  };
};
export default PublishedFacebookPage;

import { RaffleApi } from 'echaloasuerte-js-sdk';
import * as Sentry from '@sentry/node';
import PublishedRafflePage from '../../../components/Pages/Raffle/PublishedRafflePage.jsx';

const raffleApi = new RaffleApi();

const loadData = async drawId => {
  try {
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
      isLoading: false,
    };
  } catch (error) {
    Sentry.withScope(scope => {
      scope.setExtra('message', 'API Error');
      scope.setExtra('Action', 'raffleRead');
      scope.setExtra('drawId', drawId);
      Sentry.captureException(error);
    });
    throw error;
  }
};

PublishedRafflePage.getInitialProps = async ctx => {
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
    throw error;
  }
  return {
    draw,
    namespacesRequired: ['DrawRaffle', 'CommonPublishedDraw', 'Common'],
  };
};

export default PublishedRafflePage;

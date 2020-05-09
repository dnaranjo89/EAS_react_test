import { RandomNumberApi } from 'echaloasuerte-js-sdk';
import * as Sentry from '@sentry/node';
import PublishedRandomNumberPage from '../../../components/Pages/RandomNumber/PublishedRandomNumberPage.jsx';

const randomNumberApi = new RandomNumberApi();

const loadData = async drawId => {
  const draw = await randomNumberApi.randomNumberRead(drawId);
  const {
    private_id: privateId,
    title,
    description,
    range_min: rangeMin,
    range_max: rangeMax,
    number_of_results: numberOfResults,
    allow_repeated_results: allowRepeated,
  } = draw;
  let lastToss;
  if (draw.results.length) {
    lastToss = draw.results[0];
  }

  return {
    title,
    description,
    rangeMin,
    rangeMax,
    numberOfResults,
    allowRepeated,
    result: lastToss,
    isOwner: Boolean(privateId),
    isLoading: false,
  };
};

PublishedRandomNumberPage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  let draw;
  try {
    draw = await loadData(drawId);
  } catch (error) {
    Sentry.withScope(scope => {
      scope.setExtra('message', 'API Error');
      scope.setExtra('Action', 'numbersRead');
      scope.setExtra('drawId', drawId);
      Sentry.captureException(error);
    });
  }
  return {
    // TODO we need to make sure that all pages use the getInitialProps consistently
    namespacesRequired: ['NumberDraw', 'DrawPublishedCommon', 'common'],
    draw,
  };
};

export default PublishedRandomNumberPage;

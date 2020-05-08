import { RandomNumberApi } from 'echaloasuerte-js-sdk';
import * as Sentry from '@sentry/node';
import PublishedRandomNumberPage from '../../../components/Pages/RandomNumber/PublishedRandomNumberPage.jsx';

const randomNumberApi = new RandomNumberApi();

const loadData = async drawId => {
  console.log('drawid', drawId);
  const draw = await randomNumberApi.randomNumberRead(drawId);
  console.log('draw', draw);
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
  let draw = null;
  try {
    draw = await loadData(drawId);
  } catch (error) {
    console.log('error', error);
    Sentry.withScope(scope => {
      scope.setExtra('message', 'API Error');
      scope.setExtra('Action', 'numbersRead');
      scope.setExtra('drawId', drawId);
      Sentry.captureException(error);
    });
  }
  return {
    namespacesRequired: ['NumberDraw', 'DrawPublishedCommon'],
    draw,
  };
};

export default PublishedRandomNumberPage;

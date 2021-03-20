import {
  RandomNumberApi,
  RandomNumber,
  LetterApi,
  Letter,
  GroupsApi,
  Groups,
  RaffleApi,
  Raffle,
  Lottery,
  LotteryApi,
  DrawTossPayload,
  LinkApi,
  Link,
} from 'echaloasuerte-js-sdk';
import Router from 'next/router';
import throttle from '../services/throttle';
import { logApiError } from './logger';
import recentDraws from '../services/recentDraws';
import { getDrawDataFromValues, getValuesFromDraw } from './draw';

import { analyticsTypesBySlug } from '../constants/analyticsTypes';
import {
  URL_SLUG_NUMBER,
  URL_SLUG_LETTER,
  URL_SLUG_GROUPS,
  URL_SLUG_RAFFLE,
  URL_SLUG_FACEBOOK,
  URL_SLUG_ITEM,
  URL_SLUG_SETS,
} from '../constants/urlSlugs';

const apisBySlug = {
  [URL_SLUG_NUMBER]: RandomNumberApi,
  [URL_SLUG_LETTER]: LetterApi,
  [URL_SLUG_GROUPS]: GroupsApi,
  [URL_SLUG_RAFFLE]: RaffleApi,
  [URL_SLUG_FACEBOOK]: RaffleApi,
  [URL_SLUG_ITEM]: LotteryApi,
  [URL_SLUG_SETS]: LinkApi,
};

const drawObjectBySlug = {
  [URL_SLUG_NUMBER]: RandomNumber,
  [URL_SLUG_LETTER]: Letter,
  [URL_SLUG_GROUPS]: Groups,
  [URL_SLUG_RAFFLE]: Raffle,
  [URL_SLUG_FACEBOOK]: Raffle,
  [URL_SLUG_ITEM]: Lottery,
  [URL_SLUG_SETS]: Link,
};

const apiDrawTypeBySlug = {
  [URL_SLUG_NUMBER]: 'randomNumber',
  [URL_SLUG_LETTER]: 'letter',
  [URL_SLUG_GROUPS]: 'groups',
  [URL_SLUG_RAFFLE]: 'raffle',
  [URL_SLUG_FACEBOOK]: 'raffle',
  [URL_SLUG_ITEM]: 'lottery',
  [URL_SLUG_SETS]: 'link',
};

const apiToss = (urlSlug, privateId, payload = {}) => {
  const Api = apisBySlug[urlSlug];
  const functionName = `${apiDrawTypeBySlug[urlSlug]}Toss`; // functionName ~= randomNumberToss
  return new Api()[functionName](privateId, payload);
};

const apiCreate = (urlSlug, drawData) => {
  const Api = apisBySlug[urlSlug];
  const functionName = `${apiDrawTypeBySlug[urlSlug]}Create`; // functionName ~= randomNumberCreate
  const drawObject = drawObjectBySlug[urlSlug].constructFromObject(drawData);
  return new Api()[functionName](drawObject);
};

const apiRead = ({ urlSlug, drawId }) => {
  const Api = apisBySlug[urlSlug];
  const functionName = `${apiDrawTypeBySlug[urlSlug]}Read`; // functionName ~= randomNumberRead
  return new Api()[functionName](drawId);
};

// Publishing a draw is just tossing with a scheduledDate
const apiPublish = (urlSlug, privateId, dateScheduled) => {
  const payload = DrawTossPayload.constructFromObject({ schedule_date: dateScheduled });
  return apiToss(urlSlug, privateId, payload);
};

// eslint-disable-next-line import/prefer-default-export
export const toss = async ({
  values,
  privateId,
  urlSlug,
  setLoadingRequest,
  track,
  setAPIError,
  setQuickResult,
  t,
}) => {
  logApiError(new Error('A client error!'), {});
  const analyticsType = analyticsTypesBySlug[urlSlug];
  const tsStart = new Date().getTime();
  setLoadingRequest(true);

  let shouldRedirect;
  let privateIdToToss;
  try {
    if (!privateId) {
      const drawData = getDrawDataFromValues({ urlSlug, values, isPublic: false });
      const newDraw = await apiCreate(urlSlug, drawData);
      shouldRedirect = true;
      privateIdToToss = newDraw.private_id;
    } else {
      privateIdToToss = privateId;
    }

    const tossResponse = await apiToss(urlSlug, privateIdToToss);
    track({
      mp: {
        name: `Toss - ${analyticsType}`,
        properties: { drawType: analyticsType },
      },
      ga: { action: 'Toss', category: analyticsType },
    });
    await throttle(tsStart);
    if (shouldRedirect) {
      Router.push(`/${urlSlug}/[id]`, `/${urlSlug}/${privateIdToToss}`);
    } else {
      setAPIError(null);
      setLoadingRequest(false);
      setQuickResult(tossResponse);
    }
  } catch (error) {
    setAPIError(t('CommonCreateDraw:api_error'));
    logApiError(error, analyticsType);
    setLoadingRequest(false);
  }
};

export const publish = async ({ values, urlSlug, track, setLoadingRequest, setAPIError, t }) => {
  setLoadingRequest(true);
  const analyticsType = analyticsTypesBySlug[urlSlug];
  const { dateScheduled } = values;

  try {
    const drawData = getDrawDataFromValues({ urlSlug, values, isPublic: true });
    const newDraw = await apiCreate(urlSlug, drawData);
    await apiPublish(urlSlug, newDraw.private_id, dateScheduled);
    track({
      mp: {
        name: `Publish - ${analyticsType}`,
        properties: { drawType: analyticsType, drawId: newDraw.id },
      },
      ga: { action: 'Publish', category: analyticsType, label: newDraw.id },
    });

    const drawPath = `/${urlSlug}/${newDraw.id}`;
    const drawPathSuccess = `${drawPath}/success`;
    recentDraws.add(newDraw, drawPath, dateScheduled);
    Router.push(`/${urlSlug}/[id]/success`, drawPathSuccess);
  } catch (error) {
    logApiError(error, analyticsType);
    setAPIError(t('CommonCreateDraw:api_error'));
    setLoadingRequest(false);
  }
};

export const fetchDraw = async ({ urlSlug, drawId }) => {
  logApiError(new Error('A server Error!'), {});
  const draw = await apiRead({ urlSlug, drawId });
  return getValuesFromDraw({ urlSlug, draw });
};

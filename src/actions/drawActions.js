import { GroupsApi, RaffleApi } from 'echaloasuerte-js-sdk';
// import * as Sentry from '@sentry/browser';
import winston from 'winston';
import { FETCH_DRAW } from './types';

const groupsApi = new GroupsApi();
const raffleApi = new RaffleApi();

export const fetchRaffleDraw = drawId => dispatch =>
  new Promise((resolve, reject) => {
    raffleApi
      .raffleRead(drawId)
      .then(draw => {
        const { private_id: privateId, title, description, participants, prizes } = draw;
        const lastToss = draw.results[0];
        const scheduleDate = lastToss.schedule_date;
        const drawData = {
          title,
          description,
          participants,
          prizes,
          scheduleDate,
          result: lastToss,
          isOwner: Boolean(privateId),
          isLoading: false,
        };
        dispatch({ type: FETCH_DRAW, payload: drawData });
        resolve();
      })
      .catch(error => {
        // Sentry.withScope(scope => {
        //   scope.setExtra('message', 'API Error');
        //   scope.setExtra('Action', 'raffleRead');
        //   scope.setExtra('drawId', drawId);
        //   Sentry.captureException(error);
        // });
        winston.error('API Error: raffleRead', { drawId, error });
        reject(error);
        throw error;
      });
  });

// eslint-disable-next-line import/prefer-default-export
export const fetchDraw = drawId => dispatch =>
  new Promise((resolve, reject) => {
    groupsApi
      .groupsRead(drawId)
      .then(draw => {
        const {
          private_id: privateId,
          title,
          description,
          participants,
          number_of_groups: numberOfGroups,
        } = draw;
        const lastToss = draw.results[0];
        const scheduleDate = lastToss.schedule_date;
        const drawData = {
          title,
          description,
          participants,
          numberOfGroups,
          scheduleDate,
          result: lastToss,
          isOwner: Boolean(privateId),
          isLoading: false,
        };
        dispatch({ type: FETCH_DRAW, payload: drawData });
        resolve();
      })
      .catch(error => {
        // Sentry.withScope(scope => {
        //   scope.setExtra('message', 'API Error');
        //   scope.setExtra('Action', 'groupsRead');
        //   scope.setExtra('drawId', drawId);
        //   Sentry.captureException(error);
        // });
        winston.error('API Error: groupsRead', { drawId, error });
        reject(error);
        throw error;
      });
  });

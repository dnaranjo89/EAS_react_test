import {
  URL_SLUG_NUMBER,
  URL_SLUG_LETTER,
  URL_SLUG_GROUPS,
  URL_SLUG_RAFFLE,
  URL_SLUG_FACEBOOK,
  URL_SLUG_ITEM,
  URL_SLUG_SETS,
} from '../../constants/urlSlugs';
import { getNumberDrawDataFromValues, getNumberValuesFromDraw } from './number';
import { getLetterDrawDataFromValues, getLetterValuesFromDraw } from './letter';

import { getGroupsDrawDataFromValues, getGroupsValuesFromDraw } from './groups';
import { getRaffleDrawDataFromValues, getRaffleValuesFromDraw } from './raffle';
import {
  getFacebookRaffleDrawDataFromValues,
  getFacebookRaffleValuesFromDraw,
} from './facebookRaffle';
import { getItemsDrawDataFromValues, getItemsValuesFromDraw } from './item';
import { getLinkSetsDrawDataFromValues, getLinkSetsValuesFromDraw } from './linkSets';

const getDrawByUrlSlug = {
  [URL_SLUG_NUMBER]: getNumberDrawDataFromValues,
  [URL_SLUG_LETTER]: getLetterDrawDataFromValues,
  [URL_SLUG_GROUPS]: getGroupsDrawDataFromValues,
  [URL_SLUG_RAFFLE]: getRaffleDrawDataFromValues,
  [URL_SLUG_FACEBOOK]: getFacebookRaffleDrawDataFromValues,
  [URL_SLUG_ITEM]: getItemsDrawDataFromValues,
  [URL_SLUG_SETS]: getLinkSetsDrawDataFromValues,
};

const getValuesByUrlSlug = {
  [URL_SLUG_NUMBER]: getNumberValuesFromDraw,
  [URL_SLUG_LETTER]: getLetterValuesFromDraw,
  [URL_SLUG_GROUPS]: getGroupsValuesFromDraw,
  [URL_SLUG_RAFFLE]: getRaffleValuesFromDraw,
  [URL_SLUG_FACEBOOK]: getFacebookRaffleValuesFromDraw,
  [URL_SLUG_ITEM]: getItemsValuesFromDraw,
  [URL_SLUG_SETS]: getLinkSetsValuesFromDraw,
};

export const getDrawDataFromValues = ({ urlSlug, values, isPublic }) =>
  getDrawByUrlSlug[urlSlug]({ values, isPublic });

export const getValuesFromDraw = ({ urlSlug, draw }) => getValuesByUrlSlug[urlSlug]({ draw });

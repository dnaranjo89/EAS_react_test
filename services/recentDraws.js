import moment from 'moment';
import { isServer } from '../utils';

const recentDrawsKey = 'recentDraws';
const maxLength = 20;
const buildData = (draw, url, scheduleDate) => ({
  id: draw.id,
  title: draw.title,
  url,
  scheduleDate,
});
const getAll = () => (isServer ? [] : JSON.parse(localStorage.getItem(recentDrawsKey) || '[]'));

const add = (draw, url, scheduleDate) => {
  let unixDate;
  if (scheduleDate) {
    if (typeof scheduleDate === 'number') {
      unixDate = scheduleDate;
    } else {
      unixDate = moment(scheduleDate).unix();
    }
  }

  const recentDraws = getAll();
  const newDraw = buildData(draw, url, unixDate);
  const data = [newDraw].concat(recentDraws);
  if (data.length > maxLength) {
    data.pop();
  }
  localStorage.setItem(recentDrawsKey, JSON.stringify(data));
};

const exists = drawId => {
  const recentDraws = getAll();
  return recentDraws.find(draw => draw.id === drawId);
};

const removeDraw = drawId => {
  const recentDraws = getAll();
  const data = recentDraws.filter(draw => draw.id !== drawId);
  localStorage.setItem(recentDrawsKey, JSON.stringify(data));
};

const clear = () => {
  localStorage.clear();
};

export default { getAll, add, removeDraw, clear, exists };

import moment from 'moment';

export const getDateTime = date => moment(date).format('LLL');
export const getDate = date => moment(date).format('LL');
export const getTime = date => moment(date).format('LT');

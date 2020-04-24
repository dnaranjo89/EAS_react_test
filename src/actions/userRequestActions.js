import { SET_USER_AGENT } from './types';

// eslint-disable-next-line import/prefer-default-export
export const setUserAgent = userAgent => dispatch => {
  dispatch({ type: SET_USER_AGENT, payload: userAgent });
};

import { SET_USER_AGENT } from '../actions/types';

const initialState = {
  hostname: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_AGENT:
      return { ...state, userAgent: action.payload };
    default:
      return state;
  }
}

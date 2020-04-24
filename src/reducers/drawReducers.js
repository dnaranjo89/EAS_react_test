import { FETCH_DRAW } from '../actions/types';

const initialState = {
  draw: {
    title: '',
    description: '',
    participants: [],
    prizes: [],
    numberOfGroups: null,
    result: null,
    isOwner: false,
    isLoading: true,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRAW:
      return { ...state, draw: action.payload };
    default:
      return state;
  }
}

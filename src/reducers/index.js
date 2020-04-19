import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import drawReducers from './drawReducers';
import userRequestReducers from './userRequestReducers';

// const createRootReducer =  =>
//   combineReducers({
//     // router: connectRouter(history),
//     draws: drawReducers,
//     userRequest: userRequestReducers,
//   });

export default combineReducers({
  // router: connectRouter(history),
  draws: drawReducers,
  userRequest: userRequestReducers,
});

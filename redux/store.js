import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

export default initialState => {
  const store = createStore(
    state => state,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

  return store;
};

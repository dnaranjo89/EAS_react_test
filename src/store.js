/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import thunk from 'redux-thunk';
import parserUA from 'ua-parser-js';

import createRootReducer from './reducers';
import config from './config/config';

const { isServer } = config;

export default (url = '/', userRequestData) => {
  // Create a history depending on server or client
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url],
      })
    : createBrowserHistory();

  const enhancers = [];

  // Add dev tools
  if (!isServer) {
    // eslint-disable-next-line prefer-destructuring
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const middleware = [thunk, routerMiddleware(history)];
  const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

  const { userAgent } = userRequestData;
  const deviceType = parserUA(userAgent).device.type;
  const isMobile = deviceType === 'mobile';

  const initialState = {
    userRequest: {
      ...userRequestData,
      deviceType,
      isMobile,
    },
  };
  let state = initialState;

  // Do we have preloaded state available? save it.
  if (!isServer) {
    state = {
      ...state,
      ...window.__PRELOADED_STATE__,
    };
    // Delete it once we have it stored in a variable
    delete window.__PRELOADED_STATE__;
  }

  // Create the store
  const store = createStore(createRootReducer(history), state, composedEnhancers);

  return {
    store,
    history,
  };
};

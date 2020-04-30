/* eslint-disable no-underscore-dangle */
import React from 'react';
import parserUA from 'ua-parser-js';
import initializeStore from './store';
import { isServer } from '../utils';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

function getInitialState(appContext) {
  const userAgent = isServer
    ? appContext.ctx.req.headers['user-agent']
    : window.navigator.userAgent;
  const deviceType = parserUA(userAgent).device.type;
  const isMobile = deviceType === 'mobile';
  return {
    userRequest: {
      deviceType,
      isMobile,
    },
  };
}

export default App =>
  class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const initialState = getInitialState(appContext);
      const store = getOrCreateStore(initialState);

      // Provide the store to getInitialProps of pages
      // eslint-disable-next-line no-param-reassign
      appContext.ctx.store = store;

      return {
        ...(App.getInitialProps ? await App.getInitialProps(appContext) : {}),
        initialReduxState: store.getState(),
      };
    }

    render() {
      // eslint-disable-next-line react/prop-types
      const { initialReduxState } = this.props;
      return <App {...this.props} store={getOrCreateStore(initialReduxState)} />;
    }
  };

import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { MixpanelProvider } from 'react-mixpanel';
import mixpanel from 'mixpanel-browser';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withReduxStore from '../lib/with-redux-store';
import theme from '../EasTheme.jsx';

import config from '../config/config';

class MyApp extends App {
  constructor(props) {
    super(props);
    // if (config.googleAnalyticsEnabled) {
    //   ReactGA.initialize(config.googleAnalyticsID, { titleCase: false });
    // }
    if (config.mixpanelEnabled) {
      mixpanel.init(config.mixpanelID, { debug: config.mixpanelDebug, track_pageview: false });
    }
    // initI18n(props.hostname);
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {config.mixpanelEnabled ? (
            <MixpanelProvider mixpanel={mixpanel}>
              <Component {...pageProps} />
            </MixpanelProvider>
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);

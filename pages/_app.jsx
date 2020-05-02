import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import ReactGA from 'react-ga';

import { MixpanelProvider } from 'react-mixpanel';
import mixpanel from 'mixpanel-browser';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as Sentry from '@sentry/node';
import withReduxStore from '../redux/with-redux-store.jsx';
import theme from '../EasTheme.jsx';
import NextI18NextInstance from '../i18n';
import '../components/styles.scss';
import EasApi from '../services/EasApi';
import { environment, isServer } from '../utils';

import config from '../config';

if (!isServer && config.mixpanelEnabled) {
  mixpanel.init(config.mixpanelID, { debug: config.mixpanelDebug, track_pageview: false });
}

if (config.googleAnalyticsEnabled) {
  ReactGA.initialize(config.googleAnalyticsID, { titleCase: false });
}

EasApi.init();
Sentry.init({
  enabled: config.sentryEnabled,
  dsn: config.sentryDsn,
  environment,
});

class EasApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    // Workaround for issue with error logging
    // https://github.com/zeit/next.js/issues/8592
    const { err } = this.props;
    const modifiedPageProps = { ...pageProps, err };

    return (
      <Provider store={store}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {!isServer && config.mixpanelEnabled ? (
              <MixpanelProvider mixpanel={mixpanel}>
                <Component {...modifiedPageProps} />
              </MixpanelProvider>
            ) : (
              <Component {...modifiedPageProps} />
            )}
          </ThemeProvider>
        </StylesProvider>
      </Provider>
    );
  }
}

export default withReduxStore(NextI18NextInstance.appWithTranslation(EasApp));

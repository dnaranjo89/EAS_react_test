import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import ReactGA from 'react-ga';

import { MixpanelProvider } from 'react-mixpanel';
import mixpanel from 'mixpanel-browser';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as Sentry from '@sentry/node';
import withReduxStore from '../lib/with-redux-store';
import theme from '../EasTheme.jsx';
import NextI18NextInstance from '../i18n';
import '../components/styles.scss';
import setupApi from '../utils/setupApi';
// import initWinstonLogging from '../utils/logging/winston';

import config from '../config/config';

if (config.mixpanelEnabled) {
  mixpanel.init(config.mixpanelID, { debug: config.mixpanelDebug, track_pageview: false });
}

setupApi();

Sentry.init({
  // enabled: config.environment === 'production',
  dsn: config.sentryDsn,
  environment: config.environment,
});
// initWinstonLogging({ isServer: config.isServer });

class EasApp extends App {
  componentDidMount() {
    if (config.googleAnalyticsEnabled) {
      ReactGA.initialize(config.googleAnalyticsID, { titleCase: false });
    }

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    try {
      throw new Error('baammmm');
    } catch (error) {
      Sentry.withScope(scope => {
        scope.setExtra('message', 'now yes');
        scope.setExtra('Action', 'raffleRead');
        Sentry.captureException(error);
      });
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {config.mixpanelEnabled ? (
            <MixpanelProvider mixpanel={mixpanel}>
              <Component {...modifiedPageProps} />
            </MixpanelProvider>
          ) : (
            <Component {...modifiedPageProps} />
          )}
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(NextI18NextInstance.appWithTranslation(EasApp));

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { MixpanelProvider } from 'react-mixpanel';
import mixpanel from 'mixpanel-browser';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withReduxStore from '../lib/with-redux-store';
import theme from '../EasTheme.jsx';
import NextI18NextInstance from '../i18n';

import config from '../config/config';

if (config.mixpanelEnabled) {
  mixpanel.init(config.mixpanelID, { debug: config.mixpanelDebug, track_pageview: false });
}

const EasApp = props => {
  useEffect(() => {
    // if (config.googleAnalyticsEnabled) {
    //   ReactGA.initialize(config.googleAnalyticsID, { titleCase: false });
    // }

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const { Component, pageProps, store } = props;
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
};

export default withReduxStore(NextI18NextInstance.appWithTranslation(EasApp));

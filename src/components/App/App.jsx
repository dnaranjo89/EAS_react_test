import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import ReactGA from 'react-ga';

import theme from './EasTheme';
import i18n from '../../i18n/i18n';
import AppShell from '../AppShell/AppShell';
import FacebookProvider from './../FacebookProvider/FacebookProvider';
import config from '../../config/config';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

class App extends Component {
  constructor(props) {
    super(props);
    if (config.enableGoogleAnalytics) {
      console.log('GAID', config.googleAnalyticsID);
      ReactGA.initialize(config.googleAnalyticsID);
    }
    if (config.enableSentry) {
      // eslint-disable-next-line no-undef
      Raven.config('https://bebd8f08ca1e44b0bd2b2d5f352332f4@sentry.io/1247679', {
        environment: config.environment,
      }).install();
    }
  }

  render() {
    return (
      <ErrorBoundary
        render={() => (
          <ErrorPage>Something went bad, but we are working very hard to fix it</ErrorPage>
        )}
      >
        <I18nextProvider i18n={i18n}>
          <MuiThemeProvider theme={theme}>
            <FacebookProvider>
              <BrowserRouter>
                <AppShell />
              </BrowserRouter>
            </FacebookProvider>
          </MuiThemeProvider>
        </I18nextProvider>
      </ErrorBoundary>
    );
  }
}

export default App;

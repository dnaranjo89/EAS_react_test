import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider } from 'react-mixpanel';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
// import showCookieBanner from '../../services/cookieConsent';
import initI18n from '../../i18n';
import AppShell from '../AppShell/AppShell.jsx';
import FacebookProvider from '../FacebookProvider/FacebookProvider.jsx';
import config from '../../config/config';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import theme from '../../EasTheme.jsx';

// import { hotjar } from '../../services/hotjar';

class App extends Component {
  constructor(props) {
    super(props);
    if (config.googleAnalyticsEnabled) {
      ReactGA.initialize(config.googleAnalyticsID, { titleCase: false });
    }
    if (config.mixpanelEnabled) {
      mixpanel.init(config.mixpanelID, { debug: config.mixpanelDebug, track_pageview: false });
    }
    initI18n(props.hostname);
  }

  componentDidMount() {
    // Disabling hotjar as we are enabling it at page level
    // if (config.hotjarEnabled) {
    //   hotjar.initialize(1051921, 6);
    // }
    // showCookieBanner();
  }

  render() {
    return (
      <ErrorBoundary
        render={() => (
          <ErrorPage>Something went bad, but we are working very hard to fix it</ErrorPage>
        )}
      >
        <FacebookProvider>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              {false ? (
                <MixpanelProvider mixpanel={mixpanel}>
                  <AppShell />
                </MixpanelProvider>
              ) : (
                <AppShell />
              )}
            </ThemeProvider>
          </StylesProvider>
        </FacebookProvider>
      </ErrorBoundary>
    );
  }
}

App.propTypes = {
  hostname: PropTypes.string.isRequired,
};

const mapsStateToProps = state => ({ hostname: state.userRequest.hostname });

export default connect(mapsStateToProps)(App);

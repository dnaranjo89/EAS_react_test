/* ********************************************************
 *          Client Side Rendering entry point             *
 ******************************************************** */
import React from 'react';
import ReactDOM from 'react-dom';
import { Frontload } from 'react-frontload';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import * as Sentry from '@sentry/browser';
import App from './components/App/App.jsx';
import theme from './EasTheme.jsx';
import DeviceDetector from './components/DeviceDetector/DeviceDetector.jsx';
import setupApi from './setupApi';
import createStore from './store';
import { initWinstonLogging } from './logging';
import config from './config/config';

setupApi();
initWinstonLogging({ isServer: false });
const { store, history } = createStore();

// Sentry Browser Sentry
Sentry.init({
  dsn: config.sentryDsn,
  environment: config.environment,
});

class Application extends React.Component {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Frontload noServerRender>
            <ThemeProvider theme={theme}>
              <DeviceDetector userAgent={window.navigator.userAgent}>
                <App />
              </DeviceDetector>
            </ThemeProvider>
          </Frontload>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(React.createElement(Application), document.getElementById('root'));

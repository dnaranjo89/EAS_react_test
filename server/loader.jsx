import path from 'path';
import fs from 'fs';
import React from 'react';
import * as Sentry from '@sentry/node';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import setupApi from '../src/setupApi';
import createStore from '../src/store';
import App from '../src/components/App/App.jsx';

export default (req, res) => {
  /*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - SEO meta tags
      - Preloaded state (for Redux) depending on the current route
      - Code-split script tags depending on the current route
  */
  const injectHTML = (data, { html, title, meta, link, body, state, css }) => {
    let content = data;
    content = content.replace('<html>', `<html ${html}>`);
    content = content.replace(/<title>.*?<\/title>/g, title);
    content = content.replace('</head>', `${meta}${link}</head>`);
    content = content.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`,
    );
    content = content.replace(
      '<style id="jss-server-side"></style>',
      `<style id="jss-server-side">${css}</style>`,
    );
    return content;
  };
  const hostname = req.headers.host;

  if (!hostname) {
    Sentry.captureEvent({
      message: "The request doesn't have the host header (server side)",
    });
  }

  // Setup the EAS API
  setupApi(hostname);

  const sheets = new ServerStyleSheets();

  // Load in our HTML file from our build
  // eslint-disable-next-line consistent-return
  fs.readFile(path.resolve(__dirname, '../build/index.html'), 'utf8', (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);
      return res.status(404).end();
    }
    const userRequestData = {
      userAgent: req.headers['user-agent'],
      hostname,
    };
    const { store } = createStore(req.url, userRequestData);

    const context = {};
    frontloadServerRender(() =>
      renderToString(
        sheets.collect(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <Frontload>
                <App />
              </Frontload>
            </StaticRouter>
          </Provider>,
        ),
      ),
    ).then(routeMarkup => {
      // We need to tell Helmet to compute the right meta tags, title, and such
      const helmet = Helmet.renderStatic();

      // Grab the materialUI CSS.
      const css = sheets.toString();

      // Build the markup
      const html = injectHTML(htmlData, {
        html: helmet.htmlAttributes.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        link: helmet.link.toString(),
        body: routeMarkup,
        state: JSON.stringify(store.getState()).replace(/</g, '\\u003c'),
        css,
      });

      res.send(html);
    });
  });
};

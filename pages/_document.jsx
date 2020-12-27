import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../EasTheme.jsx';
import { releaseCommit } from '../utils';

export default class MyDocument extends Document {
  render() {
    const { materialUiStyles } = this.props;

    return (
      <Html data-release-commit={releaseCommit}>
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/static/fonts/fredoka-one-v7-latin-regular.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/static/fonts/montserrat-v14-latin-regular.woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" href="/favicon.ico" />

          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />

          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {materialUiStyles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// TODO for some reason fonts are not being loaded in SSG
MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    materialUiStyles: sheets.getStyleElement(),
  };
};

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../EasTheme.jsx';
import { releaseCommit } from '../utils';

export default class MyDocument extends Document {
  render() {
    const { language, materialUiStyles } = this.props;

    return (
      <Html lang={language} data-release-commit={releaseCommit}>
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/_next/static/fonts/fredoka-one-v7-latin-regular.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/_next/static/fonts/montserrat-v14-latin-regular.woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" href="/favicon.ico" />

          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {materialUiStyles}
        </Head>
        <body>
          <style jsx>{`
            /* montserrat-regular - latin */
            @font-face {
              font-family: Montserrat;
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: local('Montserrat Regular'), local('Montserrat-Regular'),
                url('/_next/static/fonts/montserrat-v14-latin-regular.woff2') format('woff2'),
                /* Chrome 26+, Opera 23+, Firefox 39+ */
                  url('/fonts/montserrat-v14-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            }

            /* fredoka-one-regular - latin */
            @font-face {
              font-family: 'Fredoka One';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: local('Fredoka One'), local('FredokaOne-Regular'),
                url('/_next/static/fonts/fredoka-one-v7-latin-regular.woff2') format('woff2'),
                /* Chrome 26+, Opera 23+, Firefox 39+ */
                  url('/fonts/fredoka-one-v7-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

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

  const { res } = ctx;
  const { locals } = res;
  const additionalProps = {
    language: locals.language,
  };

  return {
    ...initialProps,
    ...additionalProps,
    materialUiStyles: sheets.getStyleElement(),
  };
};

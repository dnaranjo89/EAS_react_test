const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['echaloasuerte-js-sdk', 'three']);
const withSourceMaps = require('@zeit/next-source-maps')();
const nextTranslate = require('next-translate');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// next.config.js
const withFonts = require('next-fonts');
// Use the SentryWebpack plugin to upload the source maps during build step
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const chalk = require('chalk');
const { getEnvironmentAtBuildTime, isDevelopmentServer } = require('./utils/environment');
const { TYPE_APP_ENV_TEST } = require('./constants/environment');

const { REACT_APP_COMMIT, SENTRY_AUTH_TOKEN, SENTRY_ORG, SENTRY_PROJECT } = process.env;

const environment = getEnvironmentAtBuildTime();
// eslint-disable-next-line no-console
console.log(chalk.yellow('Using', chalk.underline.bold(environment), 'settings'));

// We need to mock the server side requests when running the integration tests with Cypress
if (environment === TYPE_APP_ENV_TEST) {
  // eslint-disable-next-line global-require
  const setupServerMock = require('./cypress/serverMock');
  setupServerMock();
}

const basePath = '';

module.exports = nextTranslate(
  withBundleAnalyzer(
    // The image optimisations because it automatically inlines small images (in base64)
    // And that is not supported by the OG images (they need to be URLs). That's forcing us to use OG images
    // heavier than this threshold
    withImages(
      withTM(
        withFonts(
          withSourceMaps({
            env: {
              APP_ENV: environment,
              RELEASE_COMMIT: REACT_APP_COMMIT,
            },
            basePath,
            webpack: (config, options) => {
              // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
              // @sentry/node will run in a Node.js environment. @sentry/node will use
              // Node.js-only APIs to catch even more unhandled exceptions.
              //
              // This works well when Next.js is SSRing your page on a server with
              // Node.js, but it is not what we want when your client-side bundle is being
              // executed by a browser.
              //
              // Luckily, Next.js will call this webpack function twice, once for the
              // server and once for the client. Read more:
              // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
              //
              // So ask Webpack to replace @sentry/node imports with @sentry/browser when
              // building the browser's bundle
              if (!options.isServer) {
                // eslint-disable-next-line no-param-reassign
                config.resolve.alias['@sentry/node'] = '@sentry/browser';
              }

              // Define an environment variable so source code can check whether or not
              // it's running on the server so we can correctly initialize Sentry
              config.plugins.push(
                new options.webpack.DefinePlugin({
                  'process.env.NEXT_IS_SERVER': JSON.stringify(options.isServer.toString()),
                }),
              );

              // When all the Sentry configuration env variables are available/configured
              // The Sentry webpack plugin gets pushed to the webpack plugins to build
              // and upload the source maps to sentry.
              // This is an alternative to manually uploading the source maps
              // Note: This is disabled in development mode.
              if (
                !isDevelopmentServer &&
                environment !== TYPE_APP_ENV_TEST &&
                SENTRY_AUTH_TOKEN &&
                SENTRY_ORG &&
                SENTRY_PROJECT &&
                REACT_APP_COMMIT
              ) {
                config.plugins.push(
                  new SentryWebpackPlugin({
                    include: '.next',
                    ignore: ['node_modules'],
                    stripPrefix: ['webpack://_N_E/'],
                    urlPrefix: `~${basePath}/_next`,
                    release: REACT_APP_COMMIT,
                  }),
                );
              }

              return {
                ...config,
              };
            },
          }),
        ),
      ),
    ),
  ),
);

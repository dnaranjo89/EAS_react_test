import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import config from '../config';
import { environment, releaseCommit } from '.';
import { TYPE_APP_ENV_LOCAL, TYPE_APP_ENV_TEST } from '../constants/environment';

// eslint-disable-next-line import/prefer-default-export
export const logApiError = (error, drawType) => {
  if ([TYPE_APP_ENV_LOCAL, TYPE_APP_ENV_TEST].includes(environment)) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  Sentry.withScope(scope => {
    scope.setTag('errorType', 'API error');
    scope.setTag('drawType', drawType);
    if (error instanceof Error) {
      Sentry.captureException(error);
    } else {
      // For some reason our SDK seem to return plain objects instead of errors
      // Sentry does not handle them properly so we need to convert them
      const errorObject = new Error(error.error.message);
      errorObject.stack = error.error.stack;
      Sentry.captureException(errorObject);
    }
  });
};

// In order to log events to a different Sentry account we just need to update the
// `NEXT_PUBLIC_SENTRY_DSN` env var to the appropriate DSN.
// If we also want to send Sentry the sourcemaps (which we want), we also need to update
// `SENTRY_ORG`, `SENTRY_PROJECT` and `SENTRY_AUTH_TOKEN`. Note that `SENTRY_AUTH_TOKEN`
// is a secret so it should be set up in the pipeline.
// Find more details in https://github.com/vercel/next.js/tree/canary/examples/with-sentry
export const initSentry = () => {
  const integrations = [];
  if (process.env.NEXT_IS_SERVER === 'true' && process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR) {
    // For Node.js, rewrite Error.stack to use relative paths, so that source
    // maps starting with ~/_next map to files in Error.stack with path
    // app:///_next
    integrations.push(
      new RewriteFrames({
        iteratee: frame => {
          // eslint-disable-next-line no-param-reassign
          frame.filename = frame.filename.replace(
            process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR,
            'app:///',
          );
          // eslint-disable-next-line no-param-reassign
          frame.filename = frame.filename.replace('.next', '_next');
          return frame;
        },
      }),
    );
  }

  Sentry.init({
    enabled: config.sentryEnabled,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment,
    integrations,
    release: releaseCommit,
  });
  // }
};

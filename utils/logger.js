import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import config from '../config';
import { environment, releaseCommit } from '.';
import { TYPE_APP_ENV_LOCAL, TYPE_APP_ENV_TEST } from '../constants/environment';

// eslint-disable-next-line import/prefer-default-export
export const logApiError = (error, extra) => {
  if ([TYPE_APP_ENV_LOCAL, TYPE_APP_ENV_TEST].includes(environment)) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  Sentry.withScope(scope => {
    scope.setTag('errorType', 'API error');
    Object.keys(extra).forEach(key => {
      scope.setTag(key, extra[key]);
    });
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

export const initSentry = () => {
  if (config.sentryDsn) {
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
      dsn: config.sentryDsn,
      environment,
      integrations,
      release: releaseCommit,
    });
  }
};

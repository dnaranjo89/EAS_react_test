import * as Sentry from '@sentry/browser';
import { environment } from '.';
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
    Sentry.captureException(error);
  });
};

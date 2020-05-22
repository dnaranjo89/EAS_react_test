import * as Sentry from '@sentry/browser';

// eslint-disable-next-line import/prefer-default-export
export const logApiError = (error, drawType) =>
  Sentry.withScope(scope => {
    scope.setTag('errorType', 'API error');
    scope.setTag('drawType', drawType);
    Sentry.captureException(error);
  });

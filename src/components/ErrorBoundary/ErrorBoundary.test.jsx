import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as Sentry from '@sentry/browser';
import ErrorBoundary from './ErrorBoundary.jsx';

const waitForExpect = require('wait-for-expect');

const sentryTestkit = require('sentry-testkit');

const ErrorChild = () => {
  throw Error('Exception stuff');
};

const swallowErrors = codeToRun => {
  const { error } = console; // eslint-disable-line no-console
  console.error = () => {}; // eslint-disable-line no-console
  codeToRun();
  console.error = error; // eslint-disable-line no-console
};

describe('ErrorBoundary', () => {
  it('Should catch errors', () => {
    swallowErrors(() => {
      const wrapper = mount(
        <ErrorBoundary render={() => 'Fire, this is fine'}>
          <ErrorChild />
        </ErrorBoundary>,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  it('Should try to send the error to Sentry', async () => {
    const { testkit, sentryTransport } = sentryTestkit();
    Sentry.init({
      dsn: 'https://1abd369d5cc644ae8e9ec016f43c46b5@sentry.io/1412847',
      transport: sentryTransport,
    });
    swallowErrors(() => {
      mount(
        <ErrorBoundary render={() => 'Fire, this is fine'}>
          <ErrorChild />
        </ErrorBoundary>,
      );
    });

    await waitForExpect(() => {
      const reports = testkit.reports();
      expect(reports.length).toBeGreaterThan(0);
      expect(JSON.stringify(reports)).toContain('Exception stuff');
    });
  });
});

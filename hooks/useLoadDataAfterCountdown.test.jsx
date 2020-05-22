import React from 'react';
import { mount } from 'enzyme';
import * as nextRouter from 'next/router';
import useLoadDataAfterCountdown from './useLoadDataAfterCountdown';

const pushMock = jest.fn();
nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ push: pushMock }));

const TestHook = ({ callback }) => {
  callback();
  return null;
};

const testHook = callback => {
  mount(<TestHook callback={callback} />);
};

describe('useLoadDataAfterCountdown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    pushMock.mockClear();
  });
  describe('when countdown is over', () => {
    beforeEach(() => {
      const someDate = new Date('2020-10-26T21:06:53.000Z');
      Date.now = jest.fn(() => someDate);
    });
    it('should request data if there are no results yet', () => {
      const draw = {
        result: {
          created_at: '2019-10-26T20:06:57.853Z',
          schedule_date: '2019-10-26T21:06:53.000Z',
          value: null,
        },
      };
      testHook(() => {
        useLoadDataAfterCountdown(draw, pushMock);
      });
      expect(pushMock).toHaveBeenCalled();
    });
    it('should not request data if there is a result already', () => {
      const draw = {
        result: {
          created_at: '2019-10-26T20:06:57.853Z',
          schedule_date: '2019-10-26T21:06:53.000Z',
          value: [],
        },
      };
      testHook(() => {
        useLoadDataAfterCountdown(draw, pushMock);
      });
      expect(pushMock).toHaveBeenCalledTimes(0);
      expect(setTimeout).not.toHaveBeenCalled();
    });
  });

  describe('when countdown is not over', () => {
    beforeEach(() => {
      const someDate = new Date('2016-10-26T21:06:53.000Z');
      Date.now = jest.fn(() => someDate);
    });
    it('should setTimeout to schedule the request', () => {
      const draw = {
        result: {
          created_at: '2019-10-26T20:06:57.853Z',
          schedule_date: '2019-10-26T21:06:53.000Z',
          value: null,
        },
      };
      testHook(() => {
        useLoadDataAfterCountdown(draw, pushMock);
      });
      expect(pushMock).toHaveBeenCalledTimes(0);
      expect(setTimeout).toHaveBeenCalledWith(expect.anything(), 94608000000);
    });
  });
});

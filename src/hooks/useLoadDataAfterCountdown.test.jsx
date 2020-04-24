import React from 'react';
import { mount } from 'enzyme';
import useLoadDataAfterCountdown from './useLoadDataAfterCountdown';

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
  });
  describe('when countdown is over', () => {
    beforeEach(() => {
      const someDate = new Date('2020-10-26T21:06:53.000Z');
      Date.now = jest.fn(() => someDate);
    });
    it('should request data if there are no results yet', () => {
      const loadData = jest.fn();
      const result = {
        created_at: '2019-10-26T20:06:57.853Z',
        schedule_date: '2019-10-26T21:06:53.000Z',
        value: null,
      };
      testHook(() => {
        useLoadDataAfterCountdown(result, loadData);
      });
      expect(loadData).toHaveBeenCalled();
    });
    it('should not request data if there is a result already', () => {
      const loadData = jest.fn();
      const result = {
        created_at: '2019-10-26T20:06:57.853Z',
        schedule_date: '2019-10-26T21:06:53.000Z',
        value: [],
      };
      testHook(() => {
        useLoadDataAfterCountdown(result, loadData);
      });
      expect(loadData).toHaveBeenCalledTimes(0);
      expect(setTimeout).not.toHaveBeenCalledWith(loadData, expect.anything());
    });
  });

  describe('when countdown is not over', () => {
    beforeEach(() => {
      const someDate = new Date('2016-10-26T21:06:53.000Z');
      Date.now = jest.fn(() => someDate);
    });
    it('should setTimeout to schedule the request', () => {
      const loadData = jest.fn();
      const result = {
        created_at: '2019-10-26T20:06:57.853Z',
        schedule_date: '2019-10-26T21:06:53.000Z',
        value: null,
      };
      testHook(() => {
        useLoadDataAfterCountdown(result, loadData);
      });
      expect(loadData).toHaveBeenCalledTimes(0);
      expect(setTimeout).toHaveBeenCalledWith(loadData, 94608000000);
    });
  });
});

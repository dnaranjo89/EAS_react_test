/* eslint-disable no-proto */
import recentDraws from './recentDraws';

const mockDraw = { id: '1', title: 'the title' };
const mockData = [{ id: '33', title: 'Some existing draw', url: '/some-path' }];

describe('Past Draws', () => {
  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();

    jest.spyOn(window.localStorage.__proto__, 'getItem');
    window.localStorage.__proto__.getItem = jest.fn();

    jest.spyOn(window.localStorage.__proto__, 'clear');
    window.localStorage.__proto__.clear = jest.fn();
  });

  it('should get all past draws', () => {
    window.localStorage.__proto__.getItem = jest.fn(() => '[]');
    const pastDraw = recentDraws.getAll();
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('recentDraws');
    expect(pastDraw).toEqual([]);
  });

  it('should add a draw when storage is empty', () => {
    recentDraws.add(mockDraw, '/the-path');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    const expectedData = JSON.stringify([{ id: '1', title: 'the title', url: '/the-path' }]);
    expect(localStorage.setItem).toHaveBeenCalledWith('recentDraws', expectedData);
  });

  it('should prepend the draw if there are some existing', () => {
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(mockData));

    recentDraws.add(mockDraw, '/the-path');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    const expectedData = JSON.stringify([
      { id: '1', title: 'the title', url: '/the-path' },
      ...mockData,
    ]);
    expect(localStorage.setItem).toHaveBeenCalledWith('recentDraws', expectedData);
  });

  it('should delete the oldest draw if the limit is exceeded when add a draw', () => {
    const fullList = [...Array(20)].map(() => []);
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(fullList));

    recentDraws.add(mockDraw, '/the-path');
    const expectedData = JSON.stringify([
      { id: '1', title: 'the title', url: '/the-path' },
      ...[...Array(19)].map(() => []),
    ]);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('recentDraws', expectedData);
  });

  it('should delete a recent draw', () => {
    window.localStorage.__proto__.getItem = jest.fn(() => JSON.stringify(mockData));
    recentDraws.removeDraw('33');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('recentDraws', '[]');
  });

  it('should clear all past draws', () => {
    recentDraws.clear();
    expect(localStorage.clear).toHaveBeenCalledTimes(1);
  });
});

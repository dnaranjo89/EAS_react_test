import { getResult, areClose } from './utils';

describe('utils', () => {
  test.each([
    [3.14, 3.14, true],
    [3.12, 3.14, true],
    [-3.12, 3.14, false],
    [-3.12, -3.14, true],
  ])('%d and %d should be close: %s', (num, target, expected) => {
    expect(areClose(num, target)).toBe(expected);
  });

  test.each([
    [0, -1.57, 5],
    [0, -1.57, 5],
    [3.14, 1.57, 5],
    [-0.01, 0, 6],
    [-0, 1.57, 2],
    [-3.14, -1.57, 2],
    [-0.01, 1.58, 2],
  ])('X:%d - Z:%d should be %d', (x, z, expected) => {
    expect(getResult({ rotationX: x, rotationZ: z })).toBe(expected);
  });
});

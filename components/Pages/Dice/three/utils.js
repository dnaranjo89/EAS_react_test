export const PI = 3.14;
const DEGREES_90 = PI / 2;
const DEGREES_180 = 2 * DEGREES_90;

const marginError = 0.3;

export const areClose = (num, target) => num < target + marginError && num > target - marginError;

export const getResult = rotation => {
  const { rotationX, rotationZ } = rotation;

  if (areClose(rotationX, DEGREES_180) && areClose(rotationZ, 0)) return 1;
  if (areClose(rotationX, -DEGREES_180) && areClose(rotationZ, 0)) return 1;
  if (areClose(rotationX, 0) && areClose(rotationZ, DEGREES_180)) return 1;
  if (areClose(rotationX, 0) && areClose(rotationZ, -DEGREES_180)) return 1;

  if (areClose(rotationX, DEGREES_180) && areClose(rotationZ, -DEGREES_90)) return 2;
  if (areClose(rotationX, -DEGREES_180) && areClose(rotationZ, -DEGREES_90)) return 2;
  if (areClose(rotationX, 0) && areClose(rotationZ, DEGREES_90)) return 2;

  if (areClose(rotationX, -DEGREES_90)) return 3;

  if (areClose(rotationX, DEGREES_90)) return 4;

  if (areClose(rotationX, 0) && areClose(rotationZ, -DEGREES_90)) return 5;
  if (areClose(rotationX, DEGREES_180) && areClose(rotationZ, DEGREES_90)) return 5;
  if (areClose(rotationX, -DEGREES_180) && areClose(rotationZ, DEGREES_90)) return 5;

  if (areClose(rotationX, DEGREES_180) && areClose(rotationZ, DEGREES_180)) return 6;
  if (areClose(rotationX, DEGREES_180) && areClose(rotationZ, -DEGREES_180)) return 6;
  if (areClose(rotationX, -DEGREES_180) && areClose(rotationZ, DEGREES_180)) return 6;
  if (areClose(rotationX, -DEGREES_180) && areClose(rotationZ, -DEGREES_180)) return 6;
  if (areClose(rotationX, 0) && areClose(rotationZ, 0)) return 6;
  return undefined;
};

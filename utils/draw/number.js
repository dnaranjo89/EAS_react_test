import { getBaseProps, getBaseFields } from './base';

export const getNumberValuesFromDraw = ({ draw }) => {
  const baseProps = getBaseProps(draw);
  const {
    range_min: rangeMinDirty,
    range_max: rangeMaxDirty,
    number_of_results: numberOfResultsDirty,
    allow_repeated_results: allowRepeated,
  } = draw;

  const rangeMin = rangeMinDirty.toString();
  const rangeMax = rangeMaxDirty.toString();
  const numberOfResults = numberOfResultsDirty.toString();
  const values = { rangeMin, rangeMax, numberOfResults, allowRepeated };

  return {
    ...baseProps,
    values: {
      ...baseProps.values,
      ...values,
    },
  };
};

export const getNumberDrawDataFromValues = ({ values, isPublic }) => {
  const baseFields = getBaseFields({ values, isPublic });
  const { rangeMin, rangeMax, numberOfResults, allowRepeated } = values;
  return {
    ...baseFields,
    range_min: rangeMin,
    range_max: rangeMax,
    number_of_results: numberOfResults,
    allow_repeated_results: allowRepeated,
  };
};

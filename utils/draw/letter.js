import { getBaseProps, getBaseFields } from './base';

export const getLetterValuesFromDraw = ({ draw }) => {
  const baseProps = getBaseProps(draw);
  const { number_of_results: numberOfResultsDirty, allow_repeated_results: allowRepeated } = draw;

  const numberOfResults = numberOfResultsDirty.toString();
  const values = { numberOfResults, allowRepeated };

  return {
    ...baseProps,
    values: {
      ...baseProps.values,
      ...values,
    },
  };
};

export const getLetterDrawDataFromValues = ({ values, isPublic }) => {
  const baseFields = getBaseFields({ values, isPublic });
  const { numberOfResults, allowRepeated } = values;
  return {
    ...baseFields,

    number_of_results: numberOfResults,
    allow_repeated_results: allowRepeated,
  };
};

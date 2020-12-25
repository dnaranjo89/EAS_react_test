import { getBaseProps, getBaseFields } from './base';

export const getLinkSetsValuesFromDraw = ({ draw }) => {
  const baseProps = getBaseProps(draw);
  const { items_set1: set1, items_set2: set2 } = draw;

  const values = { set1, set2 };

  return {
    ...baseProps,
    values: {
      ...baseProps.values,
      ...values,
    },
  };
};

export const getLinkSetsDrawDataFromValues = ({ values, isPublic }) => {
  const baseFields = getBaseFields({ values, isPublic });
  const { set1, set2 } = values;
  return {
    ...baseFields,
    items_set1: set1,
    items_set2: set2,
  };
};

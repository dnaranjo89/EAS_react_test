import { getBaseProps, getBaseFields } from './base';

export const getItemsValuesFromDraw = ({ draw }) => {
  const baseProps = getBaseProps(draw);
  const { participants: itemsObjects, number_of_results: numberOfItemsDirty } = draw;
  const items = itemsObjects.map(i => i.name);
  const numberOfItems = numberOfItemsDirty.toString();

  const values = { items, numberOfItems };

  return {
    ...baseProps,
    values: {
      ...baseProps.values,
      ...values,
    },
  };
};

export const getItemsDrawDataFromValues = ({ values, isPublic }) => {
  const baseFields = getBaseFields({ values, isPublic });
  const { items, numberOfItems } = values;
  return {
    ...baseFields,
    participants: items.map(item => ({ name: item })),
    number_of_results: numberOfItems,
  };
};

export const getItemsTranslationFiles = ({ isQuickDraw }) => {
  const commonNamespaces = ['DrawItems', 'Common'];
  if (isQuickDraw) {
    return [...commonNamespaces];
  }
  return [...commonNamespaces, 'CommonPublishedDraw'];
};

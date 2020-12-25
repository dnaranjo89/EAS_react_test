import { getBaseProps, getBaseFields } from './base';

export const getGroupsValuesFromDraw = ({ draw }) => {
  const baseProps = getBaseProps(draw);
  const { participants: participantsObjects, number_of_groups: numberOfGroupsDirty } = draw;
  const participants = participantsObjects.map(p => p.name);
  const numberOfGroups = numberOfGroupsDirty.toString();
  const values = { participants, numberOfGroups };

  return {
    ...baseProps,
    values: {
      ...baseProps.values,
      ...values,
    },
  };
};

export const getGroupsDrawDataFromValues = ({ values, isPublic }) => {
  const baseFields = getBaseFields({ values, isPublic });
  const { participants, numberOfGroups } = values;
  return {
    ...baseFields,
    participants: participants.map(participant => ({ name: participant })),
    number_of_groups: numberOfGroups,
  };
};

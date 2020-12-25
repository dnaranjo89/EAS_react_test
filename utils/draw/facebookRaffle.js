import { getBaseProps, getBaseFields } from './base';

export const getFacebookRaffleValuesFromDraw = ({ draw }) => {
  const baseProps = getBaseProps(draw);
  const { participants, prizes: prizesObjects } = draw;
  const prizes = prizesObjects.map(p => p.name);

  const values = { participants, prizes };

  return {
    ...baseProps,
    values: {
      ...baseProps.values,
      ...values,
    },
  };
};

export const getFacebookRaffleDrawDataFromValues = ({ values, isPublic }) => {
  const baseFields = getBaseFields({ values, isPublic });
  const { participants, prizes } = values;
  return {
    ...baseFields,
    participants: participants.map(participant => ({ name: participant })),
    prizes: prizes.map(prize => ({ name: prize })),
  };
};

import { getBaseProps, getBaseFields } from './base';

export const getRaffleValuesFromDraw = ({ draw }) => {
  const baseProps = getBaseProps(draw);
  const { participants: participantsObjects, prizes: prizesObjects } = draw;
  const participants = participantsObjects.map(p => p.name);
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

export const getRaffleDrawDataFromValues = ({ values, isPublic }) => {
  const baseFields = getBaseFields({ values, isPublic });
  const { participants, prizes } = values;
  return {
    ...baseFields,
    participants: participants.map(participant => ({ name: participant })),
    prizes: prizes.map(prize => ({ name: prize })),
  };
};

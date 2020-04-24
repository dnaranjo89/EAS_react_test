import i18n from 'i18next';

const getOrdinalEnGb = position => {
  const rest = position % 10;
  let sufix;
  switch (rest) {
    case 1:
      sufix = 'st';
      break;
    case 2:
      sufix = 'nd';
      break;
    case 3:
      sufix = 'rd';
      break;
    default:
      sufix = 'th';
      break;
  }
  return `${position}${sufix}`;
};

const getOrdinalEsEs = position => {
  const rest = position % 10;
  let sufix;
  switch (rest) {
    case 1:
      sufix = 'er';
      break;
    default:
      sufix = 'o';
      break;
  }
  return `${position}${sufix}`;
};

export default function(position) {
  switch (i18n.language) {
    case 'en-GB':
      return getOrdinalEnGb(position);
    case 'es-ES':
      return getOrdinalEsEs(position);
    default:
      return position;
  }
}

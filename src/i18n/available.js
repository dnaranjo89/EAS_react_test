const translations = require.context('./translations/', true, /\.\/(\w+-\w+)\.json$/);
export default translations.keys().reduce(
  (acc, item) => ({
    ...acc,
    [item.replace(/\.\/(\w+-\w+)\.json$/, '$1')]: true,
  }),
  {},
);

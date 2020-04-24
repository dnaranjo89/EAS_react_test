const isServer = !(typeof window !== 'undefined' && window.document);

const environment = process.env.APP_ENV;

// eslint-disable-next-line import/prefer-default-export
export { isServer, environment };

import Error from 'next/error';
import Router from 'next/router';

export default Error;

Error.getInitialProps = ({ res, err, asPath }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (statusCode && statusCode === 404) {
    if (asPath.match(/\/$/)) {
      const withoutTrailingSlash = asPath.substr(0, asPath.length - 1);
      if (res) {
        res.writeHead(302, {
          Location: withoutTrailingSlash,
        });
        res.end();
      } else {
        Router.push(withoutTrailingSlash);
      }
    }
  }

  return { statusCode };
};

import React from 'react';

import { FacebookContext } from './FacebookProvider.jsx';

const withFacebookSdk = WrappedComponent => {
  const WithFacebookSdk = props => (
    <FacebookContext.Consumer>
      {context => <WrappedComponent {...props} facebookContext={context} />}
    </FacebookContext.Consumer>
  );

  WithFacebookSdk.propTypes = {};

  return WithFacebookSdk;
};

export default withFacebookSdk;

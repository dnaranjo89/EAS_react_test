import React from 'react';

import { FacebookContext } from '../FacebookProvider/FacebookProvider.jsx';

const withFacebookSDK = WrappedComponent => {
  const WithFacebookSDK = props => (
    <FacebookContext.Consumer>
      {context => <WrappedComponent {...props} facebookContext={context} />}
    </FacebookContext.Consumer>
  );

  WithFacebookSDK.propTypes = {};

  return WithFacebookSDK;
};

export default withFacebookSDK;

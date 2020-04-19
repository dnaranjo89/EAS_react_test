import React from 'react';
import { MixpanelConsumer } from 'react-mixpanel';
import config from '../config/config';

const withMixpanel = WrappedComponent => {
  const WithMixpanel = props =>
    config.mixpanelEnabled ? (
      <MixpanelConsumer>
        {mixpanel => <WrappedComponent mixpanel={mixpanel} {...props} />}
      </MixpanelConsumer>
    ) : (
      <WrappedComponent {...props} />
    );

  return WithMixpanel;
};

export default withMixpanel;

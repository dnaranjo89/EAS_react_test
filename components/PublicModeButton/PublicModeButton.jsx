import React from 'react';
import PropTypes from 'prop-types';
import RouterButton from '../RouterButton.jsx';
import withTracking from '../../hocs/withTracking.jsx';

const PublicModeButton = ({ children, trackingData, track, ...rest }) => (
  <RouterButton variant="contained" onClick={() => track(trackingData)} {...rest}>
    {children}
  </RouterButton>
);

PublicModeButton.propTypes = {
  children: PropTypes.node.isRequired,
  trackingData: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  track: PropTypes.func.isRequired,
};

export default withTracking(PublicModeButton);

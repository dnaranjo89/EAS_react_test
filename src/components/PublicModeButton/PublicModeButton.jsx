import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withTracking from '../withTracking/withTracking.jsx';

const PublicModeButton = ({ to, label, trackingData, inputProps, dataComponent, track }) => {
  const CollisionLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref} to={to} onClick={() => track(trackingData)} {...props} />
  ));

  return (
    <Button
      component={CollisionLink}
      variant="contained"
      data-testid={dataComponent}
      {...inputProps}
    >
      {label}
    </Button>
  );
};

PublicModeButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataComponent: PropTypes.string.isRequired,
  track: PropTypes.func.isRequired,
  inputProps: PropTypes.shape(),
  trackingData: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

PublicModeButton.defaultProps = {
  inputProps: {},
};

export default withTracking(PublicModeButton);

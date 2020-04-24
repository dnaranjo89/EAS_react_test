import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MuiButton from '@material-ui/core/Button';

const RouterButton = ({ children, ...rest }) => (
  <MuiButton component={Link} {...rest}>
    {children}
  </MuiButton>
);
RouterButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterButton;

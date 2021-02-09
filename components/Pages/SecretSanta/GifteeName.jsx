import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const GifteeName = ({ children }) => (
  <Typography align="center" variant="h2">
    {children}
  </Typography>
);

GifteeName.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GifteeName;

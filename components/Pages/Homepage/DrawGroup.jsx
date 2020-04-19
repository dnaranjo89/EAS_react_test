import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const DrawGroup = ({ title, children }) => (
  <>
    <Typography variant="h1">{title}</Typography>
    {children}
  </>
);

DrawGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DrawGroup;

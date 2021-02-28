import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import STYLES from './Principle.module.scss';

const Principle = ({ image, imageAlt, title, description }) => (
  <div className={STYLES.container}>
    <img src={image} className={STYLES.image} alt={imageAlt} />
    <Typography align="justify" component="p" variant="h2">
      {title}
    </Typography>
    <Typography align="justify" variant="body2">
      {description}
    </Typography>
  </div>
);

Principle.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Principle;

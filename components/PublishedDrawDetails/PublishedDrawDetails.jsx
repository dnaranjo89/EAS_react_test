import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames/bind';
import STYLES from './PublishedDrawDetails.module.scss';

const c = classnames.bind(STYLES);

const PublishedDrawDetails = ({ sectionTitle, children }) => (
  <section className={c('PublishedDrawDetails')}>
    <Typography variant="h5">{sectionTitle}</Typography>
    {children}
  </section>
);

PublishedDrawDetails.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PublishedDrawDetails;

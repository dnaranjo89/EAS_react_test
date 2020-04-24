import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames/bind';
import STYLES from './LearnMoreSection.scss';

const c = classnames.bind(STYLES);

const LearnMoreSection = ({ title, content }) => (
  <section className={c('LearnMoreSection')}>
    <Typography variant="h3">{title}</Typography>
    <Typography component="span" align="justify" variant="subtitle1">
      {content}
    </Typography>
  </section>
);

LearnMoreSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default LearnMoreSection;

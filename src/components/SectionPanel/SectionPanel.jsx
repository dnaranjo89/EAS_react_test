import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames/bind';

import STYLES from './SectionPanel.scss';

const c = classnames.bind(STYLES);

const SectionPanel = ({ title, children }) => (
  <div className={c('SectionPanel')}>
    {title && <Typography variant="h3">{title}</Typography>}
    {children}
  </div>
);

SectionPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SectionPanel.defaultProps = {
  title: '',
};

export default SectionPanel;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import STYLES from './PublicSummaryPanel.scss';

const c = classNames.bind(STYLES);

const PublicSummaryPanel = ({ children }) => (
  <section className={c('PublicSummaryPanel')}>{children}</section>
);

PublicSummaryPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicSummaryPanel;

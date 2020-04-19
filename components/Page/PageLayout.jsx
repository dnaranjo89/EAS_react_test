import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import STYLES from './PageLayout.module.scss';

const c = classNames.bind(STYLES);
const PageLayout = ({ sidePanel, children, contentClassName, isMobile }) =>
  // eslint-disable-next-line no-nested-ternary
  isMobile ? (
    <>
      {contentClassName ? (
        <div className={c('PageLayout__mobileContent', contentClassName)}>{children}</div>
      ) : (
        children
      )}
      {sidePanel}
    </>
  ) : sidePanel ? (
    <div className={c('PageLayout__extraContent')}>
      <div className={c('PageLayout__centralColumn', contentClassName)}>{children}</div>
      <div className={c('PageLayout__rightColumn')}>{sidePanel}</div>
    </div>
  ) : (
    <div className={c('PageLayout__contentOnly', contentClassName)}>{children}</div>
  );

PageLayout.propTypes = {
  sidePanel: PropTypes.node,
  contentClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool,
};

PageLayout.defaultProps = {
  sidePanel: null,
  contentClassName: null,
  isMobile: false, // TODO this has to come from redux
};

// const mapStateToProps = state => ({ isMobile: state.userRequest.isMobile });
export default PageLayout;

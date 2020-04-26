import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import STYLES from './PageLayout.module.scss';
import getIsMobile from '../../redux/selectors/getIsMobile';

const c = classNames.bind(STYLES);
const PageLayout = ({ sidePanel, children, contentClassName }) => {
  const isMobile = useSelector(getIsMobile);
  if (isMobile) {
    return (
      <>
        {contentClassName ? (
          <div className={c('PageLayout__mobileContent', contentClassName)}>{children}</div>
        ) : (
          children
        )}
        {sidePanel}
      </>
    );
  }

  if (sidePanel) {
    return (
      <div className={c('PageLayout__extraContent')}>
        <div className={c('PageLayout__centralColumn', contentClassName)}>{children}</div>
        <div className={c('PageLayout__rightColumn')}>{sidePanel}</div>
      </div>
    );
  }
  return <div className={c('PageLayout__contentOnly', contentClassName)}>{children}</div>;
};

PageLayout.propTypes = {
  sidePanel: PropTypes.node,
  contentClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageLayout.defaultProps = {
  sidePanel: null,
  contentClassName: null,
};

export default PageLayout;

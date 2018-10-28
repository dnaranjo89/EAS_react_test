import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import classnames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';

import Page from '../../Page/Page';
import STYLES from './SpinArrowPage.scss';
import ArrowImage from './arrow.svg';

const c = classnames.bind(STYLES);

const SpinArrowPage = ({ angle, animate, handleToss, t }) => {
  const arrowCss = {
    transform: `rotate(${angle}deg)`,
  };
  if (!animate) {
    arrowCss.transition = 'none';
  }

  return (
    <Page htmlTitle={t('html_tittle')} className={c('SpinArrowPage')}>
      <Typography variant="h1">{t('page_title')}</Typography>
      <Typography variant="subtitle1">{t('draw_subheading')}</Typography>

      <div className={c('SpinArrowPage__container')}>
        <button className={c('SpinArrowPage__button')} onClick={handleToss}>
          <img
            className={c('SpinArrowPage__arrow')}
            style={arrowCss}
            src={ArrowImage}
            data-component="SpinArrow__arrow"
            alt="Arrow"
          />
        </button>
      </div>
    </Page>
  );
};

SpinArrowPage.propTypes = {
  angle: PropTypes.number.isRequired,
  animate: PropTypes.bool,
  handleToss: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

SpinArrowPage.defaultProps = {
  animate: true,
};

export default translate('SpinArrow')(SpinArrowPage);

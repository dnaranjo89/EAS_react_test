import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../../i18n';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import Page from '../../Page/Page.jsx';
import STYLES from './SpinArrowPage.module.scss';
import ArrowImage from './arrow.svg';
import arrowOgImage from './arrow_og_image.png';

const c = classnames.bind(STYLES);

const SpinArrowPage = ({ angle, showTossHelp, animate, handleToss, t }) => {
  const arrowCss = {
    transform: `rotate(${angle}deg)`,
  };
  if (!animate) {
    arrowCss.transition = 'none';
  }

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      pageType="Spin Arrow"
      ogImage={arrowOgImage}
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <div className={c('SpinArrowPage__container')}>
        <button type="button" className={c('SpinArrowPage__button')} onClick={handleToss}>
          <img
            className={c('SpinArrowPage__arrow')}
            style={arrowCss}
            src={ArrowImage}
            data-testid="SpinArrow__arrow"
            alt="Arrow"
          />
        </button>
        {showTossHelp && (
          <Typography variant="subtitle1" align="center" className={c('SpinArrowPage__touch-hint')}>
            {t('touch_to_toss')}
          </Typography>
        )}
      </div>
      <LearnMoreSection title={t('learn_more_title')} content={t('learn_more_content')} />
    </Page>
  );
};

SpinArrowPage.propTypes = {
  angle: PropTypes.number.isRequired,
  showTossHelp: PropTypes.bool.isRequired,
  animate: PropTypes.bool,
  handleToss: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

SpinArrowPage.defaultProps = {
  animate: true,
};

export default withTranslation('DrawSpinner')(SpinArrowPage);

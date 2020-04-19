import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import DrawHeading from '../../components/DrawHeading/DrawHeading.jsx';
import Page from '../../components/Page/Page.jsx';
import LearnMoreSection from '../../components/LearnMoreSection/LearnMoreSection.jsx';
import STYLES from './FlipCoinPage.module.scss';
import headsIcon from './heads.png';
import tailsIcon from './tails.png';
import coinOgImage from './coin_og_image.png';

const c = classnames.bind(STYLES);

class FlipCoinPage extends Component {
  componentDidUpdate(prevProps) {
    const { coinSide } = this.props;
    const className = c({
      'FlipCoinPage__coin--heads': coinSide === 'heads',
      'FlipCoinPage__coin--tails': coinSide === 'tails',
    });
    document
      .getElementById('coinImage')
      .classList.remove(c(`FlipCoinPage__coin--${prevProps.coinSide}`));
    document.getElementById('resultLabel').classList.remove(c(`FlipCoinPage__result--animated`));

    setTimeout(() => {
      document.getElementById('coinImage').classList.add(className);
      document.getElementById('resultLabel').classList.add(c(`FlipCoinPage__result--animated`));
    }, 50);
  }

  render() {
    const { coinSide, showTossHelp, onFlip, t } = this.props;
    return (
      <Page
        htmlTitle={t('html_title')}
        htmlDescription={t('html_description')}
        htmlKeywords={t('html_keywords')}
        pageType="Flip a Coin"
        ogImage={coinOgImage}
        contentClassName={c('FlipCoinPage')}
      >
        <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />

        <div className={c('FlipCoinPage__container')}>
          <button
            type="button"
            id="coinImage"
            className={c('FlipCoinPage__coin')}
            onClick={onFlip}
            data-testid="FlipCoinPage__coin"
          >
            <img
              className={c('FlipCoinPage__coin-side', 'FlipCoinPage__coin-side--heads')}
              src={headsIcon}
              alt="heads"
            />
            <img
              className={c('FlipCoinPage__coin-side', 'FlipCoinPage__coin-side--tails')}
              src={tailsIcon}
              alt="tails"
            />
          </button>
          {showTossHelp && (
            <Typography variant="subtitle1" align="center">
              {t('touch_to_toss')}
            </Typography>
          )}
          <Typography
            id="resultLabel"
            variant="h2"
            align="center"
            className={c('FlipCoinPage__result')}
          >
            {coinSide === 'heads' ? t('result_heads') : t('result_tails')}
          </Typography>
        </div>

        <LearnMoreSection title={t('learn_more_title')} content={t('learn_more_content')} />
      </Page>
    );
  }
}

FlipCoinPage.propTypes = {
  coinSide: PropTypes.string.isRequired,
  showTossHelp: PropTypes.bool.isRequired,
  onFlip: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('coin')(FlipCoinPage);

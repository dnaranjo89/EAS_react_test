import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import withTranslation from 'next-translate/withTranslation';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import Page from '../../Page/Page.jsx';
import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import STYLES from './FlipCoinPage.module.scss';
import headsIcon from './heads.png';
import tailsIcon from './tails.png';
import coinOgImage from './coin_og_image.png';

const c = classnames.bind(STYLES);

class FlipCoinPage extends Component {
  componentDidUpdate(prevProps) {
    const { waitingForInteraction } = this.props;
    if (!waitingForInteraction) {
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
  }

  render() {
    const { coinSide, waitingForInteraction, onFlip, i18n } = this.props;
    const { t } = i18n;
    return (
      <Page
        htmlTitle={t('DrawCoin:html_title')}
        htmlDescription={t('DrawCoin:html_description')}
        htmlKeywords={t('DrawCoin:html_keywords')}
        pageType="Flip a Coin"
        ogImage={coinOgImage}
        contentClassName={c('FlipCoinPage')}
      >
        <DrawHeading title={t('DrawCoin:page_title')} subtitle={t('DrawCoin:draw_subheading')} />

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
          {waitingForInteraction && (
            <Typography variant="subtitle1" align="center">
              {t('DrawCoin:touch_to_toss')}
            </Typography>
          )}
          <Typography
            id="resultLabel"
            variant="h2"
            align="center"
            className={c('FlipCoinPage__result')}
          >
            {coinSide === 'heads' ? t('DrawCoin:result_heads') : t('DrawCoin:result_tails')}
          </Typography>
        </div>

        <LearnMoreSection
          title={t('DrawCoin:learn_more_title')}
          content={t('DrawCoin:learn_more_content')}
        />
      </Page>
    );
  }
}

FlipCoinPage.propTypes = {
  coinSide: PropTypes.string.isRequired,
  waitingForInteraction: PropTypes.bool.isRequired,
  onFlip: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    t: PropTypes.func.isRequired,
  }).isRequired,
};

export default withTranslation(FlipCoinPage);

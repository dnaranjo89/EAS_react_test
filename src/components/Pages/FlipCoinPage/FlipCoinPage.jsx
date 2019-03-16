import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { translate } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import Page from '../../Page/Page.jsx';
import STYLES from './FlipCoinPage.scss';
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

    setTimeout(() => {
      document.getElementById('coinImage').classList.add(className);
    }, 50);
  }

  render() {
    const { onFlip, t } = this.props;
    return (
      <Page
        htmlTitle={t('html_title')}
        htmlDescription={t('html_description')}
        htmlKeywords={t('html_keywords')}
        pageType="Flip a Coin"
        ogImage={coinOgImage}
        className={c('FlipCoinPage')}
      >
        <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />

        <div className={c('FlipCoinPage__container')}>
          <button
            type="button"
            id="coinImage"
            className={c('FlipCoinPage__coin')}
            onClick={onFlip}
            data-component="FlipCoinPage__coin"
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
        </div>
        <div className={c('FlipCoinPage__learn-more')}>
          <Typography variant="h3">{t('learn_more_title')}</Typography>
          <Typography variant="subtitle1">{t('learn_more_content')}</Typography>
        </div>
      </Page>
    );
  }
}

FlipCoinPage.propTypes = {
  coinSide: PropTypes.string.isRequired,
  onFlip: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('FlipCoinPage')(FlipCoinPage);

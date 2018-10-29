import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { translate } from 'react-i18next';
import Typography from '@material-ui/core/Typography';

import Page from '../../Page/Page';
import STYLES from './FlipCoinPage.scss';

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
      <Page htmlTitle={t('page_html_title')} className={c('FlipCoinPage')}>
        <Typography color="primary" variant="display1">
          {t('page_title')}
        </Typography>
        <Typography variant="subheading">{t('draw_subheading')}</Typography>

        <div className={c('FlipCoinPage__container')}>
          <button id="coinImage" className={c('FlipCoinPage__coin')} onClick={onFlip}>
            <img
              className={c('FlipCoinPage__coin-side', 'FlipCoinPage__coin-side--heads')}
              src="https://echaloasuerte.com/static/img/img_coin/head.png"
              alt="heads"
            />
            <img
              className={c('FlipCoinPage__coin-side', 'FlipCoinPage__coin-side--tails')}
              src="https://echaloasuerte.com/static/img/img_coin/tail.png"
              alt="tails"
            />
          </button>
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

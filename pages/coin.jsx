import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCoinPage from '../components/FlipCoin/FlipCoinPage.jsx';
import withTracking from '../hocs/withTracking.jsx';
import withLoadedTranslations from '../hocs/withLoadedTranslations.jsx';
import { ANALYTICS_TYPE_COIN } from '../constants/analyticsTypes.js';

class FlipCoinPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinSide: 'heads',
      showTossHelp: true,
    };
  }

  handleFlipCoin = () => {
    const { track } = this.props;
    const coinSide = Math.floor(Math.random() * 2) ? 'heads' : 'tails';
    track({
      mp: { name: `Toss - ${ANALYTICS_TYPE_COIN}`, properties: { drawType: ANALYTICS_TYPE_COIN } },
      ga: { action: 'Toss', category: ANALYTICS_TYPE_COIN },
    });
    this.setState({
      coinSide,
      showTossHelp: false,
    });
  };

  render() {
    const { coinSide, showTossHelp } = this.state;
    return (
      <FlipCoinPage coinSide={coinSide} onFlip={this.handleFlipCoin} showTossHelp={showTossHelp} />
    );
  }
}

FlipCoinPageContainer.propTypes = {
  track: PropTypes.func.isRequired,
};

export default withLoadedTranslations(['coin', 'common'])(withTracking(FlipCoinPageContainer));

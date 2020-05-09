import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCoinPage from './FlipCoinPage.jsx';
import withTracking from '../../../hocs/withTracking.jsx';
import { ANALYTICS_TYPE_COIN } from '../../../constants/analyticsTypes';

class FlipCoinPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinSide: 'heads',
      waitingForInteraction: true,
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
      waitingForInteraction: false,
    });
  };

  render() {
    const { coinSide, waitingForInteraction } = this.state;
    return (
      <FlipCoinPage
        coinSide={coinSide}
        onFlip={this.handleFlipCoin}
        waitingForInteraction={waitingForInteraction}
      />
    );
  }
}

FlipCoinPageContainer.propTypes = {
  track: PropTypes.func.isRequired,
};

export default withTracking(FlipCoinPageContainer);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipCoinPage from './FlipCoinPage.jsx';
import withTracking from '../../withTracking/withTracking.jsx';

const analyticsDrawType = 'Coin';

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
      mp: { name: `Toss - ${analyticsDrawType}`, properties: { drawType: analyticsDrawType } },
      ga: { action: 'Toss', category: analyticsDrawType },
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

export default withTracking(FlipCoinPageContainer);

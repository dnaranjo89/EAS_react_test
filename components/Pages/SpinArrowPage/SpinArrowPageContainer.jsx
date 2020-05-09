import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpinArrowPage from './SpinArrowPage.jsx';
import withTracking from '../../../hocs/withTracking.jsx';
import { ANALYTICS_TYPE_ARROW } from '../../../constants/analyticsTypes';

class ArrowPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      showTossHelp: true,
    };
  }

  handleToss = () => {
    const { track } = this.props;
    track({
      mp: {
        name: `Toss - ${ANALYTICS_TYPE_ARROW}`,
        properties: { drawType: ANALYTICS_TYPE_ARROW },
      },
      ga: { action: 'Toss', category: ANALYTICS_TYPE_ARROW },
    });
    const angle = Math.floor(Math.random() * 360);
    const randomInitialSpin = Math.floor(Math.random() * 5 + 8) * 360;
    this.setState(previousState => {
      const currentAngle = previousState.angle;
      const degreesUntilZero = 360 - (currentAngle % 360);
      const totalRotation = currentAngle + degreesUntilZero + randomInitialSpin + angle;
      return {
        angle: totalRotation,
        showTossHelp: false,
      };
    });
  };

  render() {
    const { angle, showTossHelp } = this.state;
    return <SpinArrowPage angle={angle} showTossHelp={showTossHelp} handleToss={this.handleToss} />;
  }
}

ArrowPageContainer.propTypes = {
  track: PropTypes.func.isRequired,
};

export default withTracking(ArrowPageContainer);

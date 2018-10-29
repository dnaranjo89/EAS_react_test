import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';
import { RaffleApi, Raffle, DrawTossPayload } from 'echaloasuerte-js-sdk';

import RafflePage from './RafflePage';

const raffleApi = new RaffleApi();

class RafflePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privateId: null,
      values: {
        title: '',
        description: '',
        participants: [],
        prizes: [],
        numberOfWinners: 1,
        winners: [],
        dateScheduled: null,
      },
    };
  }

  onFieldChange = (fieldName, value) => {
    this.setState(previousState => ({
      values: {
        ...previousState.values,
        ...{
          [fieldName]: value,
        },
      },
    }));
  };

  createDraw = async () => {
    const { title, description, participants, prizes } = this.state.values;
    const randomNumberDraw = Raffle.constructFromObject({
      title,
      description,
      participants: participants.map(participant => ({ name: participant })),
      prizes: prizes.map(prize => ({ name: prize })),
    });
    try {
      return await raffleApi.raffleCreate(randomNumberDraw);
    } catch (err) {
      alert(err);
      return null;
    }
  };

  handlePublish = async () => {
    const draw = await this.createDraw();
    const { dateScheduled } = this.state.values;
    const drawTossPayload = DrawTossPayload.constructFromObject({ schedule_date: dateScheduled });
    await raffleApi.raffleToss(draw.private_id, drawTossPayload);
    const publishDrawUrl = this.props.location.pathname.replace('public', draw.private_id);
    this.props.history.push(publishDrawUrl);
  };

  render() {
    return (
      <RafflePage
        values={this.state.values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
      />
    );
  }
}

RafflePageContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(RafflePageContainer);

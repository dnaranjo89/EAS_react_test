import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';
import { RaffleApi, Raffle, DrawTossPayload } from 'echaloasuerte-js-sdk';

import RafflePage from './RafflePage';

const raffleApi = new RaffleApi();

class RafflePageContainer extends Component {
  constructor(props) {
    super(props);

    const now = new Date();
    now.setHours(now.getHours() + 1);
    const dateScheduled = now;

    this.state = {
      privateId: null,
      values: {
        title: '',
        description: '',
        participants: [],
        prizes: [],
        numberOfWinners: 1,
        winners: [],
        dateScheduled,
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
    const { history, match } = this.props;
    const { dateScheduled } = this.state.values;
    const drawTossPayload = DrawTossPayload.constructFromObject({ schedule_date: dateScheduled });
    await raffleApi.raffleToss(draw.private_id, drawTossPayload);
    ReactGA.event({ category: 'Publish', action: 'Group Generator', label: draw.id });
    const drawPathname = `${match.path}/${draw.private_id}`;
    history.push(drawPathname);
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
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(RafflePageContainer);

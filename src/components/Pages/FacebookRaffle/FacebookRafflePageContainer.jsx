import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ReactRouterPropTypes from 'react-router-prop-types';
import moment from 'moment';
import { RaffleApi, Raffle, Prize, DrawTossPayload } from 'echaloasuerte-js-sdk';

import FacebookRafflePage from './FacebookRafflePage.jsx';
import recentDraws from '../../../services/recentDraws';
import withTracking from '../../withTracking/withTracking.jsx';
import { ANALYTICS_TYPE_FACEBOOK } from '../../../constants/analyticsTypes';

const raffleApi = new RaffleApi();
class FacebookRafflePageContainer extends Component {
  constructor(props) {
    super(props);
    const dateScheduled = new Date();
    dateScheduled.setHours(dateScheduled.getHours() + 1);

    this.state = {
      APIError: false,
      values: {
        title: '', // Default title is set in CDM
        description: '',
        participants: [],
        prizes: [],
        dateScheduled,
      },
    };
  }

  componentDidMount() {
    const { t } = this.props;
    const defaultTitle = t('field_default_title');
    this.setState(previousState => ({
      values: {
        ...previousState.values,
        title: defaultTitle,
      },
    }));
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

  handlePublish = async () => {
    const { location, history } = this.props;
    history.push(`${location.pathname}/3`);
  };

  createDraw = () => {
    const { values } = this.state;
    const { title, description, prizes } = values;
    const drawData = {
      title,
      description: description || null,
      prizes: prizes.map(prize => Prize.constructFromObject({ name: prize })),
      participants: [],
    };
    const facebookLoginDraw = Raffle.constructFromObject(drawData);
    return raffleApi.raffleCreate(facebookLoginDraw);
  };

  handlePublish = async () => {
    const { history } = this.props;
    const { values } = this.state;
    try {
      const draw = await this.createDraw();

      const { dateScheduled } = values;
      const drawTossPayload = DrawTossPayload.constructFromObject({ schedule_date: dateScheduled });
      const tossResponse = await raffleApi.raffleToss(draw.private_id, drawTossPayload);
      const scheduleDate = moment(tossResponse.schedule_date).unix();
      const { track } = this.props;
      track({
        mp: {
          name: `Publish - ${ANALYTICS_TYPE_FACEBOOK}`,
          properties: { drawType: ANALYTICS_TYPE_FACEBOOK, drawId: draw.id },
        },
        ga: { action: 'Publish', category: ANALYTICS_TYPE_FACEBOOK, label: draw.id },
      });

      const drawPath = `/facebook/${draw.id}/success`;
      recentDraws.add(draw, drawPath, scheduleDate);
      history.push(drawPath);
    } catch (err) {
      this.setState({ APIError: true });
    }
  };

  render() {
    const { values, APIError } = this.state;
    return (
      <FacebookRafflePage
        apiError={APIError}
        values={values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
      />
    );
  }
}

FacebookRafflePageContainer.propTypes = {
  t: PropTypes.func.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  track: PropTypes.func.isRequired,
};

export default withTracking(withTranslation('FacebookRaffle')(FacebookRafflePageContainer));

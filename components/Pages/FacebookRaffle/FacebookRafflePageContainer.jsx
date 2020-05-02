import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Router from 'next/router';
import { RaffleApi, Raffle, Prize, DrawTossPayload } from 'echaloasuerte-js-sdk';

import { withTranslation } from '../../../i18n';
import FacebookRafflePage from './FacebookRafflePage.jsx';
import recentDraws from '../../../services/recentDraws';
import withTracking from '../../../hocs/withTracking.jsx';
import { ANALYTICS_TYPE_FACEBOOK } from '../../../constants/analyticsTypes';
import withLoadedTranslations from '../../../hocs/withLoadedTranslations.jsx';

const raffleApi = new RaffleApi();
class FacebookRafflePageContainer extends Component {
  constructor(props) {
    super(props);
    const dateScheduled = new Date();
    dateScheduled.setHours(dateScheduled.getHours() + 1);

    this.state = {
      APIError: false,
      loadingRequest: false,
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
    this.setState({ loadingRequest: true });

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
      Router.push(drawPath);
    } catch (err) {
      this.setState({ APIError: true, loadingRequest: false });
    }
  };

  render() {
    const { values, APIError, loadingRequest } = this.state;
    return (
      <FacebookRafflePage
        apiError={APIError}
        loadingRequest={loadingRequest}
        values={values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
      />
    );
  }
}

FacebookRafflePageContainer.propTypes = {
  t: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
};

export default withLoadedTranslations(['FacebookPage'])(
  withTracking(withTranslation('FacebookPage')(FacebookRafflePageContainer)),
);

import React from 'react';
import PropTypes from 'prop-types';
import { RaffleApi, Raffle, DrawTossPayload } from 'echaloasuerte-js-sdk';
import moment from 'moment';
import Router, { withRouter } from 'next/router';
import { withTranslation } from '../../../i18n';
import withTracking from '../../../hocs/withTracking.jsx';
import recentDraws from '../../../services/recentDraws';
import throttle from '../../../services/throttle';
import RafflePage from './RafflePage.jsx';
import RaffleQuickPage from './RaffleQuickPage.jsx';
import { ANALYTICS_TYPE_RAFFLE } from '../../../constants/analyticsTypes';

const raffleApi = new RaffleApi();

class RafflePageContainer extends React.Component {
  constructor(props) {
    super(props);

    const dateScheduled = new Date();
    dateScheduled.setHours(dateScheduled.getHours() + 1);

    this.state = {
      privateId: null,
      quickResult: null,
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
      privateId: null,
      quickResult: null,
      values: {
        ...previousState.values,
        ...{
          [fieldName]: value,
        },
      },
    }));
  };

  isPublic = () => {
    const { router } = this.props;
    return router.asPath.indexOf('public') >= 0;
  };

  createDraw = () => {
    const { values } = this.state;
    const isPublic = this.isPublic();
    const { title, description, participants, prizes } = values;
    const drawData = {
      prizes: prizes.map(prize => ({ name: prize })),
      participants: participants.map(participant => ({ name: participant })),
      title: isPublic && title ? title : null,
      description: isPublic && description ? description : null,
    };
    const raffleDraw = Raffle.constructFromObject(drawData);
    return raffleApi.raffleCreate(raffleDraw);
  };

  handleToss = async () => {
    const tsStart = new Date().getTime();
    this.setState({
      loadingRequest: true,
    });

    let { privateId } = this.state;
    try {
      // Create the draw only if it wasn't created in a previous toss
      if (!privateId) {
        const draw = await this.createDraw();
        privateId = draw.private_id;
        this.setState({ privateId });
      }

      const tossResponse = await raffleApi.raffleToss(privateId, {});
      const { track } = this.props;
      track({
        mp: {
          name: `Toss - ${ANALYTICS_TYPE_RAFFLE}`,
          properties: { drawType: ANALYTICS_TYPE_RAFFLE },
        },
        ga: { action: 'Toss', category: ANALYTICS_TYPE_RAFFLE },
      });
      throttle(() => {
        this.setState({
          quickResult: tossResponse,
          APIError: false,
          loadingRequest: false,
        });
      }, tsStart);
    } catch (err) {
      this.setState({
        APIError: true,
        loadingRequest: false,
      });
    }
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
          name: `Publish - ${ANALYTICS_TYPE_RAFFLE}`,
          properties: { drawType: ANALYTICS_TYPE_RAFFLE, drawId: draw.id },
        },
        ga: { action: 'Publish', category: ANALYTICS_TYPE_RAFFLE, label: draw.id },
      });
      const drawPath = `/raffle/${draw.id}/success`;
      recentDraws.add(draw, drawPath, scheduleDate);
      Router.push(`/raffle/[id]/success`, drawPath);
    } catch (err) {
      this.setState({ APIError: true, loadingRequest: false });
    }
  };

  handleCheckErrorsInConfiguration = () => {
    const { t } = this.props;
    const { values } = this.state;
    const { participants, prizes } = values;
    const numberOfPrizes = prizes.length;
    const numOfParticipants = participants.length;
    if (numOfParticipants < numberOfPrizes) {
      return t('error_form_not_enough_participants', { numberOfPrizes, count: numOfParticipants });
    }
    return undefined;
  };

  render() {
    const { APIError, values, quickResult, loadingRequest } = this.state;
    return this.isPublic() ? (
      <RafflePage
        apiError={APIError}
        loadingRequest={loadingRequest}
        values={values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    ) : (
      <RaffleQuickPage
        apiError={APIError}
        values={values}
        quickResult={quickResult}
        loadingRequest={loadingRequest}
        handleToss={this.handleToss}
        onFieldChange={this.onFieldChange}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    );
  }
}

RafflePageContainer.propTypes = {
  t: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
  router: PropTypes.shape({
    asPath: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(withTracking(withTranslation('DrawRaffle')(RafflePageContainer)));

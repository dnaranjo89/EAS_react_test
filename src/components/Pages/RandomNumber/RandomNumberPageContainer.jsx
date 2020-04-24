import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { RandomNumberApi, RandomNumber, DrawTossPayload } from 'echaloasuerte-js-sdk';
import moment from 'moment';
import { withTranslation } from '../../i18n';
import RandomNumberPage from './RandomNumberPage.jsx';
import RandomNumberQuickPage from './RandomNumberQuickPage.jsx';
import throttle from '../../../services/throttle';
import withTracking from '../../withTracking/withTracking.jsx';
import recentDraws from '../../../services/recentDraws';
import { ANALYTICS_TYPE_NUMBER } from '../../../constants/analyticsTypes';

const randomNumberApi = new RandomNumberApi();
class RandomNumberPageContainer extends React.Component {
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
        rangeMin: '1',
        rangeMax: '10',
        numberOfResults: '1',
        allowRepeated: false,
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

  createDraw = () => {
    const { match } = this.props;
    const { values } = this.state;
    const { isPublic } = match.params;
    const { title, description, rangeMin, rangeMax, numberOfResults, allowRepeated } = values;

    const drawData = {
      range_min: rangeMin,
      range_max: rangeMax,
      number_of_results: numberOfResults,
      allow_repeated_results: allowRepeated,
      title: isPublic && title ? title : null,
      description: isPublic && description ? description : null,
    };
    const randomNumberDraw = RandomNumber.constructFromObject(drawData);
    return randomNumberApi.randomNumberCreate(randomNumberDraw);
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
      const tossResponse = await randomNumberApi.randomNumberToss(privateId, {});
      const { track } = this.props;
      track({
        mp: {
          name: `Toss - ${ANALYTICS_TYPE_NUMBER}`,
          properties: { drawType: ANALYTICS_TYPE_NUMBER },
        },
        ga: { action: 'Toss', category: ANALYTICS_TYPE_NUMBER },
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

    const { history } = this.props;
    const { values } = this.state;
    try {
      const draw = await this.createDraw();

      const { dateScheduled } = values;
      const drawTossPayload = DrawTossPayload.constructFromObject({ schedule_date: dateScheduled });
      const tossResponse = await randomNumberApi.randomNumberToss(draw.private_id, drawTossPayload);
      const scheduleDate = moment(tossResponse.schedule_date).unix();

      const { track } = this.props;
      track({
        mp: {
          name: `Publish - ${ANALYTICS_TYPE_NUMBER}`,
          properties: { drawType: ANALYTICS_TYPE_NUMBER, drawId: draw.id },
        },
        ga: { action: 'Publish', category: ANALYTICS_TYPE_NUMBER, label: draw.id },
      });

      const drawPath = `/number/${draw.id}/success`;
      recentDraws.add(draw, drawPath, scheduleDate);
      history.push(drawPath);
    } catch (err) {
      this.setState({ APIError: true });
    }
  };

  handleCheckErrorsInConfiguration = t => {
    const { values } = this.state;
    const rangeMin = parseInt(values.rangeMin, 10);
    const rangeMax = parseInt(values.rangeMax, 10);
    const numberOfResults = parseInt(values.numberOfResults, 10);
    if (rangeMin >= rangeMax) {
      return t('error_form_invalid_ranges', {
        min: values.rangeMin,
        max: values.rangeMax,
      });
    }
    if (!values.allowRepeated && numberOfResults > rangeMax - rangeMin) {
      return t('error_form_range_not_big_enough');
    }
    return undefined;
  };

  render() {
    const { APIError, values, quickResult, loadingRequest } = this.state;
    const { match } = this.props;
    const { isPublic } = match.params;

    return isPublic ? (
      <RandomNumberPage
        apiError={APIError}
        loadingRequest={loadingRequest}
        values={values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    ) : (
      <RandomNumberQuickPage
        apiError={APIError}
        loadingRequest={loadingRequest}
        values={values}
        quickResult={quickResult}
        onFieldChange={this.onFieldChange}
        handleToss={this.handleToss}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    );
  }
}

RandomNumberPageContainer.propTypes = {
  track: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

RandomNumberPageContainer.defaultProps = {};

export default withTracking(withTranslation('RandomNumber')(RandomNumberPageContainer));

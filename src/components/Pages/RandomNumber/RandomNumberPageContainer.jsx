import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ReactGA from 'react-ga';
import { RandomNumberApi, RandomNumber, DrawTossPayload } from 'echaloasuerte-js-sdk';

import RandomNumberPage from './RandomNumberPage';
import RandomNumberQuickPage from './RandomNumberQuickPage';

const randomNumberApi = new RandomNumberApi();
class RandomNumberPageContainer extends React.Component {
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
        rangeMin: '1',
        rangeMax: '10',
        numberOfResults: '1',
        allowRepeated: false,
        dateScheduled,
      },
      quickResult: null,
      APIError: false,
    };
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

  createDraw = async () => {
    const {
      title,
      description,
      rangeMin,
      rangeMax,
      numberOfResults,
      allowRepeated,
    } = this.state.values;

    const publicDetails = {
      title,
      description,
    };
    let drawData = {
      range_min: rangeMin,
      range_max: rangeMax,
      number_of_results: numberOfResults,
      allow_repeated_results: allowRepeated,
    };

    if (this.props.isPublic) {
      drawData = {
        ...drawData,
        ...publicDetails,
      };
    }
    const randomNumberDraw = RandomNumber.constructFromObject(drawData);
    return randomNumberApi.randomNumberCreate(randomNumberDraw);
  };

  handleToss = async () => {
    let privateId = this.state.privateId;
    try {
      if (!privateId) {
        const draw = await this.createDraw();
        privateId = draw.private_id;
        this.setState({ privateId });
      }
      const tossResponse = await randomNumberApi.randomNumberToss(privateId, {});
      ReactGA.event({ category: 'Toss', action: 'Random Number', label: 'Local' });
      this.setState({ quickResult: tossResponse, APIError: false });
    } catch (err) {
      this.setState({ APIError: true });
    }
  };

  handlePublish = async () => {
    const { match, history } = this.props;
    try {
      const draw = await this.createDraw();
      const { dateScheduled } = this.state.values;
      const drawTossPayload = DrawTossPayload.constructFromObject({ schedule_date: dateScheduled });
      await randomNumberApi.randomNumberToss(draw.private_id, drawTossPayload);
      ReactGA.event({ category: 'Publish', action: 'Random Number', label: draw.id });
      const drawPathname = match.path.replace('public', draw.private_id);
      history.push(drawPathname);
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
    } else if (!values.allowRepeated && numberOfResults > rangeMax - rangeMin) {
      return t('error_form_range_not_big_enough');
    }
    return undefined;
  };

  render() {
    const { APIError, values, quickResult } = this.state;
    const { isPublic } = this.props;
    return isPublic ? (
      <RandomNumberPage
        apiError={APIError}
        values={values}
        onFieldChange={this.onFieldChange}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
        handlePublish={this.handlePublish}
      />
    ) : (
      <RandomNumberQuickPage
        apiError={APIError}
        values={values}
        onFieldChange={this.onFieldChange}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
        quickResult={quickResult}
        handleToss={this.handleToss}
      />
    );
  }
}

RandomNumberPageContainer.propTypes = {
  isPublic: PropTypes.bool,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

RandomNumberPageContainer.defaultProps = {
  isPublic: false,
};

export default RandomNumberPageContainer;

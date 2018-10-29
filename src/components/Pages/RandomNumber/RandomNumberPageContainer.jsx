import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ReactGA from 'react-ga';
import EASApi from '../../../services/EASApi';

import RandomNumberPage from './RandomNumberPage';
import RandomNumberQuickPage from './RandomNumberQuickPage';

const randomNumberApi = new EASApi.RandomNumberApi();
class RandomNumberPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      privateId: null,
      values: {
        title: '',
        description: '',
        rangeMin: '1',
        rangeMax: '10',
        numberOfResults: '1',
        allowRepeated: false,
        dateScheduled: null,
      },
      quickResult: [],
      APIError: false,
    };
  }

  onFieldChange = (fieldName, value) => {
    this.setState(previousState => ({
      privateId: null,
      quickResult: [],
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
    const randomNumberDraw = EASApi.RandomNumber.constructFromObject(drawData);
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
      const tossResponse = await randomNumberApi.randomNumberToss(this.state.privateId, {});
      ReactGA.event({ category: 'Toss', action: 'Random Number', label: 'Local' });
      this.setState({ quickResult: tossResponse.value, APIError: false });
    } catch (err) {
      this.setState({ APIError: true });
    }
  };

  handlePublish = async () => {
    try {
      const draw = await this.createDraw();
      if (!this.state.values.dateScheduled) {
        await randomNumberApi.randomNumberToss(draw.private_id, {});
        this.props.history.push(`${this.props.location.pathname}/${draw.private_id}`);
      }
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
    const { APIError, values, quickResult, privateId } = this.state;
    const { isPublic } = this.props;
    return isPublic ? (
      <RandomNumberPage
        apiError={APIError}
        values={values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    ) : (
      <RandomNumberQuickPage
        apiError={APIError}
        values={values}
        shareResultLink={privateId ? `/number/${privateId}` : ''}
        quickResult={quickResult}
        onFieldChange={this.onFieldChange}
        handleToss={this.handleToss}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    );
  }
}

RandomNumberPageContainer.propTypes = {
  isPublic: PropTypes.bool,
  location: ReactRouterPropTypes.location.isRequired,
};

RandomNumberPageContainer.defaultProps = {
  isPublic: false,
};

export default RandomNumberPageContainer;

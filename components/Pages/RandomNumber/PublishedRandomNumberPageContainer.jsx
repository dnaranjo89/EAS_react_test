import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { RandomNumberApi } from 'echaloasuerte-js-sdk';

import PublishedRandomNumberPage from './PublishedRandomNumberPage.jsx';

const randomNumberApi = new RandomNumberApi();

class PublishedRandomNumberPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      rangeMin: null,
      rangeMax: null,
      numberOfResults: null,
      allowRepeated: null,
      result: null,
      isOwner: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  onToss = async () => {
    const { match } = this.props;
    const { drawId } = match.params;
    try {
      await randomNumberApi.randomNumberToss(drawId, {});
      this.loadData();
    } catch (err) {
      alert(err);
    }
  };

  async loadData() {
    const { match } = this.props;
    const { drawId } = match.params;

    const draw = await randomNumberApi.randomNumberRead(drawId);
    const {
      private_id: privateId,
      title,
      description,
      range_min: rangeMin,
      range_max: rangeMax,
      number_of_results: numberOfResults,
      allow_repeated_results: allowRepeated,
    } = draw;
    let lastToss;
    if (draw.results.length) {
      lastToss = draw.results[0];
    }

    this.setState({
      title,
      description,
      rangeMin,
      rangeMax,
      numberOfResults,
      allowRepeated,
      result: lastToss,
      isOwner: Boolean(privateId),
      isLoading: false,
    });
  }

  render() {
    const {
      title,
      description,
      rangeMin,
      rangeMax,
      numberOfResults,
      allowRepeated,
      result,
      isOwner,
      isLoading,
    } = this.state;

    return (
      <PublishedRandomNumberPage
        title={title}
        description={description}
        rangeMin={rangeMin}
        rangeMax={rangeMax}
        numberOfResults={numberOfResults}
        allowRepeated={allowRepeated}
        result={result}
        isOwner={isOwner}
        onToss={this.onToss}
        isLoading={isLoading}
      />
    );
  }
}

PublishedRandomNumberPageContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PublishedRandomNumberPageContainer;

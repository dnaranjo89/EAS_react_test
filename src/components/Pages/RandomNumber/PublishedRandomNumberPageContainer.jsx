import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { RandomNumberApi } from 'echaloasuerte-js-sdk';

import PublishedRandomNumberPage from './PublishedRandomNumberPage';

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
      results: [],
      isOwner: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  onToss = async () => {
    const drawId = this.props.match.params.drawId;
    try {
      await randomNumberApi.randomNumberToss(drawId, {});
      this.loadData();
    } catch (err) {
      alert(err);
    }
  };

  async loadData() {
    const drawId = this.props.match.params.drawId;

    const draw = await randomNumberApi.randomNumberRead(drawId);
    const {
      private_id: privateId,
      title,
      description,
      range_min: rangeMin,
      range_max: rangeMax,
      number_of_results: numberOfResults,
      allow_repeated_results: allowRepeated,
      results,
    } = draw;
    this.setState({
      title,
      description,
      rangeMin,
      rangeMax,
      numberOfResults,
      allowRepeated,
      results,
      isOwner: Boolean(privateId),
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
      results,
      isOwner,
    } = this.state;
    return (
      <PublishedRandomNumberPage
        title={title}
        description={description}
        rangeMin={rangeMin}
        rangeMax={rangeMax}
        numberOfResults={numberOfResults}
        allowRepeated={allowRepeated}
        results={results.length ? results[0].value : undefined}
        isOwner={isOwner}
        onToss={this.onToss}
      />
    );
  }
}

PublishedRandomNumberPageContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PublishedRandomNumberPageContainer;

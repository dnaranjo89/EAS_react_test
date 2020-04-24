import React, { Component } from 'react';

import PublishedFacebookPhotoRafflePage from './PublishedFacebookPhotoRafflePage.jsx';

class PublishedFacebookPhotoRafflePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      numberOfWinners: null,
      results: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    // const drawId = this.props.match.params.drawId;

    // const draw = await drawApi.getRandomNumber(drawId);
    const draw = {
      title: 'test facebook draw',
      description: 'this is a description',
      numberOfWinners: 1,
      results: [{ value: 'David Naranjo' }],
    };
    const { title, description, numberOfWinners, results } = draw;
    this.setState({
      title,
      description,
      numberOfWinners,
      results,
    });
  }

  render() {
    const { title, description, numberOfWinners, results } = this.state;

    return (
      <div>
        <PublishedFacebookPhotoRafflePage
          title={title}
          description={description}
          numberOfWinners={numberOfWinners}
          results={results.map(result => result.value)}
        />
      </div>
    );
  }
}

PublishedFacebookPhotoRafflePageContainer.propTypes = {};

export default PublishedFacebookPhotoRafflePageContainer;

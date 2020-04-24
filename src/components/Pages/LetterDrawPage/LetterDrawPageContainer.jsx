import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import LetterDrawPage from './LetterDrawPage.jsx';

class LetterDrawPageContainer extends Component {
  constructor(props) {
    super(props);

    this.handleMakeDrawPublic = this.handleMakeDrawPublic.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleToss = this.handleToss.bind(this);

    this.state = {
      values: {
        title: '',
        description: '',
        numberOfLetters: 1,
        results: [],
        isPublic: false,
        dateScheduled: null,
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

  // async createDraw() {
  // const { title, description, numberOfLetters } = this.state.values;
  // const randomNumberDraw = RandomNumber.constructFromObject({
  //   title,
  //   description,
  //   numberOfLetters,
  // });
  // try {
  //   return await drawApi.createRandomNumber(randomNumberDraw);
  // } catch (err) {
  //   alert(err);
  //   return null;
  // }
  // }

  async handleToss() {
    // if (!this.state.drawId) {
    //   const draw = await this.createDraw();
    //   this.setState({ drawId: draw.private_id });
    // }
    // let tossDrawResponse;
    // try {
    //   tossDrawResponse = await drawApi.putRandomNumber(this.state.drawId);
    // } catch (err) {
    //   alert(err);
    // }
    this.setState(previousState => ({
      values: {
        ...previousState.values,
        results: [],
      },
    }));
  }

  async handlePublish() {
    const draw = await this.createDraw();
    const { location, history } = this.props;
    // await drawApi.putRandomNumber(draw.private_id);
    history.push(`${location.pathname}/${draw.private_id}`);
  }

  handleMakeDrawPublic() {
    this.setState(previousState => ({
      values: {
        ...previousState.values,
        isPublic: true,
        results: [],
      },
    }));
  }

  render() {
    const { values } = this.state;
    return (
      <LetterDrawPage
        values={values}
        onFieldChange={this.onFieldChange}
        handleToss={this.handleToss}
        handlePublish={this.handlePublish}
        handleMakeDrawPublic={this.handleMakeDrawPublic}
      />
    );
  }
}

LetterDrawPageContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default LetterDrawPageContainer;

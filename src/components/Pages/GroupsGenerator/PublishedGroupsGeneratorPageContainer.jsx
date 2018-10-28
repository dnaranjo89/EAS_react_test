import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { GroupsApi } from 'echaloasuerte-js-sdk';

import PublishedGroupsGeneratorPage from './PublishedGroupsGeneratorPage';

const groupsApi = new GroupsApi();

class PublishedGroupsGeneratorPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      participants: [],
      numberOfGroups: null,
      result: null,
      isOwner: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  onToss = async () => {
    const drawId = this.props.match.params.drawId;
    try {
      await groupsApi.groupsToss(drawId, {});
      this.loadData();
    } catch (err) {
      alert(err);
    }
  };

  async loadData() {
    const drawId = this.props.match.params.drawId;

    const draw = await groupsApi.groupsRead(drawId);
    const {
      private_id: privateId,
      title,
      description,
      participants,
      number_of_groups: numberOfGroups,
    } = draw;
    let lastToss;
    if (draw.results.length) {
      lastToss = draw.results[0];
    }

    this.setState({
      title,
      description,
      participants,
      numberOfGroups,
      result: lastToss,
      isOwner: Boolean(privateId),
      isLoading: false,
    });
  }

  render() {
    const {
      title,
      description,
      participants,
      numberOfGroups,
      result,
      isOwner,
      isLoading,
    } = this.state;

    return (
      <PublishedGroupsGeneratorPage
        title={title}
        description={description}
        participants={participants}
        numberOfGroups={numberOfGroups}
        result={result}
        isOwner={isOwner}
        onToss={this.onToss}
        isLoading={isLoading}
      />
    );
  }
}

PublishedGroupsGeneratorPageContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default PublishedGroupsGeneratorPageContainer;

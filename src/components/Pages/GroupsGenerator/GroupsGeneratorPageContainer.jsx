import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ReactGA from 'react-ga';
import { GroupsApi, Groups, DrawTossPayload } from 'echaloasuerte-js-sdk';

import GroupsGeneratorPage from './GroupsGeneratorPage';
import GroupsGeneratorQuickPage from './GroupsGeneratorQuickPage';

const groupsApi = new GroupsApi();
class GroupsGeneratorPageContainer extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();
    now.setHours(now.getHours() + 1);
    const dateScheduled = now;

    this.state = {
      privateId: null,
      quickResult: null,
      APIError: false,
      values: {
        title: '',
        description: '',
        participants: [],
        numberOfGroups: '2',
        dateScheduled,
      },
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

  createDraw = () => {
    const { title, description, participants, numberOfGroups } = this.state.values;

    const publicDetails = {
      title,
      description,
    };
    let drawData = {
      participants: participants.map(participant => ({ name: participant })),
      number_of_groups: numberOfGroups,
    };

    if (this.props.isPublic) {
      drawData = {
        ...drawData,
        ...publicDetails,
      };
    }
    const groupGeneratorDraw = Groups.constructFromObject(drawData);
    return groupsApi.groupsCreate(groupGeneratorDraw);
  };

  handleToss = async () => {
    let privateId = this.state.privateId;
    try {
      if (!privateId) {
        const draw = await this.createDraw();
        privateId = draw.private_id;
        this.setState({ privateId });
      }
      const tossResponse = await groupsApi.groupsToss(privateId, {});
      ReactGA.event({ category: 'Toss', action: 'Group Generator', label: 'Local' });
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
      await groupsApi.groupsToss(draw.private_id, drawTossPayload);
      ReactGA.event({ category: 'Publish', action: 'Group Generator', label: draw.id });
      const drawPathname = match.path.replace('public', draw.private_id);
      history.push(drawPathname);
    } catch (err) {
      this.setState({ APIError: true });
    }
  };

  handleCheckErrorsInConfiguration = t => {
    const { APIError, values } = this.state;
    if (APIError) {
      return t('ApiError:api_error');
    }

    const { participants, numberOfGroups } = values;
    if (APIError) {
      return t('ApiError:api_error');
    }

    if (participants.length < numberOfGroups) {
      return t('error_form_not_enough_participants', { numberOfGroups });
    }
    return undefined;
  };

  render() {
    const { APIError, values, quickResult } = this.state;
    const { isPublic } = this.props;
    return isPublic ? (
      <GroupsGeneratorPage
        apiError={APIError}
        values={values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    ) : (
      <GroupsGeneratorQuickPage
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

GroupsGeneratorPageContainer.propTypes = {
  isPublic: PropTypes.bool,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};
GroupsGeneratorPageContainer.defaultProps = {
  isPublic: false,
};

export default GroupsGeneratorPageContainer;

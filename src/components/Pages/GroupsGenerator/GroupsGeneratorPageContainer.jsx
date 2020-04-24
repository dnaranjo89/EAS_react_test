import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { GroupsApi, Groups, DrawTossPayload } from 'echaloasuerte-js-sdk';
import moment from 'moment';
import { withTranslation } from '../../i18n';
import GroupsGeneratorPage from './GroupsGeneratorPage.jsx';
import GroupsGeneratorQuickPage from './GroupsGeneratorQuickPage.jsx';
import withTracking from '../../withTracking/withTracking.jsx';
import recentDraws from '../../../services/recentDraws';
import throttle from '../../../services/throttle';
import { ANALYTICS_TYPE_GROUPS } from '../../../constants/analyticsTypes';

const groupsApi = new GroupsApi();
class GroupsGeneratorPageContainer extends React.Component {
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
        numberOfGroups: '2',
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
    const { isPublic } = match.params;
    const { values } = this.state;
    const { title, description, participants, numberOfGroups } = values;
    const drawData = {
      participants: participants.map(participant => ({ name: participant })),
      number_of_groups: numberOfGroups,
      title: isPublic && title ? title : null,
      description: isPublic && description ? description : null,
    };
    const groupGeneratorDraw = Groups.constructFromObject(drawData);
    return groupsApi.groupsCreate(groupGeneratorDraw);
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

      const tossResponse = await groupsApi.groupsToss(privateId, {});
      const { track } = this.props;
      track({
        mp: {
          name: `Toss - ${ANALYTICS_TYPE_GROUPS}`,
          properties: { drawType: ANALYTICS_TYPE_GROUPS },
        },
        ga: { action: 'Toss', category: ANALYTICS_TYPE_GROUPS },
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
      const tossResponse = await groupsApi.groupsToss(draw.private_id, drawTossPayload);
      const scheduleDate = moment(tossResponse.schedule_date).unix();
      const { track } = this.props;
      track({
        mp: {
          name: `Publish - ${ANALYTICS_TYPE_GROUPS}`,
          properties: { drawType: ANALYTICS_TYPE_GROUPS, drawId: draw.id },
        },
        ga: { action: 'Publish', category: ANALYTICS_TYPE_GROUPS, label: draw.id },
      });

      const drawPath = `/groups/${draw.id}/success`;
      recentDraws.add(draw, drawPath, scheduleDate);
      history.push(drawPath);
    } catch (err) {
      this.setState({ APIError: true, loadingRequest: false });
    }
  };

  handleCheckErrorsInConfiguration = t => {
    const { values } = this.state;
    const { participants, numberOfGroups } = values;
    if (participants.length < numberOfGroups) {
      return t('error_form_not_enough_participants', { numberOfGroups });
    }
    return undefined;
  };

  render() {
    const { APIError, values, quickResult, loadingRequest } = this.state;
    const { match } = this.props;
    const { isPublic } = match.params;

    return isPublic ? (
      <GroupsGeneratorPage
        apiError={APIError}
        loadingRequest={loadingRequest}
        values={values}
        onFieldChange={this.onFieldChange}
        handlePublish={this.handlePublish}
        handleCheckErrorsInConfiguration={this.handleCheckErrorsInConfiguration}
      />
    ) : (
      <GroupsGeneratorQuickPage
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

GroupsGeneratorPageContainer.propTypes = {
  track: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
GroupsGeneratorPageContainer.defaultProps = {};

export default withTracking(withTranslation('GroupsGenerator')(GroupsGeneratorPageContainer));

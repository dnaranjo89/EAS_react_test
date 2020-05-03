import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import { withTranslation } from '../i18n';
import {
  apiCall,
  fbAsyncInit,
  injectScript,
  getLikesOnObject,
  queryUserDetails,
  logout,
} from '../services/FacebookAPI/FacebookAPI';

export const FacebookContext = React.createContext();

class FacebookProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingFbStatus: true,
      loadingFbDetails: true,
      isLoggedInFB: false,
      fbErrorMessage: null,
      userId: null,
      username: null,
      userPages: null,
    };
  }

  componentDidMount() {
    const { i18n } = this.props;
    fbAsyncInit(this.handleStatusChange);
    const locale = i18n.language.replace('-', '_');
    injectScript(locale);
  }

  handleStatusChange = async response => {
    const { t } = this.props;
    // status: connected == logged in
    // status: unknown == logged out
    const isLoggedInFB = response.status === 'connected' && !!response.authResponse;
    if (!isLoggedInFB) {
      this.setState({
        isLoggedInFB: false,
        loadingFbStatus: false,
      });
      return undefined;
    }
    try {
      const { userId, username } = await queryUserDetails();
      this.setState({
        isLoggedInFB: true,
        loadingFbStatus: false,
        userId,
        username,
      });
      return {
        userId,
        username,
      };
    } catch (ex) {
      let fbErrorMessage;
      switch (ex.error.code) {
        case 1:
          fbErrorMessage = t('error_message_possibly_blocked');
          break;
        default:
          fbErrorMessage = t('error_message_impossible_to_log_in');
      }
      Sentry.withScope(scope => {
        scope.setExtra('message', fbErrorMessage);
        Sentry.captureException(ex);
      });
      this.setState({
        fbErrorMessage,
        isLoggedInFB: false,
        loadingFbStatus: false,
      });
      return undefined;
    }
  };

  queryUserPages = async () => {
    const response = await apiCall('/me/accounts');
    if (response && !response.error) {
      const userPages = response.data.map(page => ({
        pageName: page.name,
        accessToken: page.access_token,
      }));
      this.setState({ userPages });
    }
  };

  queryLikesOnObject = async objectId => {
    const { userPages } = this.state;
    const accessTokens = userPages.map(page => page.accessToken);
    /* const response = */ await Promise.all(
      accessTokens.map(token => getLikesOnObject(objectId, token)),
    );

    // accessTokens.forEach(async pageAccessToken => {
    //   const likers = await getLikesOnObject(objectId, pageAccessToken);
    //   if (likers.length) {
    //     this.onFieldChange('participants', likers);
    //   }
    //   this.setState({ participantsFetched: true });
    // });
  };

  render() {
    const context = {
      ...this.state,
      queryUserPages: this.queryUserPages,
      queryLikesOnObject: this.queryLikesOnObject,
      handleStatusChange: this.handleStatusChange,
      logout,
    };
    const { children } = this.props;
    return <FacebookContext.Provider value={context}>{children}</FacebookContext.Provider>;
  }
}
FacebookProvider.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTranslation('FacebookProvider')(FacebookProvider);

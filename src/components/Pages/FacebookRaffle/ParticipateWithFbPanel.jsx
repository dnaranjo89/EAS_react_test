import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import withFacebookSDK from '../../withFacebookSDK/withFacebookSDK.jsx';
import FacebookLoginButton from '../../FacebookLoginButton/FacebookLoginButton.jsx';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.jsx';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import LoadingButton from '../../LoadingButton/LoadingButton.jsx';

const ParticipateWithFbPanel = ({
  userRegisteredInRaffle,
  registerUserInRaffle,
  registeringInRaffle,
  registerFailedErrorMessage,
  facebookContext,
  t,
}) => {
  const handleFbLogin = async response => {
    const { handleStatusChange } = facebookContext;
    const userDetails = await handleStatusChange(response);
    registerUserInRaffle(userDetails);
  };

  const { loadingFbStatus, isLoggedInFB, username, logout, fbErrorMessage } = facebookContext;
  if (loadingFbStatus) {
    return <LoadingSpinner />;
  }

  if (!isLoggedInFB) {
    return (
      <>
        <FacebookLoginButton
          label={t('login_with_facebook_to_participate')}
          onLogin={handleFbLogin}
        />
        {fbErrorMessage && <ErrorFeedback error={fbErrorMessage} />}
      </>
    );
  }

  if (userRegisteredInRaffle) {
    return (
      <Typography variant="body2" data-testid="FacebookRaffle__participant-registered">
        {t('you_are_registered_as_username', { username })}
      </Typography>
    );
  }

  return (
    <>
      <LoadingButton
        variant="contained"
        color="primary"
        data-testid="FacebookRaffle__participant-button"
        onClick={() => registerUserInRaffle()} // Intentionally avoiding to pass the click event as param
        loading={registeringInRaffle}
      >
        {t('participate_as', { username })}
      </LoadingButton>
      <Typography variant="caption" gutterBottom>
        <br />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link component="button" variant="caption" onClick={logout}>
          {t('or_access_as_someone_else')}
        </Link>
      </Typography>
      {registerFailedErrorMessage && <ErrorFeedback error={registerFailedErrorMessage} />}
    </>
  );
};

ParticipateWithFbPanel.propTypes = {
  userRegisteredInRaffle: PropTypes.bool.isRequired,
  registerUserInRaffle: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  registeringInRaffle: PropTypes.bool,
  registerFailedErrorMessage: PropTypes.string,
  facebookContext: PropTypes.shape({
    isLoggedInFB: PropTypes.bool.isRequired,
    loadingFbStatus: PropTypes.bool.isRequired,
    username: PropTypes.string,
    logout: PropTypes.func.isRequired,
    handleStatusChange: PropTypes.func.isRequired,
    fbErrorMessage: PropTypes.string,
  }).isRequired,
};

ParticipateWithFbPanel.defaultProps = {
  registeringInRaffle: false,
  registerFailedErrorMessage: '',
};

export default withFacebookSDK(ParticipateWithFbPanel);

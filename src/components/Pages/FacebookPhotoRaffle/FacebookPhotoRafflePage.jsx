import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classnames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import TextField from '../../TextField/TextField.jsx';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
// import MultiValueDisplay from '../../MultiValueDisplay/MultiValueDisplay.jsx';
import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';
import WizardForm from '../../WizardForm/WizardForm.jsx';
import FormValidationFeedback from '../../FormValidation/FormValidationFeedback.jsx';
import Page from '../../Page/Page.jsx';
import FacebookLoginButton from '../../FacebookLoginButton/FacebookLoginButton.jsx';
import STYLES from './FacebookPhotoRafflePage.scss';

const c = classnames.bind(STYLES);

const GrantAccessSection = ({ isLoggedInFB, userPages }) => (
  <Fragment>
    <SectionPanel>
      {isLoggedInFB ? (
        <Fragment>
          You are logged in. These are the pages were we got access:
          <ul>
            {userPages !== null &&
              userPages.map(page => <li key={page.pageName}>{page.pageName}</li>)}
          </ul>
        </Fragment>
      ) : (
        <Fragment>
          <Typography variant="body1" gutterBottom>
            Para poder hacer un sorteo entre la gente a la que le ha gustado un post, debes acceder
            con Facebook
            <br />
            Sólo es posible hacer sorteos en posts publicados por paginas que tú administres
          </Typography>
        </Fragment>
      )}
      <FacebookLoginButton permissions="manage_pages" />
      <br />
      <FormValidationFeedback />
    </SectionPanel>
  </Fragment>
);

GrantAccessSection.propTypes = {
  isLoggedInFB: PropTypes.bool.isRequired,
  userPages: PropTypes.arrayOf(
    PropTypes.shape({
      pageName: PropTypes.string.isRequired,
      accessToken: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // t: PropTypes.func.isRequired,
};

const ChoosePostSection = ({
  url,
  // participants,
  // participantsFetched,
  onFieldChange,
  onGetLikes,
  t,
}) => (
  <SectionPanel>
    Now paste here the link to the post you want to check
    <TextField
      label={t('post_or_photo_url')}
      margin="normal"
      onChange={e => onFieldChange('url', e.target.value)}
      value={url}
      type="text"
      fullWidth
    />
    <Button variant="contained" color="primary" onClick={onGetLikes}>
      {t('check_participants')}
    </Button>
    {/* {participantsFetched && (
      <MultiValueDisplay
        name="participants"
        label={t('participants')}
        values={participants}
        placeholder="David"
      />
    )} */}
  </SectionPanel>
);

ChoosePostSection.propTypes = {
  url: PropTypes.string.isRequired,
  // participants: PropTypes.string.isRequired,
  // participantsFetched: PropTypes.bool.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onGetLikes: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

const GrantAccessForm = withValidationProvider(GrantAccessSection);
const ChoosePostForm = withValidationProvider(ChoosePostSection);

const FacebookPhotoRafflePage = props => {
  const {
    values,
    participants,
    participantsFetched,
    isLoggedInFB,
    userPages,
    onGetLikes,
    onFieldChange,
    handlePublish,
    t,
  } = props;
  const steps = [
    {
      label: t('step_label_login_with_facebook'),
      render: wizardProps => (
        <GrantAccessForm
          isLoggedInFB={isLoggedInFB}
          userPages={userPages}
          onFormErrorsCheck={() => {
            if (!isLoggedInFB) {
              return t('error_form_need_to_login_facebook');
            }
            if (!userPages.length) {
              return t('error_no_user_pages');
            }
            return undefined;
          }}
          t={t}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_choose_post'),
      render: wizardProps => (
        <ChoosePostForm
          url={values.url}
          participants={participants}
          participantsFetched={participantsFetched}
          onFieldChange={onFieldChange}
          onGetLikes={onGetLikes}
          t={t}
          {...wizardProps}
        />
      ),
    },
  ];

  return (
    <Page htmlTitle={t('html_title')} className={c('FacebookPhotoRafflePage')}>
      <div className={c('FacebookPhotoRafflePage__container')}>
        <Typography variant="h1" align="center">
          {t('page_title')}
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          {t('draw_subheading')}
        </Typography>
        <WizardForm
          steps={steps}
          // initialStep={1}
          onSubmit={handlePublish}
          submitButtonLabel={t('publish_draw')}
        />
      </div>
    </Page>
  );
};

FacebookPhotoRafflePage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.string),
    prizes: PropTypes.arrayOf(PropTypes.string),
    numberOfWinners: PropTypes.number,
    dateScheduled: PropTypes.string,
  }).isRequired,
  participants: PropTypes.string.isRequired,
  participantsFetched: PropTypes.bool.isRequired,
  isLoggedInFB: PropTypes.bool,
  userPages: PropTypes.arrayOf(
    PropTypes.shape({
      pageName: PropTypes.string.isRequired,
      accessToken: PropTypes.string.isRequired,
    }),
  ),
  t: PropTypes.func.isRequired,
  onGetLikes: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
};

FacebookPhotoRafflePage.defaultProps = {
  isLoggedInFB: false,
  userPages: [],
};

export default withTranslation('FacebookPhotoRafflePage')(FacebookPhotoRafflePage);

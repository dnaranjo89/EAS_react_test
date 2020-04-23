import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from '../../i18n';
import withValidationProvider from '../FormValidation/withValidationProvider.jsx';
import GeneralDetailsSection from '../CommonSections/GeneralDetailsSection.jsx';
import WhenToTossSection from '../CommonSections/WhenToTossSection.jsx';
import WizardForm from '../WizardForm/WizardForm.jsx';
import Page from '../Page/Page.jsx';
import DrawHeading from '../DrawHeading/DrawHeading.jsx';
import GroupsGeneratorConfigurationSection from './GroupsGeneratorConfigurationSection.jsx';
import groupsOgImage from './groups_og_image.png';

const GeneralDetailsForm = withValidationProvider(GeneralDetailsSection);
const ConfigurationForm = withValidationProvider(GroupsGeneratorConfigurationSection);
const WhenToTossForm = withValidationProvider(WhenToTossSection);

const GroupsGeneratorPage = props => {
  const {
    values,
    apiError,
    loadingRequest,
    handleCheckErrorsInConfiguration,
    onFieldChange,
    handlePublish,
    isMobile,
    t,
  } = props;
  const steps = [
    {
      label: t('step_label_configure'),
      render: wizardProps => (
        <ConfigurationForm
          onFormErrorsCheck={() => handleCheckErrorsInConfiguration(t)}
          values={values}
          onFieldChange={onFieldChange}
          t={t}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_general_details'),
      render: wizardProps => (
        <GeneralDetailsForm
          title={values.title}
          description={values.description}
          onFieldChange={onFieldChange}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_when_to_toss'),
      render: wizardProps => (
        <WhenToTossForm
          label={t('field_label_when_to_toss')}
          dateScheduled={values.dateScheduled}
          onFieldChange={onFieldChange}
          t={t}
          {...wizardProps}
        />
      ),
    },
  ];
  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      pageType="Groups Public Draw"
      ogImage={groupsOgImage}
      enableHotjar
      showAdvert={!isMobile}
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <WizardForm
        steps={steps}
        onSubmit={handlePublish}
        submitButtonLabel={t('publish_draw')}
        apiError={apiError}
        isMobile={isMobile}
        loadingRequest={loadingRequest}
      />
    </Page>
  );
};

GroupsGeneratorPage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    numberOfGroups: PropTypes.string,
    dateScheduled: PropTypes.instanceOf(Date),
  }).isRequired,
  apiError: PropTypes.bool,
  loadingRequest: PropTypes.bool.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

GroupsGeneratorPage.defaultProps = {
  apiError: false,
};

const mapStateToProps = state => ({ isMobile: state.userRequest.isMobile });

export default withTranslation('GroupsGenerator')(connect(mapStateToProps)(GroupsGeneratorPage));
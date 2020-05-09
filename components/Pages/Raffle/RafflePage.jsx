import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from '../../../i18n';
import GeneralDetailsSection from '../../CommonSections/GeneralDetailsSection.jsx';
import WhenToTossSection from '../../CommonSections/WhenToTossSection.jsx';
import WizardForm from '../../WizardForm/WizardForm.jsx';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import RaffleConfigurationSection from './RaffleConfigurationSection.jsx';
import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';
import raffleOgImage from './raffle_og_image.png';

const GeneralDetailsForm = withValidationProvider(GeneralDetailsSection);
const ConfigurationForm = withValidationProvider(RaffleConfigurationSection);
const WhenToTossForm = withValidationProvider(WhenToTossSection);

const RafflePage = ({
  values,
  apiError,
  isMobile,
  loadingRequest,
  onFieldChange,
  handlePublish,
  handleCheckErrorsInConfiguration,
  t,
}) => {
  const steps = [
    {
      label: t('step_label_configure'),
      render: wizardProps => (
        <ConfigurationForm
          values={values}
          onFieldChange={onFieldChange}
          t={t}
          onFormErrorsCheck={() => handleCheckErrorsInConfiguration(t)}
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
          titleRequired
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
      pageType="groups_public_draw"
      showAdvert={!isMobile}
      ogImage={raffleOgImage}
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <WizardForm
        steps={steps}
        onSubmit={handlePublish}
        submitButtonLabel={t('publish_draw')}
        apiError={apiError}
        loading={loadingRequest}
        isMobile={isMobile}
      />
      <LearnMoreSection title={t('learn_more_title')} content={t('learn_more_content')} />
    </Page>
  );
};

RafflePage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    dateScheduled: PropTypes.instanceOf(Date),
  }).isRequired,
  apiError: PropTypes.bool,
  isMobile: PropTypes.bool.isRequired,
  loadingRequest: PropTypes.bool.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

RafflePage.defaultProps = {
  apiError: false,
};

const mapStateToProps = state => ({ isMobile: state.userRequest.isMobile });

export default withTranslation('DrawRaffle')(connect(mapStateToProps)(RafflePage));

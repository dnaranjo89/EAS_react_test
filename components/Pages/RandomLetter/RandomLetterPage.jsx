import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import { isMobile } from 'react-device-detect';
import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';
import GeneralDetailsSection from '../../CommonSections/GeneralDetailsSection.jsx';
import WhenToTossSection from '../../CommonSections/WhenToTossSection.jsx';
import WizardForm from '../../WizardForm/WizardForm.jsx';
import Page from '../../Page/Page.jsx';
import RandomLetterConfigurationSection from './RandomLetterConfigurationSection.jsx';
import randomLetterOgImage from './random_letter_og_image.png';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';

const GeneralDetailsForm = withValidationProvider(GeneralDetailsSection);
const ConfigurationForm = withValidationProvider(RandomLetterConfigurationSection);
const WhenToTossForm = withValidationProvider(WhenToTossSection);

const RandomLetterPage = props => {
  const {
    values,
    apiError,
    loadingRequest,
    handleCheckErrorsInConfiguration,
    onFieldChange,
    handlePublish,
  } = props;
  const { t } = useTranslation('DrawLetter');
  const steps = [
    {
      label: t('step_label_configuration'),
      render: wizardProps => (
        <ConfigurationForm
          values={values}
          onFieldChange={onFieldChange}
          t={t}
          onFormErrorsCheck={() => handleCheckErrorsInConfiguration()}
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
      pageType="Letters Draw"
      ogImage={randomLetterOgImage}
      showAdvert={!isMobile}
    >
      <DrawHeading title={t('page_title_public')} subtitle={t('draw_subheading')} />
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
// TODO there is something wrong with the keys in the participants input,

RandomLetterPage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateScheduled: PropTypes.instanceOf(Date),
  }).isRequired,
  apiError: PropTypes.bool,
  loadingRequest: PropTypes.bool.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
};

RandomLetterPage.defaultProps = {
  apiError: false,
};

export default RandomLetterPage;

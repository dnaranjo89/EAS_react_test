import React from 'react';
import { useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';
import GeneralDetailsSection from '../../CommonSections/GeneralDetailsSection.jsx';
import WhenToTossSection from '../../CommonSections/WhenToTossSection.jsx';
import WizardForm from '../../WizardForm/WizardForm.jsx';
import Page from '../../Page/Page.jsx';
import RandomNumberConfigurationSection from './RandomNumberConfigurationSection.jsx';
import randomNumberOgImage from './random_number_og_image.png';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import getIsMobile from '../../../selectors/getIsMobile';

const GeneralDetailsForm = withValidationProvider(GeneralDetailsSection);
const ConfigurationForm = withValidationProvider(RandomNumberConfigurationSection);
const WhenToTossForm = withValidationProvider(WhenToTossSection);

const RandomNumberPage = props => {
  const isMobile = useSelector(getIsMobile);
  const {
    values,
    apiError,
    loadingRequest,
    handleCheckErrorsInConfiguration,
    onFieldChange,
    handlePublish,
    t,
  } = props;
  const steps = [
    {
      label: t('step_label_configuration'),
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
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_when_to_toss'),
      render: wizardProps => (
        <WhenToTossForm
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
      pageType="Numbers Draw"
      ogImage={randomNumberOgImage}
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

RandomNumberPage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rangeMax: PropTypes.string.isRequired,
    rangeMin: PropTypes.string.isRequired,
    numberOfResults: PropTypes.string.isRequired,
    allowRepeated: PropTypes.bool.isRequired,
    dateScheduled: PropTypes.instanceOf(Date),
  }).isRequired,
  apiError: PropTypes.bool,
  loadingRequest: PropTypes.bool.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

RandomNumberPage.defaultProps = {
  apiError: false,
};

export default withTranslation('RandomNumber')(RandomNumberPage);

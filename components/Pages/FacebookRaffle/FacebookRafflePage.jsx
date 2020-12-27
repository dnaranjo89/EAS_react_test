import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import { isMobile } from 'react-device-detect';
import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';
import GeneralDetailsSection from '../../CommonSections/GeneralDetailsSection.jsx';
import WhenToTossSection from '../../CommonSections/WhenToTossSection.jsx';
import WizardForm from '../../WizardForm/WizardForm.jsx';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import PrizesInput from '../../PrizesInput.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import facebookRaffleOgImage from './facebook_raffle_og_image.png';

const ValidatedPrizesInput = withFieldValidation(PrizesInput);

const PrizesSection = ({ prizes, onFieldChange }) => (
  <SectionPanel>
    <ValidatedPrizesInput
      name="prizes"
      value={prizes}
      onChange={e => onFieldChange('prizes', e.target.value)}
      validators={[{ rule: 'required' }]}
    />
  </SectionPanel>
);
PrizesSection.propTypes = {
  prizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

const PrizesForm = withValidationProvider(PrizesSection);
const GeneralDetailsForm = withValidationProvider(GeneralDetailsSection);
const WhenToTossForm = withValidationProvider(WhenToTossSection);

const FacebookRafflePage = props => {
  const { values, apiError, onFieldChange, handlePublish } = props;
  const { t } = useTranslation('DrawFacebook');
  const steps = [
    {
      label: t('step_label_prizes'),
      render: wizardProps => (
        <PrizesForm
          numberOfWinners={values.numberOfWinners}
          prizes={values.prizes}
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
      pageType="Facebook Raffle"
      showAdvert={!isMobile}
      ogImage={facebookRaffleOgImage}
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <WizardForm
        steps={steps}
        onSubmit={handlePublish}
        submitButtonLabel={t('publish_draw')}
        apiError={apiError}
        isMobile={isMobile}
      />
    </Page>
  );
};

FacebookRafflePage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    prizes: PropTypes.arrayOf(PropTypes.string),
    numberOfWinners: PropTypes.string,
    dateScheduled: PropTypes.instanceOf(Date),
  }).isRequired,
  apiError: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
};

FacebookRafflePage.defaultProps = {
  apiError: false,
};

export default FacebookRafflePage;

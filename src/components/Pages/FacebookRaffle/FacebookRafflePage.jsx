import React from 'react';
import { withTranslation } from '../../i18n';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';
import GeneralDetailsSection from '../../CommonSections/GeneralDetailsSection.jsx';
import WhenToTossSection from '../../CommonSections/WhenToTossSection.jsx';
import WizardForm from '../../WizardForm/WizardForm.jsx';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import PrizesInput from '../../PrizesInput/PrizesInput.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';

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
  const { values, isMobile, apiError, onFieldChange, handlePublish, t } = props;
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
      enableHotjar
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
  isMobile: PropTypes.bool.isRequired,
  apiError: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

FacebookRafflePage.defaultProps = {
  apiError: false,
};

const mapStateToProps = state => ({ isMobile: state.userRequest.isMobile });

export default withTranslation('FacebookRaffle')(connect(mapStateToProps)(FacebookRafflePage));

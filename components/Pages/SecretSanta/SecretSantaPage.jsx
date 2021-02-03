import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import useTranslation from 'next-translate/useTranslation';

import WizardForm from '../../WizardForm/WizardForm.jsx';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import ParticipantsWithEmailSection from './ParticipantsWithEmailSection.jsx';
import ExclusionsSection from './ExclusionsSection.jsx';
import SendSection from './SendSection.jsx';
import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';

import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';

const ParticipantsWithEmailSectionForm = withValidationProvider(ParticipantsWithEmailSection);
const ExclusionsSectionForm = withValidationProvider(ExclusionsSection);
const SendSectionForm = withValidationProvider(SendSection);

const SecretSantaPage = props => {
  const [values, setValues] = useState({
    participants: [
      { name: 'David', email: 'whatever@as', exclusions: [] },
      { name: 'Pepe', email: 'whatevera@as', exclusions: [] },
      { name: 'Mario', email: 'w2hatever@as', exclusions: ['David', 'Pedro'] },
    ],
  });
  //  [{ name: 'David', email: 'whatever@as' }]
  const { t } = useTranslation('DrawSecretSanta');
  const onFieldChange = (fieldName, value) => {
    setValues(previousState => ({
      ...previousState,
      [fieldName]: value,
    }));
  };

  const handleParticipantsChange = participants => {
    setValues({ participants });
  };

  const handleExclusionsChange = (participantName, exclusionNamesList) => {
    setValues(prevValues => ({
      participants: prevValues.participants.map(p => {
        if (p.name === participantName) {
          return { ...p, exclusions: exclusionNamesList };
        }
        return p;
      }),
    }));
  };
  const steps = [
    {
      label: t('step_label_participants'),
      render: wizardProps => (
        <ParticipantsWithEmailSectionForm
          onFieldChange={handleParticipantsChange}
          participants={values.participants}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_exclusions'),
      render: wizardProps => (
        <ExclusionsSectionForm
          participants={values.participants}
          onModifyExclusions={handleExclusionsChange}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_send'),
      render: wizardProps => <SendSectionForm {...wizardProps} />,
    },
  ];

  const handlePublish = () => {}; // TODO implement
  const apiError = false; // TODO need to handle that

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      pageType="Secret Santa"
      showAdvert={!isMobile}
      // ogImage={facebookRaffleOgImage} // TODO implement
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <WizardForm
        steps={steps}
        initialStep={1}
        onSubmit={handlePublish}
        submitButtonLabel={t('button_label_send_emails')}
        apiError={apiError}
        isMobile={isMobile}
      />
      <LearnMoreSection title={t('learn_more_title')} content={t('learn_more_content')} />
    </Page>
  );
};

SecretSantaPage.propTypes = {};

export default SecretSantaPage;

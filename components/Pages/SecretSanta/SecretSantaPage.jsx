import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import useTranslation from 'next-translate/useTranslation';
import PropTypes from 'prop-types';

import { SecretSantaApi } from 'echaloasuerte-js-sdk';
import Router from 'next/router';
import WizardForm from '../../WizardForm/WizardForm.jsx';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import ParticipantsWithEmailSection from './ParticipantsWithEmailSection.jsx';
import ExclusionsSection from './ExclusionsSection.jsx';
import SendSection from './SendSection.jsx';
import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';

import withValidationProvider from '../../FormValidation/withValidationProvider.jsx';
import { URL_SLUG_SECRET_SANTA } from '../../../constants/urlSlugs';
import { analyticsTypesBySlug } from '../../../constants/analyticsTypes';
import withTracking from '../../../hocs/withTracking.jsx';
import { logApiError } from '../../../utils/logger';

const urlSlug = URL_SLUG_SECRET_SANTA;
const ParticipantsWithEmailSectionForm = withValidationProvider(ParticipantsWithEmailSection);
const ExclusionsSectionForm = withValidationProvider(ExclusionsSection);
const SendSectionForm = withValidationProvider(SendSection);

const SecretSantaPage = ({ track }) => {
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [APIError, setAPIError] = useState(false);

  const [values, setValues] = useState({
    participants: [
      { name: 'David', email: 'whatever@as.com', exclusions: [] },
      { name: 'Pepe', email: 'whatevera@as.com', exclusions: [] },
      { name: 'Mario', email: 'w2hatever@as.com', exclusions: ['David'] },
    ],
  });
  const { t } = useTranslation('DrawSecretSanta');

  // TODO how does email validates in the server?

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
          onParticipantsChange={handleParticipantsChange}
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
          onExclusionsChange={handleExclusionsChange}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_send'),
      render: wizardProps => <SendSectionForm {...wizardProps} />,
    },
  ];

  const handlePublish = async () => {
    setLoadingRequest(true);
    const analyticsType = analyticsTypesBySlug[urlSlug];
    console.log('SecretSantaApi', SecretSantaApi);
    const secretSantaApi = new SecretSantaApi();
    try {
      const newDraw = await secretSantaApi.secretSantaCreate({
        participants: values.participants,
        language: 'es', // TODO remove this hardcoded language
      });
      track({
        mp: {
          name: `Publish - ${analyticsType}`,
          properties: { drawType: analyticsType, drawId: newDraw.id },
        },
        ga: { action: 'Publish', category: analyticsType, label: newDraw.id },
      });

      const drawPath = `/${urlSlug}/${newDraw.id}`;
      const drawPathSuccess = `${drawPath}/success`;
      Router.push(`/${urlSlug}/success`, drawPathSuccess);
    } catch (error) {
      logApiError(error, analyticsType);
      setAPIError(true);
      setLoadingRequest(false);
    }
  };

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
        initialStep={2}
        onSubmit={handlePublish}
        submitButtonLabel={t('button_label_send_emails')}
        apiError={APIError}
        isMobile={isMobile}
        loading={loadingRequest}
        learnMoreSection={
          <LearnMoreSection title={t('learn_more_title')} content={t('learn_more_content')} />
        }
      />
    </Page>
  );
};

SecretSantaPage.propTypes = { track: PropTypes.func.isRequired };

export default withTracking(SecretSantaPage);

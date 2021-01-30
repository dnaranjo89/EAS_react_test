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
import secretSantaOgImage from './secret_santa_og_image.png';

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
  const [APIError, setAPIError] = useState(null);

  const [values, setValues] = useState({
    participants: [],
  });
  const { t, lang } = useTranslation('DrawSecretSanta');

  const handleParticipantsChange = participants => {
    setValues({ participants });
    setAPIError(null);
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
    setAPIError(null);
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
    const secretSantaApi = new SecretSantaApi();
    try {
      await secretSantaApi.secretSantaCreate({
        participants: values.participants,
        language: lang.substring(0, 2),
      });
      track({
        mp: {
          name: `Publish - ${analyticsType}`,
          properties: { drawType: analyticsType },
        },
        ga: { action: 'Publish', category: analyticsType },
      });

      const drawPathSuccess = `${urlSlug}/success`;
      Router.push(`/${urlSlug}/success`, drawPathSuccess);
    } catch (error) {
      let errorMessage;
      if (error.status === 400) {
        errorMessage = t('error_unable_to_match_participants');
      } else {
        errorMessage = t('CommonCreateDraw:api_error');
      }
      setAPIError(errorMessage);
      const options = {
        tags: { drawType: analyticsType },
      };
      logApiError(error, options);
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
      ogImage={secretSantaOgImage}
      noIndex
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <WizardForm
        steps={steps}
        initialStep={0}
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

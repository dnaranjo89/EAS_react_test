import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import Page from '../../Page/Page.jsx';
import RandomLetterConfigurationSection from './RandomLetterConfigurationSection.jsx';
import RandomLetterResult from './RandomLetterResult.jsx';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import useScrollToResults from '../../../hooks/useScrollToResults';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import randomLetterOgImage from './random_letter_og_image.png';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import { analyticsTypesBySlug } from '../../../constants/analyticsTypes';
import { URL_SLUG_LETTER } from '../../../constants/urlSlugs';

const urlSlug = URL_SLUG_LETTER;
const analyticsType = analyticsTypesBySlug[urlSlug];

const RandomLetterQuickPage = props => {
  const {
    apiError,
    values,
    quickResult,
    handleToss,
    onFieldChange,
    handleCheckErrorsInConfiguration,
    loadingRequest,
  } = props;
  const { t } = useTranslation('DrawLetter');
  const publicDrawUrl = `/${urlSlug}/public`;
  const resultsRef = useRef(null);
  useScrollToResults(quickResult, resultsRef);

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={randomLetterOgImage}
      pageType="Random Letter Quick Draw"
      sidePanel={
        <MakeCertifiedDrawPanel
          buttonLabel={t('create_certificated_draw')}
          publicDrawUrl={publicDrawUrl}
          analyticsDrawType={analyticsType}
        >
          {t('certified_draw_description')}
        </MakeCertifiedDrawPanel>
      }
    >
      <DrawHeading title={t('page_title_quick')} subtitle={t('draw_subheading')} />
      <ValidationProvider
        onSubmit={e => {
          e.preventDefault();
          handleToss();
        }}
        onFormErrorsCheck={() => handleCheckErrorsInConfiguration()}
      >
        <RandomLetterConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
        {apiError && <ErrorFeedback error={t('CommonCreateDraw:api_error')} />}
        <SubmitFormButton label={t('generate_results')} disabled={loadingRequest} />
      </ValidationProvider>

      <div ref={resultsRef}>
        {loadingRequest && <LoadingCoin />}
        {!loadingRequest && quickResult && <RandomLetterResult result={quickResult} />}
      </div>
    </Page>
  );
};

RandomLetterQuickPage.propTypes = {
  apiError: PropTypes.bool,
  loadingRequest: PropTypes.bool.isRequired,
  values: PropTypes.shape({}).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  quickResult: PropTypes.shape(),
};

RandomLetterQuickPage.defaultProps = {
  apiError: false,
  quickResult: null,
};

export default RandomLetterQuickPage;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import Page from '../../Page/Page.jsx';
import RandomNumberConfigurationSection from './RandomNumberConfigurationSection.jsx';
import RandomNumberResult from './RandomNumberResult.jsx';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import useScrollToResults from '../../../hooks/useScrollToResults';
import MakePublicDrawPanel from '../../MakePublicDrawPanel/MakePublicDrawPanel.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import randomNumberOgImage from './random_number_og_image.png';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import { ANALYTICS_TYPE_NUMBER } from '../../../constants/analyticsTypes';

const RandomNumberQuickPage = props => {
  const {
    apiError,
    values,
    quickResult,
    handleToss,
    onFieldChange,
    handleCheckErrorsInConfiguration,
    loadingRequest,
  } = props;
  const publicDrawUrl = '/number/public';
  const resultsRef = useRef(null);
  useScrollToResults(quickResult, resultsRef);
  const { t } = useTranslation('DrawNumber');

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={randomNumberOgImage}
      pageType="Random Number Quick Draw"
      sidePanel={
        <MakePublicDrawPanel
          buttonLabel={t('CommonCreateDraw:create_public_draw')}
          publicDrawUrl={publicDrawUrl}
          analyticsDrawType={ANALYTICS_TYPE_NUMBER}
        >
          {t('CommonCreateDraw:public_draw_description')}
        </MakePublicDrawPanel>
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
        <RandomNumberConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
        {apiError && <ErrorFeedback error={apiError} />}
        <SubmitFormButton label={t('generate_results')} disabled={loadingRequest} />
      </ValidationProvider>

      <div ref={resultsRef}>
        {loadingRequest && <LoadingCoin />}
        {!loadingRequest && quickResult && <RandomNumberResult result={quickResult} />}
      </div>
    </Page>
  );
};

RandomNumberQuickPage.propTypes = {
  apiError: PropTypes.bool,
  loadingRequest: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rangeMax: PropTypes.string.isRequired,
    rangeMin: PropTypes.string.isRequired,
    numberOfResults: PropTypes.string.isRequired,
    allowRepeated: PropTypes.bool.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  quickResult: PropTypes.shape(),
};

RandomNumberQuickPage.defaultProps = {
  apiError: false,
  quickResult: null,
};

export default RandomNumberQuickPage;

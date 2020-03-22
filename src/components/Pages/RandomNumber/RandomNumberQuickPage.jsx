import React, { Fragment, useRef } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { RandomNumberResult as RandomNumberResultClass } from 'echaloasuerte-js-sdk';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import Page from '../../Page/Page.jsx';
import RandomNumberConfigurationSection from './RandomNumberConfigurationSection.jsx';
import RandomNumberResult from './RandomNumberResult.jsx';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import useScrollToResults from '../../../hooks/useScrollToResults';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel.jsx';
import ShareDrawModal from '../../ShareDrawModal/ShareDrawModal.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import randomNumberOgImage from './random_number_og_image.png';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';

const analyticsDrawType = 'Numbers';

const RandomNumberQuickPage = props => {
  const {
    apiError,
    values,
    quickResult,
    handleToss,
    onFieldChange,
    handleCheckErrorsInConfiguration,
    loadingRequest,
    t,
  } = props;
  const publicDrawUrl = '/groups/public';
  const resultsRef = useRef(null);
  useScrollToResults(quickResult, resultsRef);

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={randomNumberOgImage}
      pageType="Random Number Quick Draw"
      sidePanel={
        <MakeCertifiedDrawPanel
          buttonLabel={t('create_certificated_draw')}
          publicDrawUrl={publicDrawUrl}
          analyticsDrawType={analyticsDrawType}
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
        onFormErrorsCheck={() => handleCheckErrorsInConfiguration(t)}
      >
        <RandomNumberConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
        {apiError && <ErrorFeedback error={t('ApiError:api_error')} />}
        <SubmitFormButton label={t('generate_numbers')} disabled={loadingRequest} />
      </ValidationProvider>

      <div ref={resultsRef}>
        {loadingRequest && <LoadingCoin />}
        {!loadingRequest && quickResult && (
          <>
            <RandomNumberResult result={quickResult} />
            <ShareDrawModal
              publicDrawUrl={publicDrawUrl}
              analyticsDrawType={analyticsDrawType}
              t={t}
            />
          </>
        )}
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
  quickResult: PropTypes.instanceOf(RandomNumberResultClass),
  t: PropTypes.func.isRequired,
};

RandomNumberQuickPage.defaultProps = {
  apiError: false,
  quickResult: null,
};

export default withTranslation('RandomNumber')(RandomNumberQuickPage);

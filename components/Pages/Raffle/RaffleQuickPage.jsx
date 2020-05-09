import React from 'react';
import PropTypes from 'prop-types';
import { RaffleResult } from 'echaloasuerte-js-sdk';
import classnames from 'classnames/bind';
import { withTranslation } from '../../../i18n';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import useScrollToResults from '../../../hooks/useScrollToResults';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel.jsx';
import RaffleConfigurationSection from './RaffleConfigurationSection.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import WinnersList from '../../WinnersList/WinnersList.jsx';
import ShareDrawModal from '../../ShareDrawModal/ShareDrawModal.jsx';
// import LearnMoreSection from '../../LearnMoreSection/LearnMoreSection.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import raffleOgImage from './raffle_og_image.png';
import STYLES from './RaffleQuickPage.module.scss';
import { ANALYTICS_TYPE_RAFFLE } from '../../../constants/analyticsTypes';

const c = classnames.bind(STYLES);

const RafflePage = ({
  values,
  apiError,
  loadingRequest,
  onFieldChange,
  quickResult,
  handleToss,
  handleCheckErrorsInConfiguration,
  t,
}) => {
  const publicDrawUrl = '/raffle/public';
  const resultsRef = React.createRef();

  useScrollToResults(quickResult, resultsRef);

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={raffleOgImage}
      pageType="Raffle Quick"
      sidePanel={
        <MakeCertifiedDrawPanel
          buttonLabel={t('create_certificated_draw')}
          publicDrawUrl={publicDrawUrl}
          analyticsDrawType={ANALYTICS_TYPE_RAFFLE}
        >
          {t('certified_draw_description')}
        </MakeCertifiedDrawPanel>
      }
    >
      <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
      <ValidationProvider
        onSubmit={e => {
          e.preventDefault();
          handleToss();
        }}
        onFormErrorsCheck={() => handleCheckErrorsInConfiguration(t)}
      >
        <RaffleConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
        {apiError && <ErrorFeedback error={t('CommonCreateDraw:api_error')} />}
        <SubmitFormButton label={t('generate_results')} disabled={loadingRequest} />
      </ValidationProvider>
      <div ref={resultsRef} className={c('RaffleQuickPage__quickResults')}>
        {loadingRequest && <LoadingCoin />}
        {!loadingRequest && quickResult && (
          <>
            <WinnersList winners={quickResult.value} />
            <ShareDrawModal
              publicDrawUrl={publicDrawUrl}
              analyticsDrawType={ANALYTICS_TYPE_RAFFLE}
            />
          </>
        )}
      </div>
    </Page>
  );
};

RafflePage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    numberOfGroups: PropTypes.string,
  }).isRequired,
  quickResult: PropTypes.instanceOf(RaffleResult),
  apiError: PropTypes.bool,
  loadingRequest: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

RafflePage.defaultProps = {
  quickResult: null,
  loadingRequest: false,
  apiError: false,
};

export default withTranslation('DrawRaffle')(RafflePage);

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import useTranslation from 'next-translate/useTranslation';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import useScrollToResults from '../../../hooks/useScrollToResults';
import Page from '../../Page/Page.jsx';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import MakePublicDrawPanel from '../../MakePublicDrawPanel/MakePublicDrawPanel.jsx';
import RandomItemConfigurationSection from './RandomItemConfigurationSection.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import RandomItemResult from './RandomItemResult.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import itemOgImage from './random_item_og_image.png';
import STYLES from './RandomItemQuickPage.module.scss';
import { analyticsTypesBySlug } from '../../../constants/analyticsTypes';
import { URL_SLUG_ITEM } from '../../../constants/urlSlugs';

const urlSlug = URL_SLUG_ITEM;
const analyticsType = analyticsTypesBySlug[urlSlug];

const c = classnames.bind(STYLES);

const RandomItemQuickPage = ({
  values,
  apiError,
  loadingRequest,
  onFieldChange,
  quickResult,
  handleToss,
  handleCheckErrorsInConfiguration,
}) => {
  const { t } = useTranslation('DrawItem');
  const publicDrawUrl = `/${urlSlug}/public`;
  const resultsRef = React.createRef();

  useScrollToResults(quickResult, resultsRef);

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={itemOgImage}
      pageType="Random Item Quick"
      sidePanel={
        <MakePublicDrawPanel
          buttonLabel={t('CommonCreateDraw:create_public_draw')}
          publicDrawUrl={publicDrawUrl}
          analyticsDrawType={analyticsType}
        >
          {t('CommonCreateDraw:public_draw_description')}
        </MakePublicDrawPanel>
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
        <RandomItemConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
        {apiError && <ErrorFeedback error={apiError} />}
        <SubmitFormButton label={t('pick_items')} disabled={loadingRequest} />
      </ValidationProvider>
      <div ref={resultsRef} className={c('RandomItemQuickPage__quickResults')}>
        {loadingRequest && <LoadingCoin />}
        {!loadingRequest && quickResult && <RandomItemResult result={quickResult} />}
      </div>
    </Page>
  );
};

RandomItemQuickPage.propTypes = {
  values: PropTypes.shape({}).isRequired,
  quickResult: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.shape()),
  }),
  apiError: PropTypes.bool,
  loadingRequest: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
};

RandomItemQuickPage.defaultProps = {
  quickResult: null,
  loadingRequest: false,
  apiError: false,
};

export default RandomItemQuickPage;

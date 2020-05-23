import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../../i18n';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import SubmitFormButton from '../../SubmitFormButton/SubmitFormButton.jsx';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import ValidationProvider from '../../FormValidation/ValidationProvider.jsx';
import useScrollToResults from '../../../hooks/useScrollToResults';
import Page from '../../Page/Page.jsx';
import GroupsGeneratorConfigurationSection from './GroupsGeneratorConfigurationSection.jsx';
import GroupsGeneratorResult from './GroupsGeneratorResult.jsx';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import groupsOgImage from './groups_og_image.png';

import { ANALYTICS_TYPE_GROUPS } from '../../../constants/analyticsTypes';

const GroupsGeneratorQuickPage = props => {
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
      ogImage={groupsOgImage}
      pageType="Groups Quick Draw"
      sidePanel={
        <MakeCertifiedDrawPanel
          buttonLabel={t('create_certificated_draw')}
          publicDrawUrl={publicDrawUrl}
          analyticsDrawType={ANALYTICS_TYPE_GROUPS}
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
        onFormErrorsCheck={() => handleCheckErrorsInConfiguration()}
      >
        <GroupsGeneratorConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
        {apiError && <ErrorFeedback error={t('CommonCreateDraw:api_error')} />}
        <SubmitFormButton label={t('generate_groups')} disabled={loadingRequest} />
      </ValidationProvider>
      <div ref={resultsRef}>
        {loadingRequest && <LoadingCoin />}
        {!loadingRequest && quickResult && <GroupsGeneratorResult result={quickResult} />}
      </div>
    </Page>
  );
};

GroupsGeneratorQuickPage.propTypes = {
  apiError: PropTypes.bool,
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    numberOfGroups: PropTypes.number,
  }).isRequired,
  loadingRequest: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  quickResult: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())),
  }),
  t: PropTypes.func.isRequired,
};

GroupsGeneratorQuickPage.defaultProps = {
  quickResult: null,
  loadingRequest: false,
  apiError: false,
};

export default withTranslation('DrawGroups')(GroupsGeneratorQuickPage);

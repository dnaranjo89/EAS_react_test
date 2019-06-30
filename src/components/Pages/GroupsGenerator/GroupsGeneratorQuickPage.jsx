import React, { Fragment, useEffect } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { GroupsResult } from 'echaloasuerte-js-sdk';
import DrawHeading from '../../DrawHeading/DrawHeading.jsx';
import SubmitButton from '../../SubmitButton/SubmitButton.jsx';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback.jsx';
import ShareDrawModal from '../../ShareDrawModal/ShareDrawModal.jsx';
import withFormValidation from '../../withValidation/withFormValidation.jsx';
import Page from '../../Page/Page.jsx';
import DrawLayout from '../../DrawLayout/DrawLayout.jsx';
import GroupsGeneratorConfigurationSection from './GroupsGeneratorConfigurationSection.jsx';
import GroupsGeneratorResult from './GroupsGeneratorResult.jsx';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel.jsx';
import LoadingCoin from '../../LoadingCoin/LoadingCoin.jsx';
import groupsOgImage from './groups_og_image.png';

const analyticsDrawType = 'Groups';
const ValidatedForm = withFormValidation(props => <form {...props} />);

const GroupsGeneratorQuickPage = props => {
  const {
    apiError,
    values,
    quickResult,
    handleToss,
    onFieldChange,
    handleCheckErrorsInConfiguration,
    loadingResult,
    t,
  } = props;
  const publicDrawUrl = '/groups/public';
  const resultsRef = React.createRef();

  useEffect(() => {
    if (quickResult) {
      try {
        window.scroll({ left: 0, top: resultsRef.current.offsetTop, behavior: 'smooth' });
      } catch (error) {
        window.scrollTo(0, resultsRef.current.offsetTop);
      }
    }
  }, [quickResult, resultsRef]);

  return (
    <Page
      htmlTitle={t('html_title')}
      htmlDescription={t('html_description')}
      htmlKeywords={t('html_keywords')}
      ogImage={groupsOgImage}
      pageType="groups_quick_draw"
    >
      <DrawLayout
        sidePanel={
          <MakeCertifiedDrawPanel
            buttonLabel={t('create_certificated_draw')}
            publicDrawUrl={publicDrawUrl}
            trackingData={{
              mp: {
                name: `Start Public Draw - ${analyticsDrawType}`,
                properties: { drawType: analyticsDrawType, source: 'From Scratch' },
              },
              ga: { category: analyticsDrawType, action: 'Start Public', label: 'From Scratch' },
            }}
          >
            <span>
              <Trans i18nKey="certified_draw_description">
                Si quieres hacer un sorteo público para asegurar a los participantes una eleccion
                imparcial del resultado, te recomendamos que hagas un sorteo certificado
              </Trans>
            </span>
          </MakeCertifiedDrawPanel>
        }
      >
        <DrawHeading title={t('page_title')} subtitle={t('draw_subheading')} />
        <ValidatedForm
          onSubmit={e => {
            e.preventDefault();
            handleToss();
          }}
          checkErrors={() => handleCheckErrorsInConfiguration(t)}
        >
          <GroupsGeneratorConfigurationSection
            values={values}
            onFieldChange={onFieldChange}
            t={t}
          />
          {apiError && <ErrorFeedback error={t('ApiError:api_error')} />}
          <SubmitButton label={t('generate_groups')} />
        </ValidatedForm>
        <div ref={resultsRef}>
          {loadingResult && <LoadingCoin />}
          {!loadingResult && quickResult && (
            <Fragment>
              <GroupsGeneratorResult result={quickResult} />
              <ShareDrawModal
                publicDrawUrl={publicDrawUrl}
                trackingData={{
                  mp: {
                    name: `Start Public Draw - ${analyticsDrawType}`,
                    properties: { drawType: analyticsDrawType, source: 'From Quick Result' },
                  },
                  ga: {
                    category: analyticsDrawType,
                    action: 'Start Public',
                    label: 'From Quick Result',
                  },
                }}
                t={t}
              />
            </Fragment>
          )}
        </div>
      </DrawLayout>
    </Page>
  );
};

GroupsGeneratorQuickPage.propTypes = {
  apiError: PropTypes.bool,
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    numberOfGroups: PropTypes.string,
  }).isRequired,
  loadingResult: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  quickResult: PropTypes.instanceOf(GroupsResult),
  t: PropTypes.func.isRequired,
};

GroupsGeneratorQuickPage.defaultProps = {
  quickResult: null,
  loadingResult: false,
  apiError: false,
};

export default withTranslation('GroupsGenerator')(GroupsGeneratorQuickPage);

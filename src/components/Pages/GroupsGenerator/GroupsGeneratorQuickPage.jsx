import React, { Fragment } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { GroupsResult } from 'echaloasuerte-js-sdk';
import SubmitButton from '../../SubmitButton/SubmitButton';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback';
import ShareDrawModal from '../../ShareDrawModal/ShareDrawModal';
import withFormValidation from '../../withValidation/withFormValidation';
import Page from '../../Page/Page';
import QuickDrawLayout from '../../QuickDrawLayout/QuickDrawLayout';
import GroupsGeneratorConfigurationSection from './GroupsGeneratorConfigurationSection';
import GroupsGeneratorResult from './GroupsGeneratorResult';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel';

const ValidatedForm = withFormValidation(props => <form {...props} />);

const GroupsGeneratorQuickPage = props => {
  const {
    apiError,
    values,
    quickResult,
    handleToss,
    onFieldChange,
    handleCheckErrorsInConfiguration,
    t,
  } = props;
  return (
    <Page htmlTitle={t('html_title')}>
      <QuickDrawLayout
        sidePanel={
          <MakeCertifiedDrawPanel buttonLabel={t('create_certificated_draw')}>
            Si quieres hacer un sorteo público para asegurar a los participantes una eleccion
            imparcial del resultado, te recomendamos que hagas un sorteo certificado
          </MakeCertifiedDrawPanel>
        }
      >
        <Typography variant="h1" align="center">
          {t('page_title')}
        </Typography>
        <Typography variant="body1" align="center" color={'textSecondary'}>
          {t('draw_subheading')}
        </Typography>
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
        {quickResult && (
          <Fragment>
            <GroupsGeneratorResult result={quickResult} />
            <ShareDrawModal />
          </Fragment>
        )}
      </QuickDrawLayout>
    </Page>
  );
};

GroupsGeneratorQuickPage.propTypes = {
  apiError: PropTypes.bool,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.string).isRequired,
    numberOfGroups: PropTypes.string.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  handleToss: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  quickResult: PropTypes.instanceOf(GroupsResult),
  t: PropTypes.func.isRequired,
};

GroupsGeneratorQuickPage.defaultProps = {
  quickResult: null,
  apiError: false,
};

export default translate('GroupsGenerator')(GroupsGeneratorQuickPage);

import React, { Fragment } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { RandomNumberResult as RandomNumberResultClass } from 'echaloasuerte-js-sdk';
import SubmitButton from '../../SubmitButton/SubmitButton';
import withFormValidation from '../../withValidation/withFormValidation';
import Page from '../../Page/Page';
import QuickDrawLayout from '../../QuickDrawLayout/QuickDrawLayout';
import RandomNumberConfigurationSection from './RandomNumberConfigurationSection';
import RandomNumberResult from './RandomNumberResult';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback';
import MakeCertifiedDrawPanel from '../../MakeCertifiedDrawPanel/MakeCertifiedDrawPanel';
import ShareDrawModal from '../../ShareDrawModal/ShareDrawModal';

const ValidatedForm = withFormValidation(props => <form {...props} />);

const RandomNumberQuickPage = props => {
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
          {t('page_title_quick')}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {t('draw_subheading')}
        </Typography>
        <ValidatedForm
          onSubmit={e => {
            e.preventDefault();
            handleToss();
          }}
          checkErrors={() => handleCheckErrorsInConfiguration(t)}
        >
          <RandomNumberConfigurationSection values={values} onFieldChange={onFieldChange} t={t} />
          {apiError && <ErrorFeedback error={t('ApiError:api_error')} />}
          <SubmitButton label={t('generate_numbers')} />
        </ValidatedForm>

        {quickResult && (
          <Fragment>
            <RandomNumberResult result={quickResult} />
            <ShareDrawModal />
          </Fragment>
        )}
      </QuickDrawLayout>
    </Page>
  );
};

RandomNumberQuickPage.propTypes = {
  apiError: PropTypes.bool,
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

export default translate('RandomNumber')(RandomNumberQuickPage);

import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import withFormValidation from '../../withValidation/withFormValidation';
import GeneralDetailsSection from '../../CommonSections/GeneralDetailsSection';
import WhenToTossSection from '../../CommonSections/WhenToTossSection';
import WizardForm from '../../WizardForm/WizardForm';
import Page from '../../Page/Page';
import RandomNumberConfigurationSection from './RandomNumberConfigurationSection';
import STYLES from './RandomNumberPage.scss';

const c = classNames.bind(STYLES);

const GeneralDetailsForm = withFormValidation(GeneralDetailsSection);
const ConfigurationForm = withFormValidation(RandomNumberConfigurationSection);
const WhenToTossForm = withFormValidation(WhenToTossSection);

const RandomNumberPage = props => {
  const {
    values,
    apiError,
    handleCheckErrorsInConfiguration,
    onFieldChange,
    handlePublish,
    t,
  } = props;
  const steps = [
    {
      label: t('step_label_general_details'),
      render: wizardProps => (
        <GeneralDetailsForm
          sectionTitle={t('step_title_general_details')}
          title={values.title}
          description={values.description}
          onFieldChange={onFieldChange}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_configuration'),
      render: wizardProps => (
        <ConfigurationForm
          values={values}
          onFieldChange={onFieldChange}
          t={t}
          checkErrors={() => handleCheckErrorsInConfiguration(t)}
          {...wizardProps}
        />
      ),
    },
    {
      label: t('step_label_when_to_toss'),
      render: wizardProps => (
        <WhenToTossForm
          sectionTitle={t('step_title_when_to_toss')}
          dateScheduled={values.dateScheduled}
          onFieldChange={onFieldChange}
          t={t}
          {...wizardProps}
        />
      ),
    },
  ];
  return (
    <Page htmlTitle={t('html_title')}>
      <div className={c('RandomNumberPage__container')}>
        <Typography variant="h1">{t('page_title_public')}</Typography>
        <WizardForm
          steps={steps}
          onSubmit={handlePublish}
          submitButtonLabel={t('publish_draw')}
          apiError={apiError}
        />
      </div>
    </Page>
  );
};

RandomNumberPage.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rangeMax: PropTypes.string.isRequired,
    rangeMin: PropTypes.string.isRequired,
    numberOfResults: PropTypes.string.isRequired,
    allowRepeated: PropTypes.bool.isRequired,
  }).isRequired,
  apiError: PropTypes.bool,
  onFieldChange: PropTypes.func.isRequired,
  handlePublish: PropTypes.func.isRequired,
  handleCheckErrorsInConfiguration: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

RandomNumberPage.defaultProps = {
  apiError: false,
};

export default translate('RandomNumber')(RandomNumberPage);

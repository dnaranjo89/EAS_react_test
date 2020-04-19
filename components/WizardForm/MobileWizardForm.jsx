import React from 'react';
import PropTypes from 'prop-types';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import classnames from 'classnames/bind';
import ErrorFeedback from '../ErrorFeedback/ErrorFeedback.jsx';
import LoadingButton from '../LoadingButton/LoadingButton.jsx';
import STYLES from './MobileWizardForm.module.scss';

const c = classnames.bind(STYLES);

const MobileWizardForm = ({
  numSteps,
  submitButtonLabel,
  activeStep,
  loading,
  apiError,
  handleNext,
  handleBack,
  children,
  t,
}) => (
  <>
    <div className={c('MobileWizardForm__content')}>{children}</div>
    {apiError && <ErrorFeedback error={t('ApiError:api_error')} />}
    <MobileStepper
      steps={numSteps}
      position="static"
      activeStep={activeStep}
      className={c('MobileWizardForm__stepper')}
      nextButton={
        <LoadingButton size="small" onClick={handleNext} loading={loading}>
          {activeStep === numSteps - 1 ? submitButtonLabel : t('next')}
          <KeyboardArrowRight />
        </LoadingButton>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={loading || activeStep === 0}>
          <KeyboardArrowLeft />
          {t('back')}
        </Button>
      }
    />
  </>
);

MobileWizardForm.propTypes = {
  numSteps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  apiError: PropTypes.bool,
  loading: PropTypes.bool,
  submitButtonLabel: PropTypes.string.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
};

MobileWizardForm.defaultProps = {
  apiError: false,
  loading: false,
};

export default MobileWizardForm;

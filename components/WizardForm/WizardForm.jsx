import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import DesktopWizardForm from './DesktopWizardForm.jsx';
import MobileWizardForm from './MobileWizardForm.jsx';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: props.initialStep,
      stepValidations: props.steps.map(() => undefined),
      submittedSteps: props.steps.map(() => false),
    };

    this.stepRefs = props.steps.map(() => React.createRef());
  }

  onStepSubmit = e => {
    const { requestedStep } = this.state;
    this.setStep(requestedStep, e);
  };

  onValidationChange = valid => {
    this.setState(previousState => {
      const stepValidations = previousState.stepValidations.slice();
      stepValidations[previousState.activeStep] = valid;
      return {
        stepValidations,
      };
    });
  };

  setStep = (stepIndex, e) => {
    const { steps, onSubmit } = this.props;
    const isLastStep = stepIndex === steps.length;
    if (isLastStep && onSubmit) {
      onSubmit(e);
    } else {
      this.setState({ activeStep: stepIndex, requestedStep: -1 });
    }
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.requestStep(activeStep + 1);
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  requestStep(nextStepIndex) {
    const { steps } = this.props;
    const { activeStep } = this.state;
    const activeStepDefinition = steps[activeStep];
    const shouldValidateActiveStep =
      !('validate' in activeStepDefinition) || activeStepDefinition.validate;
    if (shouldValidateActiveStep) {
      this.setState(
        {
          requestedStep: nextStepIndex,
        },
        () => this.submitStepForm(activeStep),
      );
    } else {
      this.setStep(nextStepIndex);
    }
  }

  submitStepForm(stepIndex) {
    this.stepRefs[stepIndex].current.handleFormSubmit(new Event('submit'));
  }

  render() {
    const { steps, apiError, loading, submitButtonLabel, isMobile, t } = this.props;
    const stepLabels = steps.map(step => step.label);
    const { activeStep, stepValidations, submittedSteps } = this.state;

    const content = steps[activeStep].render({
      ref: this.stepRefs[activeStep],
      onValidationChange: this.onValidationChange,
      onSubmit: this.onStepSubmit,
    });

    const commonWizardProps = {
      activeStep,
      submitButtonLabel,
      apiError,
      loading,
      handleNext: this.handleNext,
      handleBack: this.handleBack,
      t,
    };
    return isMobile ? (
      <MobileWizardForm numSteps={stepLabels.length} {...commonWizardProps}>
        {content}
      </MobileWizardForm>
    ) : (
      <DesktopWizardForm
        stepValidations={stepValidations}
        submittedSteps={submittedSteps}
        stepLabels={stepLabels}
        {...commonWizardProps}
      >
        {content}
      </DesktopWizardForm>
    );
  }
}

WizardForm.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
      validate: PropTypes.bool,
    }),
  ).isRequired,
  loading: PropTypes.bool,
  apiError: PropTypes.bool,
  initialStep: PropTypes.number,
  submitButtonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

WizardForm.defaultProps = {
  initialStep: 0,
  loading: false,
  apiError: false,
};

export default withTranslation('WizardForm')(WizardForm);

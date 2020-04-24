import React, { Component } from 'react';
import PropTypes from 'prop-types';
import values from 'object.values';

export const ValidationContext = React.createContext();

class ValidationProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false, // It's used to bypass changedFields when the form is submitted
      validations: {},
    };
  }

  getFormError = () => {
    const { onFormErrorsCheck } = this.props;
    return onFormErrorsCheck ? onFormErrorsCheck() : null;
  };

  getFormErrorFeedback = () => {
    const { formSubmitted } = this.state;
    return formSubmitted ? this.getFormError() : null;
  };

  registerValidatedField = (name, valid) => {
    this.updateFieldValidationState(name, valid);
  };

  updateFieldValidationState = (name, valid) => {
    this.setState(
      previousState => ({
        validations: {
          ...previousState.validations,
          ...{
            [name]: valid,
          },
        },
      }),
      () => {
        this.triggerValidationChange();
      },
    );
  };

  triggerValidationChange = () => {
    const { onValidationChange } = this.props;
    if (onValidationChange) {
      const isValid = this.isFormValid();
      onValidationChange(isValid);
    }
  };

  isFormValid = () => {
    const { validations } = this.state;
    const validationsValues = values(validations);
    const fieldsValid = validationsValues.every(Boolean);
    const formValid = !this.getFormError();
    return fieldsValid && formValid;
  };

  // eslint-disable-next-line react/destructuring-assignment
  isFormSubmitted = () => this.state.formSubmitted;

  handleFormSubmit = e => {
    const { onSubmit } = this.props;
    this.setState({
      formSubmitted: true,
    });
    if (!this.isFormValid()) {
      e.preventDefault();
    } else {
      onSubmit(e);
    }
  };

  deregisterValidatedField = name => {
    this.setState(
      previousState => {
        const validations = Object.assign({}, previousState.validations);
        delete validations[name];
        return {
          validations,
        };
      },
      () => {
        this.triggerValidationChange();
      },
    );
  };

  render() {
    const context = {
      registerValidatedField: this.registerValidatedField,
      isFormSubmitted: this.isFormSubmitted,
      updateFieldValidationState: this.updateFieldValidationState,
      deregisterValidatedField: this.deregisterValidatedField,
      handleFormSubmit: this.handleFormSubmit,
      getFormErrorFeedback: this.getFormErrorFeedback,
    };
    const { children } = this.props;
    return <ValidationContext.Provider value={context}>{children}</ValidationContext.Provider>;
  }
}

ValidationProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValidationChange: PropTypes.func,
  onFormErrorsCheck: PropTypes.func,
};

ValidationProvider.defaultProps = {
  onValidationChange: null,
  onFormErrorsCheck: null,
};

export default ValidationProvider;

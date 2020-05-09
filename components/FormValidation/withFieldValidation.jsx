import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import { ValidationContext } from './ValidationProvider.jsx';

const withFieldValidation = WrappedComponent => {
  class WithFieldValidation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        changed: false,
        error: undefined,
      };
    }

    componentDidMount() {
      const { registerValidatedField } = this.context;
      const { value, name } = this.props;
      const errors = this.getErrors(value);
      const newState = { error: errors };
      const valid = !errors;
      const isEmpty = (Array.isArray(value) && !value.length) || value === '';
      if (!isEmpty) {
        // If the field is initialised with any value we mark it as 'changed' so it will be validated
        newState.changed = true;
      }

      this.setState(newState); // eslint-disable-line react/no-did-mount-set-state
      registerValidatedField(name, valid);
    }

    componentDidUpdate(prevProps) {
      const { name, value } = this.props;
      const { updateFieldValidationState } = this.context;
      const prevErrors = this.getErrors(prevProps.value);
      const errors = this.getErrors(value);
      if (JSON.stringify(prevErrors) !== JSON.stringify(errors)) {
        this.setState({ changed: true, error: errors }); // eslint-disable-line react/no-did-update-set-state
        updateFieldValidationState(name, !errors);
      }
    }

    componentWillUnmount() {
      const { deregisterValidatedField } = this.context;
      const { name } = this.props;
      deregisterValidatedField(name);
    }

    getDefaultErrorMessage = error => {
      const { t } = this.props;
      switch (error.rule) {
        case 'required':
          return t('default_message_required_field');
        case 'min':
          return t('default_message_min', { min: error.value });
        default:
          return '';
      }
    };

    getErrors = value => {
      const { validators } = this.props;
      return validators.find(validator => {
        switch (validator.rule) {
          case 'required':
            return !String(value).trim();
          case 'min':
            return Number.isNaN(parseFloat(value)) || value < parseInt(validator.value, 10);
          default:
            return true;
        }
      });
    };

    getErrorsToShow = () => {
      const { changed, error } = this.state;
      const { isFormSubmitted } = this.context;
      const shouldShowError = isFormSubmitted() || changed;
      return shouldShowError && error ? error : undefined;
    };

    render() {
      // eslint-disable-next-line react/prop-types
      const { validators, t, tReady, ...rest } = this.props;
      let errorProps = {};
      const error = this.getErrorsToShow();
      if (error) {
        errorProps = {
          error: Boolean(error),
          helperText: error.message || this.getDefaultErrorMessage(error),
          FormHelperTextProps: { 'data-test-has-error': true },
        };
      }
      if (rest.checked !== undefined) {
        // If the prop 'checked' is pass, the field is a checkbox
        // and we aren't showing any feedback in checkboxes
        return <WrappedComponent {...rest} error={undefined} />;
      }
      return <WrappedComponent {...rest} {...errorProps} />;
    }
  }

  WithFieldValidation.propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    name: PropTypes.string.isRequired,
    validators: PropTypes.arrayOf(
      PropTypes.shape({
        rule: PropTypes.string.isRequired,
        value: PropTypes.any,
        message: PropTypes.string,
      }),
    ),
    t: PropTypes.func.isRequired,
  };

  WithFieldValidation.defaultProps = {
    validators: [],
    value: '',
  };

  WithFieldValidation.contextType = ValidationContext;

  return withTranslation('CommonCreateDraw')(WithFieldValidation);
};

export default withFieldValidation;

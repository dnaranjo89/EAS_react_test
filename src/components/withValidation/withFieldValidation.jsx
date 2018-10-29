import React, { Component } from 'react';
import { translate } from 'react-i18next';

import PropTypes from 'prop-types';

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
      const { value, name } = this.props;
      const errors = this.getErrors(value);
      const newState = { error: errors };
      const valid = !errors;
      const isEmptyAtRegister = (Array.isArray(value) && !value.length) || value === '';
      if (!isEmptyAtRegister) {
        newState.changed = true;
      }

      this.setState(newState); // eslint-disable-line react/no-did-mount-set-state
      this.context.registerValidatedField(name, valid);
    }

    componentDidUpdate(prevProps) {
      const prevErrors = this.getErrors(prevProps.value);
      const errors = this.getErrors(this.props.value);
      if (JSON.stringify(prevErrors) !== JSON.stringify(errors)) {
        this.setState({ changed: true, error: errors }); // eslint-disable-line react/no-did-update-set-state
        this.context.updateFieldValidationState(this.props.name, !errors);
      }
    }

    componentWillUnmount() {
      this.context.deregisterValidatedField(this.props.name);
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
            return isNaN(value) || value < parseInt(validator.value, 10);
          default:
            return true;
        }
      });
    };

    getErrorsToShow = () => {
      const { changed, error } = this.state;
      const shouldShowError = this.context.isFormSubmitted() || changed;
      return shouldShowError && error ? error : undefined;
    };

    render() {
      const { validators, t, tReady, ...props } = this.props; // eslint-disable-line react/prop-types
      const error = this.getErrorsToShow();
      let message;
      if (error) {
        message = error.message || this.getDefaultErrorMessage(error);
      }
      return (
        <WrappedComponent
          {...props}
          FormHelperTextProps={error && { 'data-has-error': true }}
          error={Boolean(error)}
          helperText={message}
        />
      );
    }
  }

  WithFieldValidation.propTypes = {
    onChange: PropTypes.func,
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
    onChange: null,
    validators: [],
    value: '',
  };

  WithFieldValidation.contextTypes = {
    registerValidatedField: PropTypes.func.isRequired,
    deregisterValidatedField: PropTypes.func.isRequired,
    updateFieldValidationState: PropTypes.func.isRequired,
    isFormSubmitted: PropTypes.func.isRequired,
  };

  return translate('WithFieldValidation')(WithFieldValidation);
};

export default withFieldValidation;

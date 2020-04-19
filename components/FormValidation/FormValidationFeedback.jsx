import React, { useContext } from 'react';
import ErrorFeedback from '../ErrorFeedback/ErrorFeedback.jsx';
import { ValidationContext } from './ValidationProvider.jsx';

const FormValidationFeedback = () => {
  const { getFormErrorFeedback } = useContext(ValidationContext);
  const errorMessage = getFormErrorFeedback();
  return errorMessage ? <ErrorFeedback error={errorMessage} /> : null;
};

FormValidationFeedback.propTypes = {};

export default FormValidationFeedback;

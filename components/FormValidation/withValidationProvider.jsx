import React from 'react';
import PropTypes from 'prop-types';

import ValidationProvider from './ValidationProvider.jsx';

const withValidationProvider = WrappedComponent => {
  const WithValidationProvider = React.forwardRef(
    ({ onFormErrorsCheck, onSubmit, onValidationChange, ...rest }, ref) => (
      <ValidationProvider
        onFormErrorsCheck={onFormErrorsCheck}
        onSubmit={onSubmit}
        ref={ref}
        onValidationChange={onValidationChange}
      >
        <WrappedComponent {...rest} />
      </ValidationProvider>
    ),
  );

  WithValidationProvider.propTypes = {
    onFormErrorsCheck: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    onValidationChange: PropTypes.func,
  };

  WithValidationProvider.defaultProps = {
    onFormErrorsCheck: null,
    onValidationChange: null,
  };

  return WithValidationProvider;
};

export default withValidationProvider;

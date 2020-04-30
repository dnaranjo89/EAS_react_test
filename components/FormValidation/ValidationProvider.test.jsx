import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import withFieldValidation from './withFieldValidation.jsx';
import TextField from '../TextField.jsx';
import ValidationProvider from './ValidationProvider.jsx';
import FormValidationFeedback from './FormValidationFeedback.jsx';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton.jsx';

jest.mock('@material-ui/core/Input', () => {
  const ActualInput = jest.requireActual('@material-ui/core/Input');
  return props => (
    <div data-testid="Input">
      <ActualInput.default {...props} inputProps={{ 'data-testid': 'Input__input-field' }} />
    </div>
  );
});

jest.mock('react-i18next', () => ({
  withTranslation: () => Component => {
    // eslint-disable-next-line no-param-reassign
    Component.defaultProps = { ...Component.defaultProps, t: key => key };
    return Component;
  },
}));

const ValidatedTextField = withFieldValidation(TextField);
const mockOnSubmit = jest.fn();

const renderFormWithRequiredField = value => {
  const component = render(
    <ValidationProvider onSubmit={mockOnSubmit}>
      <ValidatedTextField name="field1" value="initial value" validators={[{ rule: 'required' }]} />
    </ValidationProvider>,
  );

  // Change the props as 'required' errors will only be shown once the user interacts with the field
  component.rerender(
    <ValidationProvider onSubmit={mockOnSubmit}>
      <ValidatedTextField name="field1" value={value} validators={[{ rule: 'required' }]} />
    </ValidationProvider>,
  );
  return component;
};

describe('ValidationProvider', () => {
  beforeEach(() => {
    mockOnSubmit.mockClear();
  });
  describe('Required fields', () => {
    it('should not show when they do not have initial value', () => {
      const { queryByText } = render(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value="" validators={[{ rule: 'required' }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      expect(queryByText('default_message_required_field')).toBeFalsy();
    });

    it('should invalidate the form if they do not have value', () => {
      const { getByText, getByTestId } = render(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value="" validators={[{ rule: 'required' }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      fireEvent.click(getByTestId('SubmitFormButton'));
      expect(mockOnSubmit).not.toHaveBeenCalled();
      expect(getByText('default_message_required_field')).toBeTruthy();
    });

    it('should show an error when its value is modified to be empty', () => {
      const { getByText, rerender } = render(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value="something" validators={[{ rule: 'required' }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      rerender(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value="" validators={[{ rule: 'required' }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      expect(getByText('default_message_required_field')).toBeTruthy();
    });

    it('Non-empty strings are valid', () => {
      const { queryByText } = renderFormWithRequiredField('something');
      expect(queryByText('default_message_required_field')).toBeFalsy();
    });

    it('Empty strings are invalid', () => {
      const { queryByText } = renderFormWithRequiredField('');
      expect(queryByText('default_message_required_field')).toBeTruthy();
    });

    it('Non-empty strings are valid', () => {
      const { queryByText } = renderFormWithRequiredField(['one']);
      expect(queryByText('default_message_required_field')).toBeFalsy();
    });

    it('Empty strings are invalid', () => {
      const { queryByText } = renderFormWithRequiredField([]);
      expect(queryByText('default_message_required_field')).toBeTruthy();
    });
  });

  describe('Minimum value fields', () => {
    it('should show an error when the value is smaller than the min validation rule', () => {
      const { getByText, getByTestId } = render(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value={0} validators={[{ rule: 'min', value: 2 }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      expect(getByText('default_message_min')).toBeTruthy();
      fireEvent.click(getByTestId('SubmitFormButton'));
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('should not show an error when the value is greater than the min validation rule', () => {
      const { queryByText, getByTestId } = render(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value={3} validators={[{ rule: 'min', value: 2 }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      expect(queryByText('default_message_min')).toBeFalsy();
      fireEvent.click(getByTestId('SubmitFormButton'));
      expect(mockOnSubmit).toHaveBeenCalled();
    });

    it('should not show an error when the value is equal to the min validation rule', () => {
      const { queryByText, getByTestId } = render(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value={2} validators={[{ rule: 'min', value: 2 }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      expect(queryByText('default_message_min')).toBeFalsy();
      fireEvent.click(getByTestId('SubmitFormButton'));
      expect(mockOnSubmit).toHaveBeenCalled();
    });

    it('Non numbers are not valid', () => {
      const { getByText, getByTestId } = render(
        <ValidationProvider onSubmit={mockOnSubmit}>
          <ValidatedTextField name="field1" value="boh" validators={[{ rule: 'min', value: 2 }]} />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      expect(getByText('default_message_min')).toBeTruthy();
      fireEvent.click(getByTestId('SubmitFormButton'));
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  describe('Form errors', () => {
    it('should not show errors until the form is not sent', () => {
      const { queryByTestId, getByTestId, getByText } = render(
        <ValidationProvider
          onSubmit={mockOnSubmit}
          onFormErrorsCheck={() => 'Everything is wrong!'}
        >
          <FormValidationFeedback />
          <SubmitFormButton label="Toss" />
        </ValidationProvider>,
      );
      expect(queryByTestId('ErrorFeedback')).toBeFalsy();

      // Submit the form
      fireEvent.click(getByTestId('SubmitFormButton'));
      expect(getByTestId('ErrorFeedback')).toBeTruthy();
      expect(getByText('Everything is wrong!')).toBeTruthy();
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });
});

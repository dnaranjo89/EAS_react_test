import React from 'react';
import PropTypes from 'prop-types';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import MultiValueInput from '../../MultiValueInput/MultiValueInput.jsx';
import FormValidationFeedback from '../../FormValidation/FormValidationFeedback.jsx';
import TextField from '../../TextField.jsx';
import { withTranslation } from '../../../i18n';

const ValidatedMultiValueInput = withFieldValidation(MultiValueInput);
const ValidatedTextField = withFieldValidation(TextField);

const RandomItemConfigurationSection = ({ values, onFieldChange, t }) => (
  <SectionPanel>
    <ValidatedMultiValueInput
      name="items"
      value={values.items}
      onChange={e => onFieldChange('items', e.target.value)}
      label={t('field_label_items')}
      placeholder={t('field_placeholder_items')}
      messageEmpty={t('message_no_items_added')}
      helperText={t('field_help_separate_items_commas')}
      fullWidth
      data-testid="ItemsInput"
      inputProps={{ 'data-testid': 'ItemsInput__inputField' }}
      validators={[{ rule: 'required' }]}
    />
    <ValidatedTextField
      name="numberOfItems"
      label={t('field_label_number_of_items')}
      placeholder="1"
      onChange={e => onFieldChange('numberOfItems', e.target.value)}
      value={values.numberOfItems}
      margin="normal"
      type="number"
      data-testid="RandomItem__number-of-items-field"
      validators={[
        { rule: 'required', value: true },
        { rule: 'min', value: 1, message: t('error_field_message_min_items', { min: 1 }) },
      ]}
    />
    <FormValidationFeedback />
  </SectionPanel>
);

RandomItemConfigurationSection.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    numberOfItems: PropTypes.string.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('DrawItem')(RandomItemConfigurationSection);

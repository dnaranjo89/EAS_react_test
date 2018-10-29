import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import SectionPanel from '../../SectionPanel/SectionPanel';
import withFieldValidation from '../../withValidation/withFieldValidation';
import MultiValueInput from '../../MultiValueInput/MultiValueInput';
import withFeedbackValidation from '../../withValidation/withFeedbackValidation';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback';

const ValidatedTextField = withFieldValidation(TextField);
const ValidatedMultiValueInput = withFieldValidation(MultiValueInput);
const ValidationFeedback = withFeedbackValidation(ErrorFeedback);

const GroupsGeneratorConfigurationSection = ({ values, onFieldChange, t }) => (
  <SectionPanel title={t('step_title_draw_configuration')}>
    <ValidatedMultiValueInput
      name="participants"
      label={t('field_label_participants')}
      labelDisplayList={t('field_label_list_of_participants')}
      placeholder="David, Ana..."
      messageEmpty={t('message_no_participants_added')}
      value={values.participants}
      fullWidth
      onChange={e => onFieldChange('participants', e.target.value)}
      validators={[{ rule: 'required' }]}
      data-component="GroupsGenerator__participants-field"
      inputProps={{ 'data-component': 'GroupsGenerator__participants-field-input' }}
    />
    <ValidatedTextField
      name="numberOfGroups"
      label={t('field_label_number_of_groups')}
      placeholder="2"
      onChange={e => onFieldChange('numberOfGroups', e.target.value)}
      value={values.numberOfGroups}
      type="number"
      margin="normal"
      validators={[{ rule: 'required' }, { rule: 'min', value: 2 }]}
      data-component="GroupsGenerator__number-of-groups-field"
      inputProps={{ 'data-component': 'GroupsGenerator__number-of-groups-field-input' }}
    />
    <ValidationFeedback />
  </SectionPanel>
);

GroupsGeneratorConfigurationSection.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    participants: PropTypes.arrayOf(PropTypes.string).isRequired,
    numberOfGroups: PropTypes.number.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('GroupsGenerator')(GroupsGeneratorConfigurationSection);

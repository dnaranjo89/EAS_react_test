import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import ParticipantsInput from '../../ParticipantsInput.jsx';
import TextField from '../../TextField.jsx';
import FormValidationFeedback from '../../FormValidation/FormValidationFeedback.jsx';

const ValidatedTextField = withFieldValidation(TextField);
const ValidatedParticipantsInput = withFieldValidation(ParticipantsInput);

const GroupsGeneratorConfigurationSection = ({ values, onFieldChange }) => {
  const { t } = useTranslation('DrawGroups');
  return (
    <SectionPanel>
      <ValidatedParticipantsInput
        name="participants"
        value={values.participants}
        onChange={e => onFieldChange('participants', e.target.value)}
        validators={[{ rule: 'required' }]}
      />
      <ValidatedTextField
        id="numberOfGroups"
        name="numberOfGroups"
        label={t('field_label_number_of_groups')}
        placeholder="2"
        onChange={e => onFieldChange('numberOfGroups', e.target.value)}
        value={values.numberOfGroups}
        type="number"
        margin="normal"
        validators={[{ rule: 'required' }, { rule: 'min', value: 2 }]}
        data-testid="GroupsGenerator__number-of-groups-field"
        inputProps={{ 'data-testid': 'GroupsGenerator__number-of-groups-field-input' }}
      />
      <FormValidationFeedback />
    </SectionPanel>
  );
};

GroupsGeneratorConfigurationSection.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    numberOfGroups: PropTypes.string,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default GroupsGeneratorConfigurationSection;

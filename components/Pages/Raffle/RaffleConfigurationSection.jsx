import React from 'react';
import PropTypes from 'prop-types';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import ParticipantsInput from '../../ParticipantsInput.jsx';
import PrizesInput from '../../PrizesInput.jsx';
import FormValidationFeedback from '../../FormValidation/FormValidationFeedback.jsx';

const ValidatedParticipantsInput = withFieldValidation(ParticipantsInput);
const ValidatedPrizesInput = withFieldValidation(PrizesInput);

const RaffleConfigurationSection = ({ values, onFieldChange }) => (
  <SectionPanel>
    <ValidatedParticipantsInput
      name="participants"
      value={values.participants}
      onChange={e => onFieldChange('participants', e.target.value)}
      validators={[{ rule: 'required' }]}
    />
    <ValidatedPrizesInput
      name="prizes"
      value={values.prizes}
      onChange={e => onFieldChange('prizes', e.target.value)}
      validators={[{ rule: 'required' }]}
    />
    <FormValidationFeedback />
  </SectionPanel>
);

RaffleConfigurationSection.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string),
    prizes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default RaffleConfigurationSection;

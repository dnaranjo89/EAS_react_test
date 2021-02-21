import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import ParticipantWithEmail from './ParticipantWithEmail.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import ParticipantsList, { LIST_TYPES } from './ParticipantsList.jsx';

const MIN_PARTICIPANTS = 3;

const ParticipantsListWithValidation = withFieldValidation(ParticipantsList);

const ParticipantsWithEmailSection = ({ participants, onParticipantsChange }) => {
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const { t } = useTranslation('DrawSecretSanta');
  const handleAddParticipant = participant => {
    // Clear validation
    setNameError(null);
    setEmailError(null);

    // Name validation
    if (!participant.name) {
      setNameError(t('error_field_required'));
      return false;
    }
    if (participants.find(currentParticipant => currentParticipant.name === participant.name)) {
      setNameError(t('error_name_already_registered'));
      return false;
    }

    // Email validation
    if (!participant.email) {
      setEmailError(t('error_field_required'));
      return false;
    }
    if (participants.find(currentParticipant => currentParticipant.email === participant.email)) {
      setEmailError(t('error_email_already_registered'));
      return false;
    }

    onParticipantsChange([...participants, participant]);
    return true;
  };

  const handleRemoveParticipant = name => {
    const newParticipants = participants
      // First remove the participant from the list
      .filter(p => p.name !== name)
      // Then remove the participant from any exclusion
      .map(participant => ({
        ...participant,
        exclusions: participant.exclusions.filter(exclusion => exclusion !== name),
      }));
    onParticipantsChange(newParticipants);
  };

  return (
    <>
      <ParticipantWithEmail
        onAddParticipant={handleAddParticipant}
        nameError={nameError}
        emailError={emailError}
      />
      <ParticipantsListWithValidation
        name="participants"
        validators={[
          {
            rule: 'arrayMinSize',
            value: MIN_PARTICIPANTS,
            message: t('error_no_enough_participants', { min: MIN_PARTICIPANTS }),
          },
        ]}
        value={participants}
        onRemove={handleRemoveParticipant}
        type={LIST_TYPES.EMAILS}
        data-testid="ParticipantsInput"
      />
    </>
  );
};

ParticipantsWithEmailSection.propTypes = {
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onParticipantsChange: PropTypes.func.isRequired,
};

export default ParticipantsWithEmailSection;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import ParticipantWithEmail from './ParticipantWithEmail.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import BoxWithBorder from '../../BoxWithBorder/BoxWithBorder.jsx';

const MIN_PARTICIPANTS = 2;

const ParticipantsList = ({ value, error, helperText }) => {
  const { t } = useTranslation('DrawSecretSanta');
  return (
    <BoxWithBorder error={error}>
      {value.length === 0 && t('label_no_participants')}
      <ul>
        {value.map(participant => (
          <li>
            {participant.name}({participant.email})
          </li>
        ))}
      </ul>
      {helperText}
    </BoxWithBorder>
  );
};

const ParticipantsListWithValidation = withFieldValidation(ParticipantsList);

const ParticipantsWithEmailSection = ({ participants, onFieldChange }) => {
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const { t } = useTranslation('DrawSecretSanta');
  const onAddParticipant = participant => {
    // Name validation
    if (!participant.name) {
      setNameError(t('error_name_is_required'));
      return false;
    }

    // Email validation
    if (!participant.email) {
      setEmailError(t('error_email_is_required'));
      return false;
    }
    if (participants.find(currentParticipant => currentParticipant.email === participant.email)) {
      setEmailError(t('error_email_already_registered'));
      return false;
    }

    onFieldChange('participants', [...participants, participant]);
    setNameError(null);
    setEmailError(null);
    return true;
  };

  return (
    <>
      <ParticipantWithEmail
        onAddParticipant={onAddParticipant}
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
  onFieldChange: PropTypes.func.isRequired,
};

export default ParticipantsWithEmailSection;

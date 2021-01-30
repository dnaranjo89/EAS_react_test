import React from 'react';
import PropTypes from 'prop-types';
import ParticipantWithEmail from './ParticipantWithEmail.jsx';

const ParticipantsWithEmailSection = ({ participants, onFieldChange }) => {
  const onAddParticipant = participant =>
    onFieldChange('participants', [...participants, participant]);

  return (
    <>
      <ParticipantWithEmail onAddParticipant={onAddParticipant} />
      <div>
        <ul>
          {participants.map(participant => (
            <li>
              {participant.name}({participant.email})
            </li>
          ))}
        </ul>
      </div>
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

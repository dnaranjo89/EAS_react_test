import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import MuiButton from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import classnames from 'classnames/bind';
import TextField from '../../TextField.jsx';
import STYLES from './ParticipantWithEmail.module.scss';

const c = classnames.bind(STYLES);

const ParticipantWithEmail = ({ onAddParticipant, nameError, emailError }) => {
  const { t } = useTranslation('DrawSecretSanta');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddParticipant = () => {
    const success = onAddParticipant({ name, email, exclusions: [] });
    if (success) {
      setName('');
      setEmail('');
    }
  };

  return (
    <>
      <div className={STYLES.container}>
        <TextField
          name="participantName"
          label={t('field_label_name')}
          placeholder=""
          onChange={e => setName(e.target.value)}
          value={name}
          // type="number"
          margin="normal"
          useCustomLabel={false}
          className={STYLES.input}
          error={!!nameError}
          helperText={nameError}

          // fullWidth
          // validators={[{ rule: 'required' }]}
          // data-testid="RandomNumber__from-field"
          // inputProps={{ 'data-testid': 'RandomNumber__from-field-input' }}
        />
        <TextField
          name="participantEmail"
          label={t('field_label_email')}
          placeholder=""
          onChange={e => setEmail(e.target.value)}
          value={email}
          // type="number"
          margin="normal"
          useCustomLabel={false}
          className={STYLES.input}
          error={!!emailError}
          helperText={emailError}
          // fullWidth
          // validators={[{ rule: 'required' }]}
          // data-testid="RandomNumber__from-field"
          // inputProps={{ 'data-testid': 'RandomNumber__from-field-input' }}
        />

        <MuiButton
          className={c(STYLES.button)}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddParticipant}
        >
          {t('add_participant')}
        </MuiButton>
      </div>
    </>
  );
};

ParticipantWithEmail.propTypes = {
  onAddParticipant: PropTypes.func.isRequired,
  nameError: PropTypes.string,
  emailError: PropTypes.string,
};

ParticipantWithEmail.defaultProps = {
  nameError: null,
  emailError: null,
};

export default ParticipantWithEmail;

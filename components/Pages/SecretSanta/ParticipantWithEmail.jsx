import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import MuiButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import classnames from 'classnames/bind';
import TextField from '../../TextField.jsx';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';

import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import STYLES from './ParticipantWithEmail.module.scss';

const c = classnames.bind(STYLES);

const ValidatedTextField = withFieldValidation(TextField);

const ParticipantWithEmail = ({ onAddParticipant, nameError, emailError }) => {
  const { t } = useTranslation('DrawSecretSanta');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddParticipant = () => {
    const success = onAddParticipant({ name, email });
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
          className={STYLES.item}
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
          className={STYLES.item}
          error={!!emailError}
          helperText={emailError}
          // fullWidth
          // validators={[{ rule: 'required' }]}
          // data-testid="RandomNumber__from-field"
          // inputProps={{ 'data-testid': 'RandomNumber__from-field-input' }}
        />

        <MuiButton
          className={STYLES.item}
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

ParticipantWithEmail.propTypes = {};

export default ParticipantWithEmail;

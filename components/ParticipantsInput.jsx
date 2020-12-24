import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import MultiValueInput from './MultiValueInput/MultiValueInput.jsx';

const ParticipantsInput = props => {
  const { t } = useTranslation('ParticipantsInput');
  return (
    <MultiValueInput
      label={t('field_label')}
      placeholder={t('field_placeholder')}
      messageEmpty={t('message_no_participants_added')}
      helperText={t('field_help_separate_participants_commas')}
      fullWidth
      data-testid="ParticipantsInput"
      inputProps={{ 'data-testid': 'ParticipantsInput__inputField' }}
      {...props}
    />
  );
};

ParticipantsInput.propTypes = {};

export default ParticipantsInput;

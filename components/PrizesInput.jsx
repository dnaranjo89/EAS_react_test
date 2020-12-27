import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import MultiValueInput from './MultiValueInput/MultiValueInput.jsx';

const PrizesInput = props => {
  const { t } = useTranslation('PrizesInput');
  return (
    <MultiValueInput
      label={t('field_label')}
      placeholder={t('field_placeholder')}
      messageEmpty={t('message_no_values_added')}
      helperText={t('field_help_separate_values_commas')}
      fullWidth
      data-testid="PrizesInput"
      inputProps={{ 'data-testid': 'PrizesInput__inputField' }}
      {...props}
    />
  );
};

PrizesInput.propTypes = {};

export default PrizesInput;

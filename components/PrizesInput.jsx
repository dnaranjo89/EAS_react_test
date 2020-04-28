import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';
import MultiValueInput from './MultiValueInput/MultiValueInput.jsx';

const PrizesInput = ({ t, ...other }) => {
  const { tReady, i18n, ...rest } = other;
  return (
    <MultiValueInput
      label={t('field_label')}
      placeholder={t('field_placeholder')}
      messageEmpty={t('message_no_values_added')}
      helperText={t('field_help_separate_values_commas')}
      fullWidth
      data-testid="PrizesInput"
      inputProps={{ 'data-testid': 'PrizesInput__inputField' }}
      {...rest}
    />
  );
};

PrizesInput.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('PrizesInput')(PrizesInput);

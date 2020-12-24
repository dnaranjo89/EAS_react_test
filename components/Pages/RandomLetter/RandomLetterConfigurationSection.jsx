import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import useTranslation from 'next-translate/useTranslation';
import TextField from '../../TextField.jsx';

import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import FormValidationFeedback from '../../FormValidation/FormValidationFeedback.jsx';

const ValidatedTextField = withFieldValidation(TextField);
const ValidatedCheckbox = withFieldValidation(Checkbox);

const RandomLetterConfigurationSection = ({ values, onFieldChange }) => {
  const { t } = useTranslation('DrawLetter');
  return (
    <SectionPanel>
      <ValidatedTextField
        name="numberOfResults"
        label={t('field_label_number_of_results')}
        placeholder="1"
        onChange={e => onFieldChange('numberOfResults', e.target.value)}
        value={values.numberOfResults}
        margin="normal"
        type="number"
        validators={[
          { rule: 'required', value: true },
          { rule: 'min', value: 1, message: t('error_field_message_min_results', { min: 1 }) },
        ]}
        data-testid="RandomLetter__number-of-results-field"
        inputProps={{ 'data-testid': 'RandomLetter__number-of-results-field-input' }}
      />
      {values.numberOfResults > 1 && (
        <FormGroup row>
          <FormControlLabel
            control={
              <ValidatedCheckbox
                error
                color="primary"
                name="allowRepeated"
                checked={values.allowRepeated}
                onChange={e => onFieldChange('allowRepeated', e.target.checked)}
                inputProps={{ 'data-testid': 'RandomNumber__allow-repeated-field-input' }}
              />
            }
            label={t('field_label_allow_repeated')}
          />
        </FormGroup>
      )}
      <FormValidationFeedback />
    </SectionPanel>
  );
};

RandomLetterConfigurationSection.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    numberOfResults: PropTypes.string.isRequired,
    allowRepeated: PropTypes.bool.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default RandomLetterConfigurationSection;

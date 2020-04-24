import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { withTranslation } from '../../i18n';
import TextField from '../../TextField/TextField.jsx';

import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import FormValidationFeedback from '../../FormValidation/FormValidationFeedback.jsx';

const ValidatedTextField = withFieldValidation(TextField);
const ValidatedCheckbox = withFieldValidation(Checkbox);

const RandomNumberConfigurationSection = ({ values, onFieldChange, t }) => (
  <SectionPanel>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <ValidatedTextField
          name="rangeMin"
          label={t('field_label_from')}
          placeholder="1"
          onChange={e => onFieldChange('rangeMin', e.target.value)}
          value={values.rangeMin}
          type="number"
          margin="normal"
          fullWidth
          validators={[{ rule: 'required' }]}
          data-testid="RandomNumber__from-field"
          inputProps={{ 'data-testid': 'RandomNumber__from-field-input' }}
        />
      </Grid>
      <Grid item xs={6}>
        <ValidatedTextField
          name="rangeMax"
          label={t('field_label_to')}
          placeholder="9"
          onChange={e => onFieldChange('rangeMax', e.target.value)}
          value={values.rangeMax}
          margin="normal"
          fullWidth
          type="number"
          validators={[{ rule: 'required' }]}
          data-testid="RandomNumber__to-field"
          inputProps={{ 'data-testid': 'RandomNumber__to-field-input' }}
        />
      </Grid>
    </Grid>
    <div>
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
        data-testid="RandomNumber__number-of-results-field"
        inputProps={{ 'data-testid': 'RandomNumber__number-of-results-field-input' }}
      />
      {values.numberOfResults > 1 && (
        <FormGroup row>
          <FormControlLabel
            control={
              <ValidatedCheckbox
                error
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
    </div>
    <FormValidationFeedback />
  </SectionPanel>
);

RandomNumberConfigurationSection.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rangeMax: PropTypes.string.isRequired,
    rangeMin: PropTypes.string.isRequired,
    numberOfResults: PropTypes.string.isRequired,
    allowRepeated: PropTypes.bool.isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('RandomNumber')(RandomNumberConfigurationSection);

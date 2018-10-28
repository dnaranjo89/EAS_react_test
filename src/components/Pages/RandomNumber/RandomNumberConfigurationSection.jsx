import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

import SectionPanel from '../../SectionPanel/SectionPanel';
import withFieldValidation from '../../withValidation/withFieldValidation';
import withFeedbackValidation from '../../withValidation/withFeedbackValidation';
import ErrorFeedback from '../../ErrorFeedback/ErrorFeedback';

const ValidatedTextField = withFieldValidation(TextField);
const ValidatedCheckbox = withFieldValidation(Checkbox);
const ValidationFeedback = withFeedbackValidation(ErrorFeedback);

const RandomNumberConfigurationSection = ({ values, onFieldChange, t }) => (
  <SectionPanel title={t('step_title_draw_configuration')}>
    <Grid container spacing={16}>
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
          data-component="RandomNumber__from-field"
          inputProps={{ 'data-component': 'RandomNumber__from-field-input' }}
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
          data-component="RandomNumber__to-field"
          inputProps={{ 'data-component': 'RandomNumber__to-field-input' }}
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
        data-component="RandomNumber__number-of-results-field"
        inputProps={{ 'data-component': 'RandomNumber__number-of-results-field-input' }}
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
                inputProps={{ 'data-component': 'RandomNumber__allow-repeated-field-input' }}
              />
            }
            label={t('field_label_allow_repeated')}
          />
        </FormGroup>
      )}
    </div>
    <ValidationFeedback />
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

export default translate('RandomNumber')(RandomNumberConfigurationSection);

import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
import TextField from '../TextField.jsx';
import withFieldValidation from '../FormValidation/withFieldValidation.jsx';
import SectionPanel from '../SectionPanel/SectionPanel.jsx';

const ValidatedTextField = withFieldValidation(TextField);

const GeneralDetailsSection = ({ title, titleRequired, description, onFieldChange, t }) => (
  <SectionPanel>
    <ValidatedTextField
      name="title"
      label={t('public_details_title_label')}
      placeholder={t('public_details_title_placeholder')}
      value={title}
      margin="normal"
      fullWidth
      required={titleRequired}
      validators={titleRequired ? [{ rule: 'required' }] : []}
      onChange={e => onFieldChange('title', e.target.value)}
      data-testid="PublicDetails__title-field"
      inputProps={{ 'data-testid': 'PublicDetails__title-field-input' }}
    />

    <ValidatedTextField
      name="description"
      label={t('public_details_description_label')}
      placeholder={t('public_details_description_placeholder')}
      value={description}
      fullWidth
      multiline
      rows="4"
      margin="normal"
      onChange={e => onFieldChange('description', e.target.value)}
      data-testid="PublicDetails__description-field"
      inputProps={{ 'data-testid': 'PublicDetails__description-field-input' }}
    />
  </SectionPanel>
);
GeneralDetailsSection.propTypes = {
  title: PropTypes.string,
  titleRequired: PropTypes.bool,
  description: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

GeneralDetailsSection.defaultProps = {
  title: '',
  description: '',
  titleRequired: false,
};

export default withTranslation('CommonCreateDraw')(GeneralDetailsSection);

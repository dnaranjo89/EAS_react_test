import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import SectionPanel from '../../SectionPanel/SectionPanel.jsx';
import withFieldValidation from '../../FormValidation/withFieldValidation.jsx';
import MultiValueInput from '../../MultiValueInput/MultiValueInput.jsx';
import FormValidationFeedback from '../../FormValidation/FormValidationFeedback.jsx';

const ValidatedMultiValueInput = withFieldValidation(MultiValueInput);

const LinkSetsConfigurationSection = ({ values, onFieldChange }) => {
  const { t } = useTranslation('DrawLinkSets');
  return (
    <SectionPanel>
      <ValidatedMultiValueInput
        name="set1"
        value={values.set1}
        onChange={e => onFieldChange('set1', e.target.value)}
        label={t('field_label_set1')}
        placeholder={t('field_placeholder_items')}
        messageEmpty={t('message_no_items_added')}
        helperText={t('field_help_separate_items_commas')}
        fullWidth
        data-testid="LinkSet1Input"
        inputProps={{ 'data-testid': 'LinkSet1Input__inputField' }}
        validators={[{ rule: 'required' }]}
      />
      <ValidatedMultiValueInput
        name="set2"
        value={values.set2}
        onChange={e => onFieldChange('set2', e.target.value)}
        label={t('field_label_set2')}
        placeholder={t('field_placeholder_items')}
        messageEmpty={t('message_no_items_added')}
        helperText={t('field_help_separate_items_commas')}
        fullWidth
        data-testid="LinkSet2Input"
        inputProps={{ 'data-testid': 'LinkSet2Input__inputField' }}
        validators={[{ rule: 'required' }]}
      />
      <FormValidationFeedback />
    </SectionPanel>
  );
};

LinkSetsConfigurationSection.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    set1: PropTypes.arrayOf(PropTypes.string),
    set2: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
};

export default LinkSetsConfigurationSection;

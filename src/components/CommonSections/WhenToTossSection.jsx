import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '../DateTimePicker/DateTimePicker.jsx';
import SectionPanel from '../SectionPanel/SectionPanel.jsx';

const WhenToTossSection = ({ label, dateScheduled, onFieldChange }) => (
  <SectionPanel>
    <DateTimePicker
      id="whenToToss"
      label={label}
      value={dateScheduled}
      onChange={datetime => {
        onFieldChange('dateScheduled', datetime.toDate());
      }}
      autoOk
      disablePast
      showTodayButton
    />
  </SectionPanel>
);
WhenToTossSection.propTypes = {
  label: PropTypes.string.isRequired,
  dateScheduled: PropTypes.instanceOf(Date),
  onFieldChange: PropTypes.func.isRequired,
};

WhenToTossSection.defaultProps = {
  dateScheduled: null,
};

export default WhenToTossSection;

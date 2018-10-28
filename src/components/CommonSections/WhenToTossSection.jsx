import React from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import SectionPanel from '../SectionPanel/SectionPanel';

const WhenToTossSection = ({ sectionTitle, dateScheduled, onFieldChange }) => (
  <SectionPanel title={sectionTitle}>
    <DateTimePicker
      value={dateScheduled}
      onChange={datetime => {
        onFieldChange('dateScheduled', datetime);
      }}
      autoOk
      // ampm={false}
      disablePast
      showTodayButton
    />
  </SectionPanel>
);
WhenToTossSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  dateScheduled: PropTypes.instanceOf(Date),
  onFieldChange: PropTypes.func.isRequired,
};

WhenToTossSection.defaultProps = {
  dateScheduled: null,
};

export default WhenToTossSection;

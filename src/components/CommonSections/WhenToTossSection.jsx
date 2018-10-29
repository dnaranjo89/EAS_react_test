import React from 'react';
import PropTypes from 'prop-types';
import PublishDrawOptions from '../PublishDrawOptions/PublishDrawOptions';
import SectionPanel from '../SectionPanel/SectionPanel';

const WhenToTossSection = ({ sectionTitle, dateScheduled, onFieldChange }) => (
  <SectionPanel title={sectionTitle}>
    <PublishDrawOptions
      options={['now', 'schedule']}
      dateScheduled={dateScheduled}
      onFieldChange={onFieldChange}
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

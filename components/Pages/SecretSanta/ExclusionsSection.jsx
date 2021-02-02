import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import MuiButton from '@material-ui/core/Button';
import classnames from 'classnames/bind';
import useTranslation from 'next-translate/useTranslation';

import AddIcon from '@material-ui/icons/Add';
import STYLES from './ExclusionsSection.module.scss';
import ParticipantsList, { LIST_TYPES } from './ParticipantsList.jsx';

const c = classnames.bind(STYLES);
const ExclusionsSection = ({ participants, onModifyExclusions }) => {
  const { t } = useTranslation('DrawSecretSanta');
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [exclusions, setExclusions] = useState([]);
  const exclusionNamesList = exclusions.map(e => e.name);
  const handleModifyExclusion = () => {
    setExclusions([]);
    setSelectedParticipant(null);
    onModifyExclusions(selectedParticipant.name, exclusionNamesList);
  };

  const handleChangeSelectedParticipant = (e, currentParticipant, reason) => {
    if (reason === 'clear') {
      setExclusions([]);
    } else {
      setExclusions(prevExclusions =>
        prevExclusions.filter(exclusion => exclusion.email !== currentParticipant.email),
      );
    }
    setSelectedParticipant(currentParticipant);
  };

  const handleRemoveExclusion = () => {};

  const participantsWithExclusions = participants.filter(p => p.exclusions.length > 0);
  const participantsWithoutExclusions = participants.filter(p => p.exclusions.length === 0);

  return (
    <div>
      <div className={STYLES.container}>
        <Autocomplete
          id="participant"
          options={participantsWithoutExclusions}
          getOptionLabel={option => option.name}
          style={{ width: 200 }}
          value={selectedParticipant}
          openText={t('open_participant_dropdown')}
          renderInput={params => (
            <TextField {...params} label={t('field_label_participant')} variant="outlined" />
          )}
          className={STYLES.input}
          onChange={handleChangeSelectedParticipant}
        />
        <Autocomplete
          multiple
          id="exclusions"
          options={
            selectedParticipant
              ? participants.filter(p => p.email !== selectedParticipant.email)
              : participants
          }
          disabled={!selectedParticipant}
          style={{ width: 200 }}
          openText={t('open_exclusions_dropdown')}
          getOptionLabel={option => option.name}
          filterSelectedOptions
          className={STYLES.input}
          value={exclusions}
          onChange={(event, currentExclusions) => setExclusions(currentExclusions)}
          renderInput={params => (
            <TextField {...params} variant="outlined" label={t('field_label_exclusions')} />
          )}
        />
        <MuiButton
          className={STYLES.button}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleModifyExclusion}
        >
          {t('add_exclusion')}
        </MuiButton>
      </div>
      <div>
        <ParticipantsList
          value={participantsWithExclusions}
          type={LIST_TYPES.EXCLUSIONS}
          onRemove={handleRemoveExclusion}
        />
      </div>
    </div>
  );
};
ExclusionsSection.propTypes = {
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

ExclusionsSection.defaultProps = {};

export default ExclusionsSection;

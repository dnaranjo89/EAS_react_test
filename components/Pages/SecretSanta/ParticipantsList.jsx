import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames/bind';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import STYLES from './ParticipantsList.module.scss';

import BoxWithBorder from '../../BoxWithBorder/BoxWithBorder.jsx';

const c = classnames.bind(STYLES);

export const LIST_TYPES = {
  EMAILS: 'EMAILS',
  EXCLUSIONS: 'EXCLUSIONS',
};

const ParticipantsList = ({ value, error, helperText, onRemove, type }) => {
  const { t } = useTranslation('DrawSecretSanta');

  return (
    <BoxWithBorder error={error} className={STYLES.container}>
      {value.length === 0 && (
        <Typography variant="body2">
          {type === LIST_TYPES.EMAILS ? t('label_no_participants') : t('label_no_exclusions')}
        </Typography>
      )}
      {value.length > 0 && (
        <List dense>
          {value.map(participant => (
            <ListItem key={participant.name}>
              <IconButton
                edge="start"
                aria-label={
                  type === LIST_TYPES.EMAILS
                    ? t('label_remove_participant', { name: participant.name })
                    : t('label_remove_exclusion', { name: participant.name })
                }
                onClick={() => onRemove(participant.name)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              {type === LIST_TYPES.EMAILS
                ? `${participant.name} (${participant.email})`
                : `${participant.name} ${t('field_label_exclusions')} ${participant.exclusions.join(
                    ', ',
                  )}`}
            </ListItem>
          ))}
        </List>
      )}
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </BoxWithBorder>
  );
};

ParticipantsList.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

ParticipantsList.defaultProps = {
  error: false,
  helperText: '',
};

export default ParticipantsList;

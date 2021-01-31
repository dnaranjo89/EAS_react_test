import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames/bind';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import STYLES from './ParticipantsList.module.scss';

import BoxWithBorder from '../../BoxWithBorder/BoxWithBorder.jsx';

const c = classnames.bind(STYLES);

const ParticipantsList = ({ name, value, error, helperText, onParticipantRemove }) => {
  const { t } = useTranslation('DrawSecretSanta');
  const helperTextId = helperText && name ? `${name}-helper-text` : undefined;

  return (
    <BoxWithBorder error={error} className={STYLES.container}>
      {value.length === 0 && <Typography variant="body2">{t('label_no_participants')}</Typography>}
      {value.length > 0 && (
        <List dense>
          {value.map(participant => (
            <ListItem key={participant.email}>
              <IconButton
                edge="start"
                aria-label="delete"
                onClick={() => onParticipantRemove(participant.email)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              {participant.name} ({participant.email})
            </ListItem>
          ))}
        </List>
      )}
      {helperText && (
        <FormHelperText error={error} id={helperTextId}>
          {helperText}
        </FormHelperText>
      )}
    </BoxWithBorder>
  );
};

ParticipantsList.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onParticipantRemove: PropTypes.func.isRequired,
};

ParticipantsList.defaultProps = {
  error: false,
  helperText: '',
};

export default ParticipantsList;

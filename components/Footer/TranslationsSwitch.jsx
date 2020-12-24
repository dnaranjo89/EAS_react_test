import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TranslateIcon from '@material-ui/icons/Translate';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useTranslation from 'next-translate/useTranslation';
import STYLES from './TranslationsSwitch.module.scss';

const localeMap = {
  'en-GB': 'English',
  'es-ES': 'Español',
};

const TranslationsSwitch = ({ available, onChange }) => {
  const [isModalOpen, openModal] = useState(false);
  const { t, lang } = useTranslation('Common');
  function handleOpen() {
    openModal(true);
  }

  function handleClose() {
    openModal(false);
  }

  function handleChange(event) {
    handleClose();
    onChange(event.target.value);
  }
  return (
    <>
      <Button onClick={handleOpen} className={STYLES.button}>
        <TranslateIcon fontSize="small" titleAccess={t('change_language')} />
        &nbsp;
        {localeMap[lang]}
      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={isModalOpen} onClose={handleClose}>
        <DialogTitle>{t('change_language')}</DialogTitle>
        <DialogContent>
          <FormControl>
            <Select value={lang} onChange={handleChange}>
              {available.map(item => (
                <MenuItem key={item} value={item}>
                  {localeMap[item]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            {t('cancel')}
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
TranslationsSwitch.propTypes = {
  available: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TranslationsSwitch;

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, DateTimePicker as MuiDateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import useTranslation from 'next-translate/useTranslation';
import 'moment/locale/es';

const DateTimePicker = ({ id, label, ...props }) => {
  const { t, lang } = useTranslation('CommonCreateDraw');
  const { tReady, ...rest } = props; // eslint-disable-line react/prop-types
  const locale = lang;

  const localeMap = {
    'en-GB': 'en',
    'es-ES': 'es',
  };
  const currentLocale = localeMap[locale];
  moment.locale(currentLocale);
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={currentLocale} moment={moment}>
      <Typography htmlFor={id} component="label" variant="h3">
        {label}
      </Typography>
      <MuiDateTimePicker
        hideTabs
        id={id}
        minDateMessage={t('datepicker_only_future_date_valid')}
        cancelLabel={t('datepicker_cancel')}
        okLabel={t('datepicker_ok')}
        todayLabel={t('datepicker_today')}
        ampm={false}
        format="LLL"
        margin="normal"
        fullWidth
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
};

DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default DateTimePicker;

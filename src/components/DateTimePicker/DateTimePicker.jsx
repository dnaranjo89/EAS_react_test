import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, DateTimePicker as MuiDateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { withTranslation } from '../../i18n';
import 'moment/locale/es';

const DateTimePicker = ({ id, label, t, i18n, ...props }) => {
  const { tReady, ...rest } = props; // eslint-disable-line react/prop-types
  const locale = i18n.language;

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
        minDateMessage={t('only_future_date_valid')}
        cancelLabel={t('cancel')}
        okLabel={t('ok')}
        todayLabel={t('today')}
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

export default withTranslation('DateTimePicker')(DateTimePicker);

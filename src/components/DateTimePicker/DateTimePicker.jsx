import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { default as MuiDateTimePicker } from 'material-ui-pickers/DateTimePicker'; // eslint-disable-line import/no-named-default
import moment from 'moment';
import 'moment/locale/es';
import i18n from '../../i18n/i18n';

const DateTimePicker = ({ t, ...props }) => {
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
      <MuiDateTimePicker
        minDateMessage={t('only_future_date_valid')}
        cancelLabel={t('cancel')}
        okLabel={t('ok')}
        todayLabel={t('today')}
        ampm={false}
        format="LLL"
        label={t('date')}
        margin="normal"
        fullWidth
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
};

DateTimePicker.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('DateTimePicker')(DateTimePicker);

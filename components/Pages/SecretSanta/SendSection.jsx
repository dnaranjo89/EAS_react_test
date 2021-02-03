import React from 'react';
import PropTypes from 'prop-types';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';

const SendSection = props => (
  <div>
    <Trans i18nKey="DrawSecretSanta:summary_send" components={[<p />]} />
  </div>
);

SendSection.propTypes = {};

export default SendSection;

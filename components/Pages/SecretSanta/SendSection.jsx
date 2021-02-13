import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';

const SendSection = () => (
  <Typography variant="body1" component="div">
    <Trans i18nKey="DrawSecretSanta:summary_send" components={[<p />]} />
  </Typography>
);

SendSection.propTypes = {};

export default SendSection;

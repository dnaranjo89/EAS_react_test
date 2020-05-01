import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Page from '../../Page/Page.jsx';
import { withTranslation } from '../../../i18n';

import STYLES from './NotFoundPage.module.scss';

// TO IMPROVE
// We need to do all this funny business here cause the 404 page doesn't play
// well with next-i18next
const NotFoundPage = ({ t }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const msg = t('page_not_found_msg');
    if (msg !== 'page_not_found_msg') {
      // Only load the message when the translation is actually loaded
      setMessage(msg);
    }
  }, [t]);
  return (
    <Page
      htmlTitle="Not found"
      htmlDescription="Not found"
      pageType="Not Found Page" // pageType won't be used as we are not tracking this page
      contentClassName={STYLES.page}
      showAdvert={false}
      enableTracking={false}
    >
      <Typography variant="h5" className={STYLES.statusCode}>
        404
      </Typography>
      <Typography variant="body2">{message}</Typography>
    </Page>
  );
};

NotFoundPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('NotFoundPage')(NotFoundPage);

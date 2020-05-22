import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Page from '../../Page/Page.jsx';
import { withTranslation } from '../../../i18n';

import STYLES from './ErrorNotFoundPage.module.scss';

const ErrorNotFoundPage = ({ t }) => (
  <Page
    htmlTitle={t('not_found_page_html_title')}
    htmlDescription={t('not_found_page_html_title')}
    pageType="Not Found Page" // pageType won't be used as we are not tracking this page
    contentClassName={STYLES.page}
    showAdvert={false}
    enableTracking={false}
  >
    <Typography variant="h5" className={STYLES.statusCode}>
      404
    </Typography>
    <Typography variant="body2">{t('not_found_page_msg')}</Typography>
  </Page>
);
ErrorNotFoundPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('Common')(ErrorNotFoundPage);

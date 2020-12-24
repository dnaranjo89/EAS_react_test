import React from 'react';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Page from '../../Page/Page.jsx';

import STYLES from './ErrorNotFoundPage.module.scss';

const ErrorNotFoundPage = () => {
  const { t } = useTranslation('Common');
  return (
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
};
ErrorNotFoundPage.propTypes = {};

export default ErrorNotFoundPage;

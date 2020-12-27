import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Page from '../../Page/Page.jsx';
import ErrorNotFoundPage from './ErrorNotFoundPage.jsx';

import STYLES from './ErrorPage.module.scss';

const ErrorPage = ({ statusCode }) => {
  const { t } = useTranslation('Common');
  if (statusCode === 404) {
    return <ErrorNotFoundPage />;
  }
  return (
    <Page
      htmlTitle={t('error_page_html_title')}
      htmlDescription={t('error_page_html_title')}
      pageType="Not Found Page" // pageType won't be used as we are not tracking this page
      contentClassName={STYLES.page}
      showAdvert={false}
      enableTracking={false}
    >
      <Typography variant="body2">{t('error_page_msg')}</Typography>
    </Page>
  );
};
ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

ErrorPage.defaultProps = {
  statusCode: null,
};

export default ErrorPage;

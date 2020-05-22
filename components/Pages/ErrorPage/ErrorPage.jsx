import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Page from '../../Page/Page.jsx';
import { withTranslation } from '../../../i18n';
import ErrorNotFoundPage from './ErrorNotFoundPage.jsx';

import STYLES from './ErrorPage.module.scss';

const ErrorPage = ({ t, statusCode }) => {
  if (statusCode === 404) {
    return <ErrorNotFoundPage />;
  }
  return (
    <Page
      htmlTitle={t('error_html_title')}
      htmlDescription={t('error_html_title')}
      pageType="Not Found Page" // pageType won't be used as we are not tracking this page
      contentClassName={STYLES.page}
      showAdvert={false}
      enableTracking={false}
    >
      <Typography variant="body2">{t('error_msg')}</Typography>
    </Page>
  );
};
ErrorPage.propTypes = {
  t: PropTypes.func.isRequired,
  statusCode: PropTypes.number,
};

ErrorPage.defaultProps = {
  statusCode: null,
};

export default withTranslation('ErrorPage')(ErrorPage);

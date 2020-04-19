import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { withTranslation } from '../i18n';
import Page from '../components/Page/Page.jsx';
import Homepage from '../components/Pages/Homepage/Homepage.jsx';
import STYLES from '../components/Pages/Homepage/HomePage.module.scss';

const c = classNames.bind(STYLES);

const HomePage = ({ t }) => (
  <Page
    htmlTitle={t('html_title')}
    htmlDescription={t('html_description')}
    contentClassName={c('HomePage')}
    pageType="Homepage"
  >
    <Homepage />
  </Page>
);

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['homepage'],
});

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('homepage')(HomePage);

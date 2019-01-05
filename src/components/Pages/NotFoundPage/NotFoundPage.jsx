import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Page from '../../Page/Page.jsx';

import STYLES from './NotFoundPage.scss';

const c = classnames.bind(STYLES);
const NotFoundPage = ({ message }) => (
  <Page htmlTitle="Not found" htmlDescription="Not found" className={c('NotFoundPage')}>
    <div>{message}</div>
  </Page>
);

NotFoundPage.propTypes = {
  message: PropTypes.string,
};

NotFoundPage.defaultProps = {
  message: 'Not found',
};

export default NotFoundPage;

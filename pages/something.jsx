import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';
// import classNames from 'classnames/bind';

// import Page from '../../components/Page/Page.jsx';

// const c = classNames.bind(STYLES);

const HomePage = ({ t }) => 'asdas';

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('HomePage')(HomePage);

import React from 'react';
import PrivacyPolicyPage from '../components/Pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx';

const PrivacyPolicy = props => <PrivacyPolicyPage {...props} />;

PrivacyPolicy.getInitialProps = async () => ({
  namespacesRequired: ['PrivacyPolicyPage', 'Common'],
});

export default PrivacyPolicy;

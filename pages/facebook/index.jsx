import React from 'react';
import FacebookRafflePageContainer from '../../components/Pages/FacebookRaffle/FacebookRafflePageContainer.jsx';

const FacebookPage = props => <FacebookRafflePageContainer {...props} />;

FacebookPage.getInitialProps = async () => ({
  namespacesRequired: ['FacebookPage', 'DrawPublishedCommon'],
});

export default FacebookPage;

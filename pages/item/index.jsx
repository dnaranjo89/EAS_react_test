import React from 'react';
import RandomItemPageContainer from '../../components/Pages/RandomItem/RandomItemPageContainer.jsx';

const ItemPage = props => <RandomItemPageContainer {...props} />;

ItemPage.getInitialProps = () => ({
  namespacesRequired: ['DrawItem', 'CommonCreateDraw', 'Common'],
});

export default ItemPage;

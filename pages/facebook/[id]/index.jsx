import React from 'react';
import PublishedFacebookRafflePage, {
  loadData,
} from '../../../components/Pages/FacebookRaffle/PublishedFacebookRafflePage.jsx';
import FacebookProvider from '../../../hocs/FacebookProvider.jsx';

const PublishedFacebookPage = props => (
  <FacebookProvider>
    <PublishedFacebookRafflePage {...props} />;
  </FacebookProvider>
);

PublishedFacebookPage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  const draw = await loadData(drawId);
  return {
    draw,
    namespacesRequired: ['FacebookPage'],
  };
};
export default PublishedFacebookPage;

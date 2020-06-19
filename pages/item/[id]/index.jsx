import React from 'react';
import RandomItemPageContainer from '../../../components/Pages/RandomItem/RandomItemPageContainer.jsx';
import PublishedRandomItemPage from '../../../components/Pages/RandomItem/PublishedRandomItemPage.jsx';
import ReadPage from '../../../components/Pages/ReadPage.jsx';
import getInitialProps from '../../../utils/getInitialProps';

import { URL_SLUG_ITEM } from '../../../constants/urlSlugs';

const ItemReadPage = props => (
  <ReadPage {...props} MainPage={RandomItemPageContainer} PublishedPage={PublishedRandomItemPage} />
);

ItemReadPage.getInitialProps = async ctx => {
  const { id: drawId } = ctx.query;
  return getInitialProps({ drawId, urlSlug: URL_SLUG_ITEM });
};

export default ItemReadPage;

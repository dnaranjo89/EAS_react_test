import React from 'react';
import RandomItemPageContainer from '../../../components/Pages/RandomItem/RandomItemPageContainer.jsx';
import PublishedRandomItemPage from '../../../components/Pages/RandomItem/PublishedRandomItemPage.jsx';
import ReadPage from '../../../components/Pages/ReadPage.jsx';
import fetchData from '../../../utils/fetchData';

import { URL_SLUG_ITEM } from '../../../constants/urlSlugs';

const ItemReadPage = props => (
  <ReadPage {...props} MainPage={RandomItemPageContainer} PublishedPage={PublishedRandomItemPage} />
);

export const getServerSideProps = async ({ req, query }) => {
  const { id: drawId } = query;
  const props = await fetchData({ drawId, urlSlug: URL_SLUG_ITEM, req });
  return { props };
};

export default ItemReadPage;

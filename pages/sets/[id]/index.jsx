import React from 'react';
import LinkSetsPageContainer from '../../../components/Pages/LinkSets/LinkSetsPageContainer.jsx';
import PublishedLinkSetsPage from '../../../components/Pages/LinkSets/PublishedLinkSetsPage.jsx';
import ReadPage from '../../../components/Pages/ReadPage.jsx';
import fetchData from '../../../utils/fetchData';

import { URL_SLUG_SETS } from '../../../constants/urlSlugs';

const LinkSetsReadPage = props => (
  <ReadPage {...props} MainPage={LinkSetsPageContainer} PublishedPage={PublishedLinkSetsPage} />
);

export const getServerSideProps = async ({ req, query }) => {
  const { id: drawId } = query;
  const props = await fetchData({ drawId, urlSlug: URL_SLUG_SETS, req });
  return { props };
};
export default LinkSetsReadPage;

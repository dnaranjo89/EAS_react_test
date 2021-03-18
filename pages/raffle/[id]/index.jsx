import React from 'react';
import PublishedRafflePage from '../../../components/Pages/Raffle/PublishedRafflePage.jsx';
import RafflePageContainer from '../../../components/Pages/Raffle/RafflePageContainer.jsx';
import ReadPage from '../../../components/Pages/ReadPage.jsx';
import fetchData from '../../../utils/fetchData';

import { URL_SLUG_RAFFLE } from '../../../constants/urlSlugs';

const RaffleReadPage = props => (
  <ReadPage {...props} MainPage={RafflePageContainer} PublishedPage={PublishedRafflePage} />
);

export const getServerSideProps = async ({ req, query }) => {
  const { id: drawId } = query;
  const props = await fetchData({ drawId, urlSlug: URL_SLUG_RAFFLE, req });
  return { props };
};

export default RaffleReadPage;

import React from 'react';
import RandomNumberPageContainer from '../../../components/Pages/RandomNumber/RandomNumberPageContainer.jsx';
import PublishedRandomNumberPage from '../../../components/Pages/RandomNumber/PublishedRandomNumberPage.jsx';
import ReadPage from '../../../components/Pages/ReadPage.jsx';
import fetchData from '../../../utils/fetchData';

import { URL_SLUG_NUMBER } from '../../../constants/urlSlugs';

const NumbersReadPage = props => (
  <ReadPage
    {...props}
    MainPage={RandomNumberPageContainer}
    PublishedPage={PublishedRandomNumberPage}
  />
);

export const getServerSideProps = async ({ req, query }) => {
  const { id: drawId } = query;
  const props = await fetchData({ drawId, urlSlug: URL_SLUG_NUMBER, req });
  return { props };
};

export default NumbersReadPage;

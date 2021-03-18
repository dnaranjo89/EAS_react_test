import React from 'react';
import RandomLetterPageContainer from '../../../components/Pages/RandomLetter/RandomLetterPageContainer.jsx';
import PublishedRandomLetterPage from '../../../components/Pages/RandomLetter/PublishedRandomLetterPage.jsx';
import ReadPage from '../../../components/Pages/ReadPage.jsx';
import { URL_SLUG_LETTER } from '../../../constants/urlSlugs';
import fetchData from '../../../utils/fetchData';

const LettersReadPage = props => (
  <ReadPage
    {...props}
    MainPage={RandomLetterPageContainer}
    PublishedPage={PublishedRandomLetterPage}
  />
);

export const getServerSideProps = async ({ req, query }) => {
  const { id: drawId } = query;
  const props = await fetchData({ drawId, urlSlug: URL_SLUG_LETTER, req });
  return { props };
};

export default LettersReadPage;

import React from 'react';
import GroupsGeneratorPageContainer from '../../../components/Pages/GroupsGenerator/GroupsGeneratorPageContainer.jsx';
import PublishedGroupsGeneratorPage from '../../../components/Pages/GroupsGenerator/PublishedGroupsGeneratorPage.jsx';
import ReadPage from '../../../components/Pages/ReadPage.jsx';
import fetchData from '../../../utils/fetchData';
import { URL_SLUG_GROUPS } from '../../../constants/urlSlugs';

const GroupsReadPage = props => (
  <ReadPage
    {...props}
    MainPage={GroupsGeneratorPageContainer}
    PublishedPage={PublishedGroupsGeneratorPage}
  />
);

export const getServerSideProps = async ({ req, query }) => {
  const { id: drawId } = query;
  const props = await fetchData({ drawId, urlSlug: URL_SLUG_GROUPS, req });
  return { props };
};

export default GroupsReadPage;

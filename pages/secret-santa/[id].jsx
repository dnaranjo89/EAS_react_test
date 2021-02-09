import React from 'react';
import PublishedSecretSantaResultPage from '../../components/Pages/SecretSanta/PublishedSecretSantaResultPage.jsx';
import fetchData from '../../utils/fetchData';
import { URL_SLUG_SECRET_SANTA } from '../../constants/urlSlugs';

// export const getServerSideProps = async ctx => {
//   const { id: drawId } = ctx.query;
//   const props = await fetchData({ drawId, urlSlug: URL_SLUG_SECRET_SANTA });
//   return { props };
// };

export default PublishedSecretSantaResultPage;

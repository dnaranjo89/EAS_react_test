import { getServerSideSitemap } from 'next-sitemap';
import { prodDomains } from '../../utils/domains';
import { environment } from '../../utils';
import { TYPE_APP_ENV_PRODUCTION } from '../../constants/environment';

// We cannot generate static sitemaps with `next-sitemap` because we need to include the domain.
// Thus we need to generate the sitemap on the server side
export const getServerSideProps = async ctx => {
  const { locale } = ctx;
  const isProd = environment === TYPE_APP_ENV_PRODUCTION;

  if (!isProd) {
    return getServerSideSitemap(ctx, []);
  }

  const { domain } = prodDomains.find(entry => entry.defaultLocale === locale);

  const urls = [
    '/',
    '/privacy-policy',
    '/spinner',
    '/coin',
    '/dice',
    '/secret-santa',
    '/raffles',
    '/facebook',
    '/groups',
    '/groups/public',
    '/item',
    '/item/public',
    '/letter',
    '/letter/public',
    '/number',
    '/number/public',
    '/raffle/public',
    '/raffle',
    '/sets',
    '/sets/public',
  ];
  const fields = urls.map(url => ({ loc: `https://${domain}${url}` }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};

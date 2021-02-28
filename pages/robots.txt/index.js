import { prodDomains } from '../../utils/domains';
import { environment } from '../../utils';
import { TYPE_APP_ENV_PRODUCTION } from '../../constants/environment';

const getRobotsContent = domain => `# *
User-agent: *
Allow: /

# Host
Host: https://${domain}

# Sitemaps
Sitemap: https://${domain}/sitemap.xml
`;

// We cannot generate static robots with `next-sitemap` because we need to include the domain.
// Thus we need to generate the robots on the server side
export const getServerSideProps = async ctx => {
  const { locale, res } = ctx;
  const isProd = environment === TYPE_APP_ENV_PRODUCTION;

  if (!isProd) {
    res.setHeader('Content-Type', 'text/plain');
    res.end();
    return {
      props: {},
    };
  }

  const { domain } = prodDomains.find(entry => entry.defaultLocale === locale);
  const robotContent = getRobotsContent(domain);

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotContent);
  res.end();

  return {
    props: {},
  };
};

// Default export to prevent next.js errors
export default () => {};

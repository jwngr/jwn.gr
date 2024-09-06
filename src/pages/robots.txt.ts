import type {APIRoute} from 'astro';

import {Urls} from '../lib/urls';

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({site}) => {
  const sitemapURL = new URL(Urls.forSitemap(), site);
  return new Response(getRobotsTxt(sitemapURL));
};

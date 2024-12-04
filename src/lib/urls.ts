export class Urls {
  static readonly HOME = '/';
  static readonly RSS = '/rss.xml';
  static readonly POSTS = '/posts/';
  static readonly SITEMAP = '/sitemap-index.xml';

  static forHome() {
    return Urls.HOME;
  }

  static forRss() {
    return Urls.RSS;
  }

  static forSitemap() {
    return Urls.SITEMAP;
  }

  static forPost(id: string) {
    return `${Urls.POSTS}${id}`;
  }
}

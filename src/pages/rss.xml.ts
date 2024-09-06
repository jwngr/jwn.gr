import rss from '@astrojs/rss';

import {getPosts} from '../lib/posts';
import {Urls} from '../lib/urls';

export async function GET() {
  const postsCollection = await getPosts();

  return rss({
    title: 'Jacob Wenger',
    description: 'On software and life',
    site: 'https://jwn.gr',
    items: postsCollection.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: Urls.forPost(post.slug),
    })),
  });
}

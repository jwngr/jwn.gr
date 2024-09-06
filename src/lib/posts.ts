import {getCollection, type CollectionEntry} from 'astro:content';

export async function getPosts(): Promise<CollectionEntry<'posts'>[]> {
  const postsCollection = await getCollection('posts');
  if (import.meta.env.PROD) {
    // Draft posts get filtered out in production.
    return postsCollection.filter(({data}: CollectionEntry<'posts'>) => !data.isDraft);
  }
  return postsCollection;
}

export async function getPostsByPublishDate(limit?: number): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getPosts();
  const sortedPosts = posts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

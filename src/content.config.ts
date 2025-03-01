import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const blogPostSchema = z.object({
  title: z.string().max(1000),
  description: z.string().max(200),
  isDraft: z.boolean().default(false),
  publishDate: z.string().transform((s) => new Date(s)),
  readingTimeMins: z.number().min(1),
});

const blogPostsCollection = defineCollection({
  loader: glob({pattern: '**/[^_]*.mdx', base: './src/data/posts'}),
  schema: blogPostSchema,
});

// Register collections as a single object.
export const collections = {posts: blogPostsCollection};

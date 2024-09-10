import {defineCollection, z} from 'astro:content';

// Define blog collection schema.
const blogCollection = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string().max(1000),
      description: z.string().max(200),
      isDraft: z.boolean().default(false),
      publishDate: z.string().transform((s) => new Date(s)),
      readingTimeMins: z.number().min(1),
    }),
});

// Register collections. Keys should match collection directory names in "src/content".
export const collections = {
  posts: blogCollection,
};

import { Cloudinary } from '@cloudinary/url-gen';
import type { Post } from '../types';

interface Data {
  publication: {
    posts: {
      edges: Array<{
        node: Post;
      }>;
    };
  };
}

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME,
    apiKey: import.meta.env.CLOUDINARY_API_KEY,
    apiSecret: import.meta.env.CLOUDINARY_API_SECRET,
  },
});

export default async function fetchPosts() {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPosts {
          publication(host: "blog.usmans.me") {
            posts(first: 6) {
              edges {
                node {
                  slug
                  title
                  cuid
                  reactionCount
                  publishedAt
                  responseCount
                  replyCount
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const { data }: { data: Data } = await response.json();
  let { posts } = data.publication;

  // posts = posts.map(post => {
  //   return { ...post, coverImage: getCloudinaryUrl(post) };
  // });

  return posts.edges.map(e => e.node);
}

function getCloudinaryUrl(post: Post): string {
  const cldSrc = cloudinary
    .image(post.coverImage.url)
    .format('auto')
    .quality('auto')
    .setDeliveryType('fetch');

  return cldSrc.toURL();
}

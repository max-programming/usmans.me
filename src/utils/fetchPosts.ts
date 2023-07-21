import { Cloudinary } from '@cloudinary/url-gen';
import type { Post } from '../types';

interface Data {
  user: {
    publication: {
      posts: Post[];
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
  const response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query GetPosts {
        user(username: "usmanwrites") {
          publication {
            posts {
              slug
              title
              cuid
              totalReactions
              coverImage
              dateAdded
              responseCount
              replyCount
            }
          }
        }
      }
      `,
    }),
  });

  const { data }: { data: Data } = await response.json();
  let { posts } = data.user.publication;

  // posts = posts.map(post => {
  //   return { ...post, coverImage: getCloudinaryUrl(post) };
  // });

  return posts;
}

function getCloudinaryUrl(post: Post): string {
  const cldSrc = cloudinary
    .image(post.coverImage)
    .format('auto')
    .quality('auto')
    .setDeliveryType('fetch');

  return cldSrc.toURL();
}

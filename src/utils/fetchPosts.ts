import type { Post } from '../types';

interface Data {
  user: {
    publication: {
      posts: Post[];
    };
  };
}

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
  const { posts } = data.user.publication;
  return posts;
}

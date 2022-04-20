import { gql } from '@apollo/client';

import { client } from './apolloClient';

export interface Post {
  totalReactions: number;
  coverImage: string;
  cuid: string;
  dateAdded: string;
  slug: string;
  title: string;
}

interface Data {
  user: {
    publication: {
      posts: Post[];
    };
  };
}

export async function getPosts() {
  const hashnodeClient = client('https://api.hashnode.com');

  const { data } = await hashnodeClient.query<Data>({
    query: gql`
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
            }
          }
        }
      }
    `,
  });

  const { posts } = data.user.publication;

  return posts;
}

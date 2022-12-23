import { gql } from '@apollo/client';
import axios from 'axios';

import { client } from './apolloClient';

export interface Post {
  totalReactions: number;
  coverImage: string;
  cuid: string;
  dateAdded: string;
  slug: string;
  title: string;
  responseCount: number;
  replyCount: number;
}

export interface LikesAndComments {
  totalReactions: number;
  responseCount: number;
  replyCount: number;
}

interface Data {
  user: {
    publication: {
      posts: Post[];
    };
  };
}

async function getDevToPosts() {
  const { data } = await axios.get(
    'https://dev.to/api/articles?username=maxprogramming&per_page=5'
  );
  return (data as any[]).map((d: any) => ({
    url: d.url,
    canonicalUrl: d.canonical_url,
  }));
}

export async function getPostLikesAndComments() {
  const hashnodeClient = client('https://api.hashnode.com');
  const { data } = await hashnodeClient.query<any>({
    query: gql`
      query GetPosts {
        user(username: "usmanwrites") {
          publication {
            posts {
              totalReactions
              responseCount
              replyCount
            }
          }
        }
      }
    `,
  });
  const likesAndComments: LikesAndComments[] = data.user.publication.posts;
  return likesAndComments;
}

async function getHashnodePosts() {
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
              responseCount
              replyCount
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function getPosts() {
  const [hashnodePosts, devToPosts] = await Promise.all([
    getHashnodePosts(),
    getDevToPosts(),
  ]);

  const { posts } = hashnodePosts.user.publication;

  return posts;
}

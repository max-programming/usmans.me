import { NextApiRequest, NextApiResponse } from 'next';
import { getPostLikesAndComments } from '@/utils/fetchPosts';

export default async function sendDiscordMessage(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const likesAndComments = await getPostLikesAndComments();

  return res.send(likesAndComments);
}

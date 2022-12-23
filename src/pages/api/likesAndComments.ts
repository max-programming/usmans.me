import { getPostLikesAndComments } from '@/utils/fetchPosts';
import { NextResponse } from 'next/server';

export default async function sendDiscordMessage() {
  const likesAndComments = await getPostLikesAndComments();

  return NextResponse.json(likesAndComments);
}

export const config = {
  runtime: 'experimental-edge',
};

import { env } from '@/env/server.mjs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function sendDiscordMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log('Removing because of so much spam');
  const response = await fetch(env.DISCORD_WEBHOOK_URL!, {
    method: 'POST',
    body: JSON.stringify({
      content: `**${req.query.name}** button was clicked.`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return res.send('Message sent');
  }
  return res.send('Could not send message');
}

import { NextApiRequest, NextApiResponse } from 'next';

export default async function sendDiscordMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: 'POST',
    body: JSON.stringify({
      content: `${req.query.name} button was clicked.`,
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

import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params, request }) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  const response = await fetch(import.meta.env.DISCORD_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify({
      content: `**${name}** button was clicked.`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return new Response('ok', { status: 200 });
  }
  return new Response('notok', { status: 500 });
};

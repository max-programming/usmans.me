import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ params, request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body = await request.json();
    const name = body.name;
    const response = await fetch(import.meta.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify({
        content: `**${name}** button was clicked.`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return new Response(JSON.stringify(response), {
      status: 200,
    });
  }
  return new Response(null, { status: 400 });
};

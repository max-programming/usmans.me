export async function sendMessage(name: string) {
  await fetch(`/api/sendDiscordMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name }),
  });
}

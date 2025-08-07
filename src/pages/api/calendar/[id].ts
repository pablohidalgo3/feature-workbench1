// src/pages/api/calendar/[id].ts
import type { APIRoute } from 'astro';
const { API_URL, API_KEY } = import.meta.env;

export const GET: APIRoute = async ({ params }) => {
  // params.id llegará ya decodificado
  const res = await fetch(`${API_URL}/calendar/${params.id}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });

  if (!res.ok) {
    return new Response(await res.text(), {
      status: res.status,
      statusText: res.statusText,
    });
  }

  const body = await res.text();
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar',
      'Content-Disposition': `attachment; filename=match-${params.id}.ics`,
    },
  });
};

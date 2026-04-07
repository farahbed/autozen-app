import { verifyToken } from '@/lib/auth';

export async function GET(req) {
  const user = verifyToken(req);

  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ message: 'OK tu es connecté 🔐' }), {
    status: 200,
  });
}
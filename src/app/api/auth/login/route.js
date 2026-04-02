import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Chercher user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
      });
    }

    // Vérifier password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Mot de passe incorrect' }), {
        status: 401,
      });
    }

    // Générer token
    const token = jwt.sign(
      { userId: user.id },
      'SECRET_KEY',
      { expiresIn: '1h' }
    );

    return new Response(JSON.stringify({ token }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
    });
  }
}

 
//En production, il est crucial de gérer les secrets de manière sécurisée 
//(ex: utiliser des variables d'environnement) et d'implémenter des mesures de sécurité supplémentaires 
//  (ex: limiter les tentatives de connexion, utiliser HTTPS, etc.).
//se fichier sert a se connecter a l'application, il vérifie que l'utilisateur existe et que le mot de passe est correct, 
// puis génère un token JWT pour les sessions.
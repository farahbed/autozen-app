import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Vérif simple
    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Champs manquants' }), {
        status: 400,
      });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify(user), { status: 201 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
    });
  }
}

// ce fichier sert a enregistrer un nouvel utilisateur,
//  il hash le mot de passe avant de le stocker dans la base de données pour des raisons de sécurité.
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { nom, email, password } = body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Utilisateur déjà existant' }), { status: 400 });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer l'utilisateur
    const user = await prisma.user.create({
      data: { nom, email, password: hashedPassword },
    });

    return new Response(JSON.stringify({ message: 'Compte créé ✅', userId: user.id }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), { status: 500 });
  }
}
// ce fichier sert a enregistrer un nouvel utilisateur,
//  il hash le mot de passe avant de le stocker dans la base de données pour des raisons de sécurité.
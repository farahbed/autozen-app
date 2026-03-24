import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@mail.com",
      password: "azerty"
    }
  });

  console.log("User créé :", user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
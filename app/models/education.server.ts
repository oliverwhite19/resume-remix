import { PrismaClient } from 'prisma/generated/client';

export async function getEducation() {
    const prisma = new PrismaClient();
    return await prisma.education.findMany();
}

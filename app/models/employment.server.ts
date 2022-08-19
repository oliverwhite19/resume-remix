import { PrismaClient } from 'prisma/generated/client';

export async function getEmployments() {
    const prisma = new PrismaClient();
    return await prisma.employment.findMany({
        include: { positions: true },
        orderBy: { index: 'asc' },
    });
}

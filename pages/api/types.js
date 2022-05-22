import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    const types = await prisma.type.findMany()

    res.status(200).json(types)

}
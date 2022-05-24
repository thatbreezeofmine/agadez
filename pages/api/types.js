import prisma from './client'

export default async function handler(req, res) {

    const types = await prisma.type.findMany()

    res.status(200).json(types)

}
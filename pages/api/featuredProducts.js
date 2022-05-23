import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    const featuredProducts = await prisma.product.findMany({
        where : {
            featured : true,
            date : {
                gt: new Date()
            }
        }
    })

    res.status(200).json(featuredProducts)

}
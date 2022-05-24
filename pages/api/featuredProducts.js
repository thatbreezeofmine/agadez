import prisma from './client'

export default async function handler(req, res) {

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
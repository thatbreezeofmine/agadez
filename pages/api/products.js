import prisma from './client'

export default async function handler(req, res) {

    let products = []

    if (req.body == "Accueil") {
        products = await prisma.product.findMany({
            where : {
                published : true,
                date : {
                    gt: new Date()
                }
            },
            include : {
                tickets : true,
            }
        })
    } else {
        products = await prisma.product.findMany({
            where: {
                product_type: {
                    nom: req.body,
                },
                published: true,
                date: {
                    gt: new Date()
                }
            },
            include : {
                tickets : true,
            }
        })
    }


    res.status(200).json(products)

}
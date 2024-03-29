import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const products = await prisma.product.update({
        where: {
            id: "2310c567-d7db-41d4-a3e8-fe67ac9e88a1"
        },
        data:
        {
            stripeId: "prod_PlPvdFRvOeNvBl"
        },




    })
    console.log(products)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
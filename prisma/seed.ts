import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const brands = await prisma.brand.createMany({
        data: [
            {
                name: "Hermes"
            },
            {name: "Louis-Vuitton"},
            {name: "Cartier"}
        ]

    })
    console.log(brands)
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
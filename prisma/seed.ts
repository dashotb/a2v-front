import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const brands = await prisma.size.delete({
        where: {
            id: "4da78cd3-b427-445f-bf04-8b414b1728d5",
            },

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
import { prisma } from "../../../lib/prisma"
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}

export async function POST(request:Request) {

    //Create Post
    try {
        const body = await request.json();
        const { name, brand, category, image, price, authorId } = body
        const result = await prisma.product.create({
            data: {
                name,
                brand,
                category,
                price,
                image,
                authorId
            },
        })
        return NextResponse.json(result)
    } catch (err) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 })
    }

}

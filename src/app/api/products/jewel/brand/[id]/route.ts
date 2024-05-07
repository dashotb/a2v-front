import { prisma } from "../../../../../../lib/prisma"
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const brandId = params.id
    const products = await prisma.product.findMany({
        where: {
            category: "jewel",
            brand: brandId
        }
    });
    return NextResponse.json(products);
}


import { prisma } from "../../../../../../lib/prisma"
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const styleId = params.id
    const products = await prisma.product.findMany({
        where: {
            category: "watch",
            altcategory: styleId
        }
    });
    return NextResponse.json(products);
}


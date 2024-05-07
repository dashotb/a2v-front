import { prisma } from "../../../../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const product = await prisma.product.findMany({
        where: {
            gender: "women",
            category: "apparel",
            subcategory: id
        }
    });
    return NextResponse.json(product);
}

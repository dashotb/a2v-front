import { prisma } from "../../../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const products = await prisma.product.findMany({
        where: {
            gender: "women",
            category: "shoe"
        }
    });
    return NextResponse.json(products);
}
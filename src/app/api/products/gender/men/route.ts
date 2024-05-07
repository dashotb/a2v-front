import { prisma } from "../../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const products = await prisma.product.findMany({
        where: {
            gender: "homme"
        }
    });
    return NextResponse.json(products);
}
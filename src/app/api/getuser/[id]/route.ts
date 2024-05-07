import { prisma } from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const product = await prisma.user.findUnique({
        where: {
            id: id
        }
    });
    return NextResponse.json(product);
}

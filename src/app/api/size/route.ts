import { prisma } from "../../../lib/prisma"
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const sizes = await prisma.size.findMany();
    return NextResponse.json(sizes);
}

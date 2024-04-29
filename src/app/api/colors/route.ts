import { prisma } from "../../../lib/prisma"
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const colors = await prisma.color.findMany();
    return NextResponse.json(colors);
}

import { prisma } from "../../../lib/prisma"
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const states = await prisma.state.findMany();
    return NextResponse.json(states);
}

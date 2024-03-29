import {stripe} from "../../../lib/stripe"
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
    const body  = await request.json();
    const { priceId } = body
    const session = await getServerSession(authOptions)
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email
        },
        select: {
            stripeCustomerId: true
        }
    })
    const stripeCustomerId = user?.stripeCustomerId
    const sessionCheck = await stripe.checkout.sessions.create({
        customer: stripeCustomerId,
        payment_method_types: ["card", "link"],
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: "payment",
        cancel_url: `http://localhost:3000/cancel`,
        success_url: `http://localhost:3000/success`,
    });
    return NextResponse.json(sessionCheck.url)
}
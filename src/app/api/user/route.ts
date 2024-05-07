import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt"
import { stripe } from "../../../lib/stripe";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, password } = body;
        const stripeCustomer = await stripe.customers.create({
            email
        });
        const hashedPass = await hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPass,
                stripeCustomerId: stripeCustomer.id,
            }
        })
        const { password: newUserPassword, ...rest } = newUser
        return NextResponse.json({ user: rest, message: "Bv" }, { status: 201 })

    } catch (error) {

    }
}
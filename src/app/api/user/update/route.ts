import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt"
import { stripe } from "../../../../lib/stripe";

export async function UPDATE(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const { email } = body;
        
        
        const newUser = await prisma.user.update({
            where: {
                id: params.id
            },
            data: {
                email
            }
        })
        
        return NextResponse.json({ message: "Updated Successfully" }, { status: 201 })

    } catch (error) {

    }
}
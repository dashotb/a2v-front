import { prisma } from "../../../../lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse, NextRequest } from "next/server";
import { stripe } from "../../../../lib/stripe";
import ShortUniqueId from "short-unique-id";

export const POST = async (request: Request) => {
    
    //Create Post
    try {
        const uid = new ShortUniqueId({ length: 10 });
        const stripeId = uid.rnd()
        const body = await request.json();
        const { name, brand, category, image, price, authorId } = body
        const result = await prisma.product.create({
            data: {
                name,
                brand,
                category,
                price,
                image,
                authorId,
                stripeId: stripeId
            },
        })
        await stripe.products.create({
            id: stripeId,
            name: brand + ' ' + name,
            default_price_data: {
                currency: "eur",
                unit_amount: parseInt(price) * 100,
            }
        });
        return NextResponse.json(result)
    } catch (err) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 })
    }

}
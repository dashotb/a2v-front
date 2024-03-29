import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from "bcrypt"
import { prisma } from "./prisma";
import { stripe } from "./stripe";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },  
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Nom", type: "text", placeholder: "jsmith@gmail.com" },
                password: { label: "Mot de passe", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const existingUser = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                })
                if (!existingUser) {
                    return null;
                }

                const passordMatch = await compare(credentials.password, existingUser.password);

                if (!passordMatch) {
                    return null;
                }

                return {
                    id: existingUser.id,
                    email: existingUser.email,

                }
            }
        })
    ],
    pages: {
        signIn: "/account/login",
    },
    events: {
        createUser: async (message) => {
            const userId = message.user.id;
            const email = message.user.email ;

            if(!userId || !email) {
                return;
            }

            const stripeCustomer = await stripe.customers.create({
                email
            });

            await prisma.user.update({
                where: {
                    id:  userId,
                },
                data: {
                    stripeCustomerId: stripeCustomer.id,
                }
            })
            console.log(stripeCustomer)
        }
    }
}
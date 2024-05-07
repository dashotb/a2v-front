import { NextPage } from "next";
import "./styles.scss"
import {Navbar} from "../../components/Navbar/Navbar";
import Link from "next/link";
import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import IconBoy from "../../../public/IconBoy.png"
import Image from "next/image";
import { prisma } from "../../lib/prisma";
import { ProductCard } from "../../components/Product/ProductCard";
import { useEffect, useState } from "react";


const Account:NextPage = async () => {
    const session = await getServerSession(authOptions)
    if (session){
        const response = await prisma.user.findUnique({
            where: {
                id: session.user.id
            }
        });
        return(
            <main className="main">
                <div className="display">
                    <div className="nav">
                        <h4 className="select_nav" id="selected">Vitrine</h4>
                        <a href="/account/sell"><p className="select_nav">Vendre</p></a>
                        <a href="/account/settings"><p className="select_nav">Parametres</p></a>
                    </div>
                    <div className="display_box">
                        <div className="user_box">
                            <div className="user_img_count">
                                <Image src={IconBoy} width={80} height={80} alt="" className="user_img"/>
                                <div className="counters">
                                    <div className="count">
                                        0
                                        <p>articles</p>
                                    </div>
                                    {/* Pour plus tard */}
                                    {/* <div className="count">
                                        0
                                        <p>followers</p>
                                    </div>
                                    <div className="count">
                                        0
                                        <p>suivi</p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="user_name_desc">
                                <h3 className="user_name">{response?.name}</h3>
                                <div className="user_desc">
                                    <p className="user_description">{response?.description}</p>
                                    <p>Pays: France</p>
                                </div>
                            </div>

                        </div>
                        <div className="products">
                            
                        </div>
                    </div>
                    
                </div>


            </main>
        )
    }
    return(
        redirect('/account/login')
    )
}

export default Account;
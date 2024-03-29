
import { NextPage } from "next";
import "./style.scss"
import { Navbar } from "../../../components/Navbar/Navbar";
import Link from "next/link";
import { authOptions } from "../../../lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import IconBoy from "../../../../public/IconBoy.png"
import Image from "next/image";
import { prisma } from "../../../lib/prisma";
import { ProductCard } from "../../../components/Product/ProductCard";



const Settings: NextPage = async () => {

    const session = await getServerSession(authOptions)
    if (session) {
        return (
            <main className="main">
                <div className="display">
                    <div className="nav">
                        <a href="/account"><p className="select_nav">Vitrine</p></a>
                        <a href="/account/sell"><p className="select_nav">Vendre</p></a>
                        <h4 className="select_nav" id="selected">Parametres</h4>
                    </div>
                    <div className="display_box_settings">
                        <div className="card">
                            <div className="container">
                                <h1>Compte</h1>
                                <p>Informations liées à votre compte</p>
                                <hr />
                                <div className="form">

                                    <div className="fields fields--2">
                                        <label className="field">
                                            <span className="field__label" for="firstname">Nom</span>
                                            <p>Seller Name</p>
                                        </label>
                                        <label className="field">
                                            <span className="field__label" for="lastname">Genre</span>
                                            <p>Homme</p>
                                        </label>
                                    </div>
                                    <label className="field">
                                        <span className="field__label" for="address">Email</span>
                                        <input type="email" className="field__input" placeholder={session.user.email} />
                                    </label>
                                    <label className="field">
                                        <span className="field__label" for="country">Mot de passe</span>
                                        <p>* * * * * * * * * * * *</p>
                                    </label>
                                    <label className="field">
                                        <span className="field__label" for="zipcode">Description</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam eius provident temporibus ducimus et optio nulla fugit, exercitationem sapiente ad sed delectus sequi? Voluptatibus repudiandae accusamus at adipisci eligendi?</p>
                                    </label>
                                </div>
                                <hr />
                                
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <h1>Adresse</h1>
                                <p>Informations liées à la livraison</p>
                                <hr />
                                <div className="form">
                                    <div className="fields fields--2">
                                        <label className="field">
                                            <span className="field__label" for="firstname">Prenom</span>
                                            <p>John</p>
                                        </label>
                                        <label className="field">
                                            <span className="field__label" for="lastname">Nom</span>
                                            <p>Doe</p>
                                        </label>
                                    </div>
                                    <label className="field">
                                        <span className="field__label" for="address">Adresse</span>
                                        <p>3 Av. Henri Montagut</p>
                                    </label>
                                    <div className="fields fields--3">
                                        <label className="field">
                                            <span className="field__label" for="country">Pays</span>
                                            <p>France</p>
                                        </label>
                                        <label className="field">
                                            <span className="field__label" for="zipcode">Code postale</span>
                                            <p>31800</p>
                                        </label>
                                        <label className="field">
                                            <span className="field__label" for="city">Ville</span>
                                            <p>Saint Gaudens</p>
                                        </label>
                                        
                                    </div>
                                </div>
                                <hr/>
                                    
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <h1>Paiements</h1>
                                <p>Informations liées aux paiements</p>
                                <hr />
                                <h3>Banque</h3>
                                <div className="form">

                                    <div className="fields fields--2">
                                        <label className="field">
                                            <span className="field__label" for="firstname">Beneficiaire</span>
                                            <p>Habib Hadjadj</p>
                                        </label>
                                        <label className="field">
                                            <span className="field__label" for="lastname">BIC</span>
                                            <p>REVOFRP2</p>
                                        </label>
                                    </div>
                                    <label className="field">
                                        <span className="field__label" for="address">IBAN</span>
                                        <p>FR21 7594 3854 0584 1553 5741 582</p>
                                    </label>
                                    
                                </div>
                                <hr />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    return (
        redirect('/account/login')
    )
}

export default Settings;
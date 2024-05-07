
import { NextPage } from "next";
import "./style.scss"
import { authOptions } from "../../../lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import { ProductCard } from "../../../components/Product/ProductCard";



const Settings: NextPage = async () => {
    const session = await getServerSession(authOptions)
    if (session) {
        const response = await prisma.user.findUnique({
            where: {
                id: session.user.id
            }
        });
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
                                            <span className="field__label" >Nom</span>
                                            {response?.name}
                                        </label>
                                        <label className="field">
                                            <span className="field__label" >Genre</span>
                                            Homme
                                        </label>
                                    </div>
                                    <label className="field">
                                        <span className="field__label" >Email</span>
                                        {session.user.email}
                                    </label>
                                    <label className="field">
                                        <span className="field__label" >Mot de passe</span>
                                        <p>* * * * * * * * * * * *</p>
                                    </label>
                                    <label className="field">
                                        <span className="field__label" >Description</span>
                                        {response?.description}
                                    </label>
                                </div>
                                <hr />
                                <button className="modify">Modifier</button>
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
                                            <span className="field__label" >Prenom</span>
                                            {response?.adressprenom}
                                        </label>
                                        <label className="field">
                                            <span className="field__label" >Nom</span>
                                            {response?.adressnom}
                                        </label>
                                    </div>
                                    <label className="field">
                                        <span className="field__label" >Adresse</span>
                                        {response?.adressline}
                                    </label>
                                    <div className="fields fields--3">
                                        <label className="field">
                                            <span className="field__label">Pays</span>
                                            {response?.adresscountry}
                                        </label>
                                        <label className="field">
                                            <span className="field__label">Code postale</span>
                                            {response?.adresspostal}
                                        </label>
                                        <label className="field">
                                            <span className="field__label" >Ville</span>
                                            {response?.adresstown}
                                        </label>
                                        
                                    </div>
                                </div>
                                <hr/>
                                <button className="modify">Modifier</button>
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
                                            <span className="field__label">Beneficiaire</span>
                                            {response?.beneficiaire}
                                        </label>
                                        <label className="field">
                                            <span className="field__label">BIC</span>
                                            {response?.bic}
                                        </label>
                                    </div>
                                    <label className="field">
                                        <span className="field__label">IBAN</span>
                                        {response?.iban}
                                    </label>
                                    
                                </div>
                                <hr />
                                <button className="modify">Modifier</button>
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
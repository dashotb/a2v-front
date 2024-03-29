import React from "react";
import "./Footer.scss";
import Link from "next/link"
import Image from "next/image";
import logo from "../../../public/logo.png"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="Brand">
                <div className="Logo">
                    <div className="ImgWrap">
                        <Image src={logo} width={100} height={100} className="logoImg" alt="logo"/>
                    </div>
                    <p>Access-to-Vintage n'est associé ou affilié à aucune marque</p>
                </div>
                <div className="Rate">
                    
                </div>
            </div>
            <div className="List">
                <div className="col">
                    <h4>A propos</h4>
                    <a href="#">A propos</a>
                    <a href="#">Authentification et Classification</a>
                    <a href="#">Carrières</a>
                    <a href="#">Contact</a>
                </div>
                <div className="col">
                    <h4>Acheter</h4>
                    <a href="#">Livraison et Retour</a>
                    <a href="#">Acheter</a>
                    <a href="#">Termes et conditions</a>
                </div>
                <div className="col">
                    <h4>Vendre</h4>
                    <a href="#">Vendre avec A2V</a>
                    <a href="#">Conditions générales pour les vendeurs</a>
                </div>
                <div className="col">
                    <h4>Services</h4>
                    <a href="#">Service client</a>
                    <a href="#">Faire un souhait</a>
                </div>
                <div className="col">
                    <h4>Aide</h4>
                    <a href="#">FAQs</a>
                    <a href="#">Plan du site A2V</a>
                </div>
                <div className="col">
                    <h4>Mentions légales</h4>
                    <a href="#">Politique d'annulation</a>
                    <a href="#">Information sur l'entreprise</a>
                    <a href="#">Politique de confidentialité</a>
                </div>
            </div>
            <div className="Contact">
                <div className="col">
                    <h4>Nous contacter</h4>
                    <a href="">+33 7 60 78 66 36</a>
                    <a href="">contact@a2v.com</a>
                </div>
            </div>
        </footer>
    )
}
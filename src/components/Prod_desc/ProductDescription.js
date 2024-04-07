export const ProdDesc = (props) => {
    return(
        <>
            <div className="product_title">
                <a>{props.product.brand} {props.product.name}</a>
            </div>
            <div className="product_pricing">
                <a className="product_price">{props.product.price} €</a>
            </div>
            <div className="payment">
                <button className="pay_button" onClick={props.handler}>Acheter</button>
                <button className="offer_button">Faire une offre</button>
            </div>
            <div className="showmore_box">

                <input type="checkbox" className="read-more" id="details" />
                <a className="showmore" for="details">Details <br /><span className="target">Taille : $ <br /> Couleur : $ <br /> Matiere(s) : $</span></a><label for="details" className="showmore_button"></label>

            </div>
            <div className="showmore_box">

                <input type="checkbox" className="read-more" id="authenticite" />
                <a className="showmore">Authenticité <br /><span className="target">Cet article a franchi l'étape de l'authentification digitale. <br />Tous les articles sont soumis à un contrôle par notre équipe d'experts.</span></a><label for="authenticite" className="showmore_button"></label>

            </div>
            <div className="showmore_box">

                <input type="checkbox" className="read-more" id="livraison" />
                <a className="showmore">Livraisons <br /><span className="target"><h5>Livraison Strandard</h5>Livraison en 5 à 10 jours<br /><br /><h5>Livraison Express</h5>Livraison en 3 à 5 jours</span></a><label for="livraison" className="showmore_button"></label>

            </div>
            <div className="showmore_box">

                <input type="checkbox" className="read-more" id="paiements" />
                <a className="showmore">Moyens de paiement <br /><span className="target">Paiement 100% sécurisé
                    <div className="payment_methods">
                        <img width="36" height="24" alt="cartebancaire" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/cartebancaire.svg?v=6349738beb4a4" /><img width="36" height="24" alt="mc" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/mc.svg?v=6349736976a62" />
                        <img width="36" height="24" alt="visa" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/visa.svg?v=6349718fa4756" />
                        <img width="36" height="24" alt="paypal" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/paypal.svg?v=6349708387d8f" />
                    </div>

                </span></a><label for="paiements" className="showmore_button"></label>
            </div>
        </>
    )
}
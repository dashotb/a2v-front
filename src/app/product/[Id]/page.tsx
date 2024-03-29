"use client"
import { NextPage } from "next"
import { prisma } from "../../../lib/prisma"
import { Suspense, useEffect, useState } from "react"
import "./style.scss"
import Link from "next/link"
import Image from "next/image"
import IconBoy from "../../../../public/IconBoy.png"
import { ProductCard } from "../../../components/Product/ProductCard"
import { getServerSession } from "next-auth"
import { authOptions } from "../../../lib/auth"
import { BuyButton } from "../../../components/Buy/BuyButton"
import { loadStripe } from "@stripe/stripe-js"
import { redirect } from "next/navigation"
import axios from "axios"
import { resolve } from "path"
import { stripe } from "../../../lib/stripe"


const Product:NextPage = ({ params }: { params: { Id: string } }) => {
    
    const handler = async () => {
        
        const { data } = await axios.post("/api/stripe/",
            {
                priceId: productPriceId
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
        window.location.assign(data)
    }
    const productId = params.Id
    const [product, setProduct] = useState({});
    const [productPriceId, setProductPriceId] = useState("")
    const [images, setImages] = useState([])
    const [done, setDone] = useState(false)
    const getProduct = async () => {
    const response = await fetch(`/api/products/${productId}`).then((response) => response.json());
    const stripeprod = await stripe.products.retrieve(response.stripeId, {
        apiKey: "sk_test_51OtcAdETdmNqSZwC8nVjVzEHM9AaxLWW71XzPAjCDqBiwsT8elhNIKYcaZy1yoLjofngaedT1mwDsnUaHkxSpJt300ACpynvjv"
    })
        setProductPriceId(stripeprod.default_price)
        setProduct(response);
        setImages(response.image)
    }

    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await fetch(`/api/products`).then((response) => response.json());
        setProducts(response);
        console.log(response)
    }
useEffect(() => {
    if (done==false){
        getProduct()
        getProducts()
        setDone(true)
    }
        
    var thumbnails = document.getElementById("thumbnails")
    var imgs = thumbnails.getElementsByTagName("img")
    var main = document.getElementById("main")
    var counter = 0;

    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i]


        img.addEventListener("click", function () {
            main.src = this.src
        })

    }
    })


    return(
        <main className="main_product_page">
            
            <div className="product">
                <div className="viewer">
                    <div className="image_list" id="thumbnails">
                        <img src={images[0]} />
                        <img src={images[1]} />
                        <img src={images[2]} />
                        <img src={images[3]} />
                    </div>
                    <div className="product_image">
                        <img src={images[0]} alt={product.name} className='productImageSingle' id="main"></img>
                    </div>

                </div>
                
                <div className="product_description">
                    <div className="product_title">
                        <a>{product.brand} {product.name}</a>
                    </div>
                    <div className="product_pricing">
                        <a className="product_price">{product.price} €</a>
                    </div>
                    <div className="payment">
                        <button className="pay_button" onClick={handler}>Acheter</button>
                        <button className="offer_button">Faire une offre</button>
                    </div>
                    <div className="showmore_box">

                            <input type="checkbox" className="read-more" id="details" />
                            <a className="showmore" for="details">Details <br/><span className="target">Taille : $ <br /> Couleur : $ <br /> Matiere(s) : $</span></a><label for="details" className="showmore_button"></label>

                    </div>
                    <div className="showmore_box">

                        <input type="checkbox" className="read-more" id="authenticite" />
                        <a className="showmore">Authenticité <br /><span className="target">Cet article a franchi l'étape de l'authentification digitale. <br/>Tous les articles sont soumis à un contrôle par notre équipe d'experts.</span></a><label for="authenticite" className="showmore_button"></label>

                    </div>
                    <div className="showmore_box">

                        <input type="checkbox" className="read-more" id="livraison" />
                        <a className="showmore">Livraisons <br /><span className="target"><h5>Livraison Strandard</h5>Livraison en 5 à 10 jours<br/><br/><h5>Livraison Express</h5>Livraison en 3 à 5 jours</span></a><label for="livraison" className="showmore_button"></label>

                    </div>
                    <div className="showmore_box">

                        <input type="checkbox" className="read-more" id="paiements" />
                        <a className="showmore">Moyens de paiement <br /><span className="target">Paiement 100% sécurisé
                        <div className="payment_methods">
                            <img width="36" height="24"  alt="cartebancaire" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/cartebancaire.svg?v=6349738beb4a4"/><img width="36" height="24"  alt="mc" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/mc.svg?v=6349736976a62"/>
                            <img width="36" height="24"  alt="visa" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/visa.svg?v=6349718fa4756"/>   
                                <img width="36" height="24"  alt="paypal" loading="lazy" src="https://images.vestiairecollective.com/payment-method/logo/paypal.svg?v=6349708387d8f"/>    
                        </div>

                        </span></a><label for="paiements" className="showmore_button"></label>
                    </div>
                </div>
                
            </div>
            <div className="description">
                <Link className="account_desc" href="#">
                    <Image className="account_icon" src={IconBoy} alt="IconBoy" width={35} height={35} />
                    <a>Seller Name</a>
                </Link>
                <h4 className="desc_title">Description</h4>
                <p className="desc_txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut quaerat veritatis fugiat repellat doloremque, voluptas et. Reiciendis ullam accusantium ad similique inventore temporibus repellat dolorem, molestiae animi suscipit magni.</p>
            </div>
            <div className="discover">
                <p className="discover_title">Explorez d'autres pistes</p>
                <div className="discover_products">
                    {products.map(products => (
                        <ProductCard
                            id={products.id}
                            image={products.image}
                            name={products.name}
                            brand={products.brand}
                            price={products.price}
                        />
                    ))}
                </div>
            </div>
            
            <div className="">

            </div>
        </main>
    )
}

export default Product
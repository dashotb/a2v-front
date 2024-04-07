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
import { loadStripe } from "@stripe/stripe-js"
import { redirect } from "next/navigation"
import axios from "axios"
import { resolve } from "path"
import { stripe } from "../../../lib/stripe"
import {ImgViewer} from "../../../components/Img_View/Img"
import {ProdDesc} from "../../../components/Prod_desc/ProductDescription"


const Product: NextPage<any> = ({ params }: { params: { Id: string } }) => {
    const productId = params.Id
    const [product, setProduct] = useState<IProduct>({brand: "none", name: "none", price:"none"});
    interface IProduct {
        brand: string;
        name: string;
        price: string
    }
    const [productPriceId, setProductPriceId] = useState<any | null>("")
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

    const [products, setProducts] = useState<any[]>([]);
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
        
    
    })


    return(
        <main className="main_product_page">
            
            <div className="product">
                <div className="viewer">
                    <ImgViewer images={images}/>

                </div>
                
                <div className="product_description">
                    <ProdDesc product={product} handler={handler}/>
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
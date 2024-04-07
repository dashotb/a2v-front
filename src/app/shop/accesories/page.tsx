"use client"
import { NextPage } from "next";
import Image from "next/image";
import FilterSection from "../../../components/FilterSection/FilterSection";
import { ProductCard } from "..//../../components/Product/ProductCard";
import "../shop.scss"
import { useEffect, useState } from "react";
import LeftArrow from "../../../icons/arrow-left.png";
import RightArrow from "../../../icons/arrow-right.png";


const Shop: NextPage = () => {
    const [products, setProducts] = useState<any[]>([]);
    const getProducts = async () => {
        const response = await fetch(`/api/products/accessoire`).then((response) => response.json());
        setProducts(response);
        console.log(response)
    }
    useEffect(() => {
        getProducts()
    }, [])
    console.log(products)


    return (
        <main className="container">
            <div className="title_page">
                <a className="title_page_1">Accessoires</a>
            </div>
            <section className="product-view--sort">
                <div className="filter">
                    <FilterSection />
                </div>
                <div className="main-product">
                    <div className="sort">
                        <div className="sort_by">
                            <a className="widget-title-original">Trier par </a>
                            <select name="cat" id="original" className="postform">
                                <option value="-1">Pertinence</option>
                                <option className="level-0" value="23">Date</option>
                                <option className="level-0" value="29">Prix croissant</option>
                                <option className="level-0" value="26">Prix decroissant</option>
                            </select>
                        </div>
                        <div className="page_nav">
                            <Image src={LeftArrow} alt="" width={15} height={15} />
                            1 2 3 4 5 ... 10
                            <Image src={RightArrow} alt="" width={15} height={15} />
                        </div>
                    </div>
                    <div className='products'>
                        {products.map(products => (
                            <ProductCard
                                id={products.id}
                                image={products.image}
                                name={products.name}
                                brand={products.brand}
                                price={products.price}
                            />
                        ))}

                        {products.map(products => (
                            <ProductCard
                                id={products.id}
                                image={products.image}
                                name={products.name}
                                brand={products.brand}
                                price={products.price}
                            />
                        ))}

                        {products.map(products => (
                            <ProductCard
                                id={products.id}
                                image={products.image}
                                name={products.name}
                                brand={products.brand}
                                price={products.price}
                            />
                        ))}

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
            </section>
        </main>
    )
};

export default Shop;
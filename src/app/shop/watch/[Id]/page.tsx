"use client"
import { NextPage } from "next";
import Image from "next/image";
import FilterSection from "../../../../components/FilterSection/FilterSection";
import Sort from "../../../../components/SortSection/Sort";
import { ProductCard } from "../../../../components/Product/ProductCard";
import "../../shop.scss"
import { useEffect, useState } from "react";
import LeftArrow from "../../../../icons/arrow-left.png";
import RightArrow from "../../../../icons/arrow-right.png";
import Link from "next/link";
import { redirect } from "next/navigation";


const Shop: NextPage<any> = ({ params }: { params: { Id: string } }) => {
    const pageId = params.Id
    const [products, setProducts] = useState<any[]>([]);
    const getProducts = async () => {
        const response = await fetch(`/api/products/watch`).then((response) => response.json());
        setProducts(response);
    }
    useEffect(() => {
        getProducts()
    }, [])

    const index = parseInt(pageId)
    const indexmin = parseInt(pageId) - 1
    const end = Math.floor(products.length / 48)
    var list = []
    var rest = []

    var page_nav = <div></div>

    if (parseInt(pageId) <= 1) {
        return (
            redirect('/shop/watch')
        )
    }


    if (products.length > 0) {
        var render = <div className="products">
            {
                products.map((products, i) => {
                    if (i >= indexmin * 48 && i < index * 48) {
                        return (
                            <ProductCard
                                id={products.id}
                                image={products.image}
                                name={products.name}
                                brand={products.brand}
                                price={products.price}
                            />
                        )
                    }
                })
            }

        </div>
    }

    else {

        var render = <h1 className="products_notfound">Aucun article n'est disponible dans cette catégorie...</h1>;
    }
    if (indexmin * 48 > products.length) {
        var render = <h1 className="products_notfound">Aucun article n'est disponible dans cette catégorie...</h1>;
    }

    for (let step = 1; step < end + 2; step++) {
        list.push(step)
    }

    if (products.length == 0) {
        var page_nav = <div>

        </div>
    }
    if (end > 0) {
        var page_nav = <div className="page_nav">
            {/* <Image src={LeftArrow} alt="" width={15} height={15} /> */}
            {list.map(list => (
                <a><Link href="/shop/watch/[id]" as={`/shop/watch/${list}`}>{list}</Link></a>

            ))}
            <Link href="/shop/watch/1">
                <Image src={RightArrow} alt="" width={15} height={15} />
            </Link>

        </div>
    }
    if (end > 9) {
        for (let i = 1; i < 10; i++) {
            rest.push(i)
        }
        var page_nav = <div className="page_nav">
            <Image src={LeftArrow} alt="" width={15} height={15} />
            {rest.map(rest => (
                <a><Link href="/shop/watch/[id]" as={`/shop/${rest}`}>{rest}</Link></a>

            ))} <a>...</a>
            <a><Link href="/shop/watch/[id]" as={`/shop/${end}`}>{end}</Link></a>
            <Image src={RightArrow} alt="" width={15} height={15} />

        </div>
    }



    return (
        <main className="container">
            <div className="title_page">
                <a className="title_page_1">Tout nos produits</a>
            </div>
            <section className="product-view--sort">
                <div className="filter">
                    <FilterSection />
                </div>
                <div className="main-product">
                    <div className="uncover">
                        <button>
                            Filtres
                        </button>
                        <button>
                            Trier
                        </button>
                    </div>
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
                        {page_nav}
                    </div>
                    {render}
                </div>
            </section>
        </main>
    )
};

export default Shop;
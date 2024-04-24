"use client"
import { NextPage } from "next";
import Image from "next/image";
import FilterSection from "../../components/FilterSection/FilterSection";
import Sort from "../../components/SortSection/Sort";
import {ProductCard} from "../../components/Product/ProductCard";
import "./shop.scss"
import { useEffect, useState } from "react";
import LeftArrow from "../../icons/arrow-left.png";
import RightArrow from "../../icons/arrow-right.png";
import Link from "next/link";



const Shop:NextPage = () => {
    
    //fetch produits/articles
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([])
    const getProducts = async () => {
        const response = await fetch(`/api/products`).then((response) => response.json());
        setProducts(response);
        setFilteredProducts(response)
        console.log(response)
    }
    useEffect(() => {
        getProducts()
    }, [])
    const [brands, setBrands] = useState<any[]>([]);
    const getBrands = async () => {
        const response = await fetch(`/api/brands`).then((response) => response.json());
        setBrands(response);
    }
    useEffect(() => {
        getBrands()
    }, [])

    //filtrer les articles
    const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
    const handleFilterButtonClick = (selectedCategory: any) => {
        if (selectedFilters.includes(selectedCategory)) {
            let brands = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(brands);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };
    useEffect(() => {
        filterItems();
    }, [selectedFilters]);
    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = products.filter((product) => product.brand === selectedCategory);
                return temp;
            });
            setFilteredProducts(tempItems.flat());
        } else {
            setFilteredProducts([...products]);
        }
    };    

    // Choix du numéro de page
    const end = Math.floor(products.length / 48)
    var list = []
    var rest = []

    var page_nav = <div></div>
    
    if (products.length > 0) {
        var render = <div className="products">
            {
                filteredProducts.map((products, i) => {
                    if (i >= 0  && i < 48 ) {
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

    for (let step = 1; step < end+2; step++) {
        list.push(step)
    }

    if (products.length == 0) {
        var page_nav = <div>

        </div>
    }
    if (end > 0){
        var page_nav = <div className="page_nav">
            {list.map(list => (
                <a><Link href="/shop/[id]" as={`/shop/${list}`}>{list}</Link></a>

            ))}
            <Link href="/shop/1">
                <Image src={RightArrow} alt="" width={15} height={15} /> 
            </Link>

        </div>
    }
    if (end > 9) {
        for (let i = 1; i < 10; i++){
            rest.push(i)
        }
        var page_nav = <div className="page_nav">
            <Image src={LeftArrow} alt="" width={15} height={15} />
            {rest.map( rest => (
                <a><Link href="/shop/[id]" as={`/shop/${rest}`}>{rest}</Link></a>

            ))} <a>...</a>
            <a><Link href="/shop/[id]" as={`/shop/${end}`}>{end}</Link></a>
            <Image src={RightArrow} alt="" width={15} height={15} />

        </div>
    }
    
    return(
            <main className="container">
                <div className="title_page">
                    <a className="title_page_1">Tout nos produits</a>
                </div>
                <section className="product-view--sort">
                    <div className="filter">
                    <div className='FilterSection'>
                        <div className='brands'>
                            <h4 className='title'>Marques</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                {brands.map((brand, id) => (
                                    <div>
                                        <label htmlFor={brand.name} key={id}><input className="input" type="checkbox" id={brand.name} name={brand.name} value={brand.name} onClick={() => handleFilterButtonClick(brand.name)} />{brand.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Tailles</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Coloris</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Matieres</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Etat</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Prix</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                                <div>
                                    <input className="input" type="checkbox" id="horns" name="horns" />
                                    <label htmlFor="horns">Horns</label>
                                </div>
                            </div>
                        </div>
                    </div>
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
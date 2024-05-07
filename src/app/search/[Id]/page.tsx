"use client"
import { NextPage } from "next";
import Image from "next/image";
import FilterSection from "../../../components/FilterSection/FilterSection";
import Sort from "../../../components/SortSection/Sort";
import { ProductCard } from "../../../components/Product/ProductCard";
import "../../shop/shop.scss"
import { useEffect, useState } from "react";
import LeftArrow from "../../../icons/arrow-left.png";
import RightArrow from "../../../icons/arrow-right.png";
import Link from "next/link";
import { unescape } from "querystring";



const Shop: NextPage<any> = ({ params }: { params: { Id: string } }) => {

    const title = decodeURI(params.Id)

    //fetch produits/articles + filtres
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([])
    const getProducts = async () => {
        const response = await fetch(`/api/products`).then((response) => response.json());
        const search = response.filter((product: any) => {
            
            return (product.name.toLowerCase().includes(title.toLowerCase()) || product.brand.toLowerCase().includes(title.toLowerCase()));
        })
        setProducts(search);
        setFilteredProducts(search)
        console.log(response)
    }
    const [brands, setBrands] = useState<any[]>([]);
    const getBrands = async () => {
        const response = await fetch(`/api/brands`).then((response) => response.json());
        setBrands(response);
    }
    const [sizes, setSizes] = useState<any[]>([]);
    const getSizes = async () => {
        const response = await fetch(`/api/size`).then((response) => response.json());
        setSizes(response);
    }
    const [colors, setColors] = useState<any[]>([]);
    const getColors = async () => {
        const response = await fetch(`/api/colors`).then((response) => response.json());
        setColors(response);
    }
    const [materials, setMaterials] = useState<any[]>([]);
    const getMaterials = async () => {
        const response = await fetch(`/api/materials`).then((response) => response.json());
        setMaterials(response);
    }
    const [states, setStates] = useState<any[]>([]);
    const getStates = async () => {
        const response = await fetch(`/api/states`).then((response) => response.json());
        setStates(response);
    }
    useEffect(() => {
        getBrands(),
            getSizes(),
            getColors(),
            getMaterials(),
            getStates(),
            getProducts()
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

    const [selectedFiltersSize, setSelectedFiltersSize] = useState<any[]>([]);
    const handleFilterSizeButtonClick = (selectedCategory: any) => {
        if (selectedFiltersSize.includes(selectedCategory)) {
            let sizes: any = selectedFiltersSize.filter((el) => el !== selectedCategory);
            setSelectedFiltersSize(sizes);
        } else {
            setSelectedFiltersSize([...selectedFiltersSize, selectedCategory]);
        }
    };
    useEffect(() => {
        filterSizeItems();
    }, [selectedFiltersSize]);
    const filterSizeItems = () => {
        if (selectedFiltersSize.length > 0) {
            let tempItems = selectedFiltersSize.map((selectedCategory) => {
                let temp = products.filter((product) => product.size === selectedCategory);
                return temp;
            });
            setFilteredProducts(tempItems.flat());
        } else {
            setFilteredProducts([...products]);
        }
    };

    // Trier les articles
    const Sort = async (sorting: any) => {
        if (sorting == "date") {
            setFilteredProducts(filteredProducts.sort((a, b) => parseFloat(a.createdAt) - parseFloat(b.createdAt)).flat())
        }
        if (sorting == "ascending") {
            setFilteredProducts(filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)).flat())
        }
        if (sorting == "descending") {
            setFilteredProducts(filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)).flat())
        }
    }

    // Choix du numéro de page
    const end = Math.floor(products.length / 48)
    var list = []
    var rest = []

    var page_nav = <div></div>

    if (products.length > 0) {
        var render = <div className="products">
            {
                filteredProducts.map((products, i) => {
                    if (i >= 0 && i < 48) {
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

        var render = <h1 className="products_notfound">Aucun article disponible...</h1>;
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
            {list.map(list => (
                <a><Link href="/shop/[id]" as={`/shop/${list}`}>{list}</Link></a>

            ))}
            <Link href="/shop/1">
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
                <a><Link href="/shop/[id]" as={`/shop/${rest}`}>{rest}</Link></a>

            ))} <a>...</a>
            <a><Link href="/shop/[id]" as={`/shop/${end}`}>{end}</Link></a>
            <Image src={RightArrow} alt="" width={15} height={15} />

        </div>
    }

    return (
        <main className="container">
            <div className="title_page">
                <a className="title_page_1">{title}</a>
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
                                {sizes.map((size, id) => (
                                    <div>
                                        <label htmlFor={size.name} key={id}><input className="input" type="checkbox" id={size.name} name={size.name} value={size.name} onClick={() => handleFilterSizeButtonClick(size.name)} />{size.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Coloris</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                {colors.map((color, id) => (
                                    <div>
                                        <label htmlFor={color.name} key={id}><input className="input" type="checkbox" id={color.name} name={color.name} value={color.name} onClick={() => handleFilterButtonClick(color.name)} />{color.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Matieres</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                {materials.map((material, id) => (
                                    <div>
                                        <label htmlFor={material.name} key={id}><input className="input" type="checkbox" id={material.name} name={material.name} value={material.name} onClick={() => handleFilterButtonClick(material.name)} />{material.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='brands'>
                            <h4 className='title'>Etat</h4>
                            <input type='searchbox' className='input_search' placeholder="Rechercher" />
                            <div className='brands_list'>
                                {states.map((state, id) => (
                                    <div>
                                        <label htmlFor={state.name} key={id}><input className="input" type="checkbox" id={state.name} name={state.name} value={state.name} onClick={() => handleFilterButtonClick(state.name)} />{state.name}</label>
                                    </div>
                                ))}
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
                            <select name="cat" id="original" className="postform" onChange={e => Sort(e.target.value)}>
                                <option value="-1">Pertinence</option>
                                <option className="level-0" value="23">Date</option>
                                <option className="level-0" value="ascending">Prix croissant</option>
                                <option className="level-0" value="descending">Prix decroissant</option>
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
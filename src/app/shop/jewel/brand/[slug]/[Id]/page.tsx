"use client"
import { NextPage } from "next";
import Image from "next/image";
import FilterSection from "../../../../../../components/FilterSection/FilterSection";
import Sort from "../../../../../../components/SortSection/Sort";
import { ProductCard } from "../../../../../../components/Product/ProductCard";
import "../../../../shop.scss"
import { useEffect, useState } from "react";
import LeftArrow from "../../../../../../icons/arrow-left.png";
import RightArrow from "../../../../../../icons/arrow-right.png";
import Link from "next/link";
import { redirect } from "next/navigation";




const Shop: NextPage<any> = ({ params }: { params: { Id: string, slug: string } }) => {
    const pageId = params.Id
    const pageSlug = params.slug
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([])
    const getProducts = async () => {
        const response = await fetch(`/api/products/jewel/brand/${pageSlug}`).then((response) => response.json());
        setProducts(response);
        setFilteredProducts(response)
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
    const [selectedFiltersSize, setSelectedFiltersSize] = useState<any[]>([]);
    const handleFilterSizeButtonClick = (selectedCategory: any) => {
        if (selectedFiltersSize.includes(selectedCategory)) {
            let sizes: any = selectedFiltersSize.filter((el) => el !== selectedCategory);
            setSelectedFiltersSize(sizes);
        } else {
            setSelectedFiltersSize([...selectedFiltersSize, selectedCategory]);
        }
    };
    const [selectedFiltersColor, setSelectedFiltersColor] = useState<any[]>([]);
    const handleFilterColorButtonClick = (selectedCategory: any) => {
        if (selectedFiltersColor.includes(selectedCategory)) {
            let colors: any = selectedFiltersColor.filter((el) => el !== selectedCategory);
            setSelectedFiltersColor(colors);
        } else {
            setSelectedFiltersColor([...selectedFiltersColor, selectedCategory]);
        }
    };
    const [selectedFiltersMaterial, setSelectedFiltersMaterial] = useState<any[]>([]);
    const handleFilterMaterialButtonClick = (selectedCategory: any) => {
        if (selectedFiltersMaterial.includes(selectedCategory)) {
            let materials: any = selectedFiltersMaterial.filter((el) => el !== selectedCategory);
            setSelectedFiltersMaterial(materials);
        } else {
            setSelectedFiltersMaterial([...selectedFiltersMaterial, selectedCategory]);
        }
    };
    const [selectedFiltersState, setSelectedFiltersState] = useState<any[]>([]);
    const handleFilterStateButtonClick = (selectedCategory: any) => {
        if (selectedFiltersState.includes(selectedCategory)) {
            let states: any = selectedFiltersState.filter((el) => el !== selectedCategory);
            setSelectedFiltersState(states);
        } else {
            setSelectedFiltersState([...selectedFiltersState, selectedCategory]);
        }
    };
    const [lowerPrice, setLowerPrice] = useState(0)
    const handleFilterLowerPrice = (e: any) => {
        if (Number.isNaN(parseInt(e))) {
            setLowerPrice(0)
        }
        else {
            setLowerPrice(parseInt(e))
        }
    }
    const [higherPrice, setHigherPrice] = useState(1000000)
    const handleFilterHigherPrice = (e: any) => {
        if (Number.isNaN(parseInt(e))) {
            setHigherPrice(1000000)
        }
        else {
            setHigherPrice(parseInt(e))
        }
    }
    useEffect(() => {
        filterItems();
    }, [selectedFilters, selectedFiltersSize, selectedFiltersColor, selectedFiltersMaterial, selectedFiltersState, lowerPrice, higherPrice]);
    const filterItems = () => {


        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = filteredProducts.filter((product) => product.brand === selectedCategory && lowerPrice <= product.price && higherPrice >= product.price);
                return temp;
            });
            setFilteredProducts(tempItems.flat());
            if (selectedFiltersSize.length > 0) {
                let tempItems = selectedFiltersSize.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.size === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
                if (selectedFiltersColor.length > 0) {
                    let tempItems = selectedFiltersSize.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.color === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                    if (selectedFiltersMaterial.length > 0) {
                        let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                            let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                            return temp;
                        });
                        setFilteredProducts(tempItems.flat());
                        if (selectedFiltersState.length > 0) {
                            let tempItems = selectedFiltersState.map((selectedCategory) => {
                                let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                                return temp;
                            });
                            setFilteredProducts(tempItems.flat());
                        }
                    }
                    else if (selectedFiltersState.length > 0) {
                        let tempItems = selectedFiltersState.map((selectedCategory) => {
                            let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                            return temp;
                        });
                        setFilteredProducts(tempItems.flat());
                    }
                }
                else if (selectedFiltersMaterial.length > 0) {
                    let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                    if (selectedFiltersState.length > 0) {
                        let tempItems = selectedFiltersState.map((selectedCategory) => {
                            let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                            return temp;
                        });
                        setFilteredProducts(tempItems.flat());
                    }
                }
                else if (selectedFiltersState.length > 0) {
                    let tempItems = selectedFiltersState.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                }
            }
            else if (selectedFiltersColor.length > 0) {
                let tempItems = selectedFiltersSize.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.color === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
                if (selectedFiltersMaterial.length > 0) {
                    let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                    if (selectedFiltersState.length > 0) {
                        let tempItems = selectedFiltersState.map((selectedCategory) => {
                            let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                            return temp;
                        });
                        setFilteredProducts(tempItems.flat());
                    }
                }
                else if (selectedFiltersState.length > 0) {
                    let tempItems = selectedFiltersState.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                }
            }
            else if (selectedFiltersMaterial.length > 0) {
                let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
                if (selectedFiltersState.length > 0) {
                    let tempItems = selectedFiltersState.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                }
            }
            else if (selectedFiltersState.length > 0) {
                let tempItems = selectedFiltersState.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
            }
        }
        else if (selectedFiltersSize.length > 0) {
            let tempItems = selectedFiltersSize.map((selectedCategory) => {
                let temp = filteredProducts.filter((product) => product.size === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                return temp;
            });
            setFilteredProducts(tempItems.flat());
            if (selectedFiltersColor.length > 0) {
                let tempItems = selectedFiltersSize.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.color === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
                if (selectedFiltersMaterial.length > 0) {
                    let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                    if (selectedFiltersState.length > 0) {
                        let tempItems = selectedFiltersState.map((selectedCategory) => {
                            let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                            return temp;
                        });
                        setFilteredProducts(tempItems.flat());
                    }
                }
                else if (selectedFiltersState.length > 0) {
                    let tempItems = selectedFiltersState.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                }
            }
            else if (selectedFiltersMaterial.length > 0) {
                let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
                if (selectedFiltersState.length > 0) {
                    let tempItems = selectedFiltersState.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                }
            }
            else if (selectedFiltersState.length > 0) {
                let tempItems = selectedFiltersState.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
            }
        }
        else if (selectedFiltersColor.length > 0) {
            let tempItems = selectedFiltersSize.map((selectedCategory) => {
                let temp = filteredProducts.filter((product) => product.color === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                return temp;
            });
            setFilteredProducts(tempItems.flat());
            if (selectedFiltersMaterial.length > 0) {
                let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
                if (selectedFiltersState.length > 0) {
                    let tempItems = selectedFiltersState.map((selectedCategory) => {
                        let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                        return temp;
                    });
                    setFilteredProducts(tempItems.flat());
                }
            }
            else if (selectedFiltersState.length > 0) {
                let tempItems = selectedFiltersState.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
            }
        }
        else if (selectedFiltersMaterial.length > 0) {
            let tempItems = selectedFiltersMaterial.map((selectedCategory) => {
                let temp = filteredProducts.filter((product) => product.material === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                return temp;
            });
            setFilteredProducts(tempItems.flat());
            if (selectedFiltersState.length > 0) {
                let tempItems = selectedFiltersState.map((selectedCategory) => {
                    let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                    return temp;
                });
                setFilteredProducts(tempItems.flat());
            }
        }
        else if (selectedFiltersState.length > 0) {
            let tempItems = selectedFiltersState.map((selectedCategory) => {
                let temp = filteredProducts.filter((product) => product.state === selectedCategory.toLowerCase() && lowerPrice <= product.price && higherPrice >= product.price);
                return temp;
            });
            setFilteredProducts(tempItems.flat());
        }
        else {
            setFilteredProducts([...products.filter((product) => lowerPrice <= product.price && higherPrice >= product.price)]);
        }
    };

    // Choix du numéro de page
    const index = parseInt(pageId)
    const indexmin = parseInt(pageId) - 1
    const end = Math.floor(products.length / 48)
    var list = []
    var rest = []

    var page_nav = <div></div>

    if (parseInt(pageId) <= 1) {
        return (
            redirect('/shop')
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
    const s = pageSlug.replace(/([A-Z])/g, ' $1').trim()

    return (
        <main className="container">
            <div className="title_page">
                <a className="title_page_1">{s}</a>
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
                                        <label htmlFor={size.name} key={id}><input className="input" type="checkbox" id={size.name} name={size.name} value={size.name} onClick={() => handleFilterButtonClick(size.name)} />{size.name}</label>
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
}

export default Shop;
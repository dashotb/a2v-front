'use client'
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.scss";
import Link from "next/link"
import IconBoy from "../../../public/IconBoy.png"
import logo from "../../../public/logo.png"
import Image from "next/image";
import search from "../../../public/search.png"
import {SearchBox} from "../SearchBox/SearchBox.js"

export const Navbar:React.FC = () => {


  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  //Bar de recherche
  const [products, setProducts] = useState<any[]>([]);
  const getProducts = async () => {

    const response = await fetch(`/api/products`).then((response) => response.json());
    setProducts(response);
    console.log(response)
  }
  const [brands, setBrands] = useState<any[]>([]);
  const getBrands = async () => {

    const response = await fetch(`/api/brands`).then((response) => response.json());
    setBrands(response);
    console.log(response)
  }
  useEffect(() => {
    getProducts(),
      getBrands()
  }, [])
  const [searchVal, setSearchVal] = useState('');
  const [render, setRender] = useState(<></>)

  const handleInput = (e: any) => {
    setSearchVal(e.target.value);
    const filteredProducts = products.filter((product: any) => {
      if (e.target.value == '') {
        return false
      }
      return (product.name.toLowerCase().includes(e.target.value.toLowerCase()) || product.brand.toLowerCase().includes(e.target.value.toLowerCase()));
    });

    const filteredBrands = brands.filter((brands: any) => {
      if (e.target.value == '') {
        return false
      }
      return brands.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    const result =
      <div className="results-wrap" >
        <div className="results-wrap-cols">
          <h4>Articles</h4>
          <ul>
            {filteredProducts.map((product: any) => {
              return (
                <li key={product} className='list-item'><Link href="/search/[id]" as={`/search/${product.name}`}>{product.name}</Link></li>)
            })}
          </ul>
        </div>
        <div className="results-wrap-cols">
          <h4>Marques</h4>
          <ul>
            {filteredBrands.map((brand: any) => {
              return (
                <li key={brand} className='list-item'><Link href="/shop/brand/[id]" as={`/shop/brand/${brand.name}`}>{brand.name}</Link></li>)
            })}
          </ul>
        </div>

      </div >
    setRender(result)
  }

  const handleClearBtn = () => {
    setTimeout(() => {
      setSearchVal('');
      var result = <></>
      setRender(result)

    }, 200)
  }

  return (

    <main className="many">
      <header className="header">
        <div className="header__content">
          <div className="wrap-search">
            <div className="search-box">
              <button className="btn-search"><Image src={search} alt="search-logo" width={25} height={25} className="icon-search" /></button>
              <input type="text" 
                className="input-search" 
                placeholder="Rechercher"
                onChange={handleInput}
                onBlur={handleClearBtn}
                value={searchVal}
                name="product-search"
                id="product-search"
               />
            </div>
               
          </div>
          <Link href="/" className="header__content__logo">
            <Image src={logo} width={100} height={100} alt="logo"/>
          </Link>
          
            <nav
              className={`${"header__content__nav"} 
              ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
              }`}
            >
              <ul>
                
                <Link href="/account">
                  <button className="btn"><Image src={IconBoy} alt="IconBoy" width={35} height={35}/></button>
                </Link>
                
              </ul>
            </nav>
          
          <div className="header__content__toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
      {render}
      <div className="navbar">
        <div className="navbar__list">
          <div className="dropdown">
            <button className="dropbtn"><a href="/shop/men">Homme</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h4>Vetements</h4>
                  <div className="column-grid">
                    <a href="/shop/men/apparel/coat">Manteaux</a>
                    <a href="/shop/men/apparel/suit">Costumes</a>
                    <a href="/shop/men/apparel/jacket">Vestes</a>
                    <a href="/shop/men/apparel/pant">Pantalons</a>
                    <a href="/shop/men/apparel/shirt">Chemises</a>
                    <a href="/shop/men/apparel/jean">Jeans</a>
                    <a href="/shop/men/apparel/sweater">Pulls</a>
                    <a href="/shop/men/apparel/short">Shorts</a>
                    <a href="/shop/men/apparel/polo">Polos</a>
                  </div>
                </div>
                <div className="column">
                  <h4>Chaussures</h4>
                    <a href="/shop/men/shoe/sneaker">Sneakers</a>
                    <a href="/shop/men/shoe/street">Ville</a>
                    <a href="/shop/men/shoe/boot">Bottes & bottines</a>
                    <a href="/shop/men/shoe/moccasin">Mocassins</a>
                    <a href="/shop/men/shoe/sandal">Sandales</a>
                </div>
                <div className="column">
                  <h4>Accessoires</h4>
                  <div className="column-grid">
                    <a href="/shop/men/accessory/glasses">Lunettes</a>
                    <a href="/shop/men/accessory/hat">Chapeaux</a>
                    <a href="/shop/men/accessory/belt">Ceintures</a>
                    <a href="/shop/men/accessory/scarf">Echarpes</a>
                    <a href="/shop/men/accessory/wallet">Portefeuilles</a>
                    <a href="/shop/men/accessory/glove">Gants</a>
                    <a href="/shop/men/accessory/littleleather">Petite maroquinerie</a>
                    <a href="/shop/men/accessory/tie">Cravates</a>
                    <a href="/shop/men/accessory/cufflink">Bouttons de manchette</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn"><a href="/shop/women">Femme</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h4>Vetements</h4>
                  <div className="column-grid">
                    <a href="/shop/women/apparel/coat">Manteaux</a>
                    <a href="/shop/women/apparel/suit">Combinaisons</a>
                    <a href="/shop/women/apparel/jacket">Vestes</a>
                    <a href="/shop/women/apparel/pant">Pantalons</a>
                    <a href="/shop/women/apparel/dress">Robes</a>
                    <a href="/shop/women/apparel/jean">Jeans</a>
                    <a href="/shop/women/apparel/sweater">Pulls</a>
                    <a href="/shop/women/apparel/underwear">Lingeries</a>
                    <a href="/shop/women/apparel/top">Hauts</a>
                  </div>
                </div>
                <div className="column">
                  <h4>Chaussures</h4>
                  <a href="/shop/women/shoe/sneaker">Sneakers</a>
                  <a href="/shop/women/shoe/heel">Chaussure à talons</a>
                  <a href="/shop/women/shoe/boot">Bottes & bottines</a>
                  <a href="/shop/women/shoe/moccasin">Mocassins</a>
                  <a href="/shop/women/shoe/sandal">Sandales</a>
                </div>
                <div className="column">
                  <h4>Accessoires</h4>
                  <div className="column-grid">
                  <a href="/shop/women/accessory/glasses">Lunettes</a>
                  <a href="/shop/women/accessory/hat">Chapeaux</a>
                  <a href="/shop/women/accessory/belt">Ceintures</a>
                  <a href="/shop/women/accessory/silkscarf">Carrés de soie</a>
                  <a href="/shop/women/accessory/wallet">Portefeuilles</a>
                  <a href="/shop/women/accessory/glove">Gants</a>
                  <a href="/shop/women/accessory/littleleather">Petite maroquinerie</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn"><a href="/shop/leather">Maroquinnerie</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h4>Sacs & pochettes</h4>
                  <div className="column-grid">
                    <a href="/shop/leather/bag/handbag">Sacs à main</a>
                    <a href="/shop/leather/bag/messenger">Messengers</a>
                    <a href="/shop/leather/bag/shoulderbag">Sacs porté épaule</a>
                    <a href="/shop/leather/bag/purse">Sacoches</a>
                    <a href="/shop/leather/bag/">Sacs à bandoulière</a>
                    <a href="/shop/leather/bag/pouch">Pochettes</a>
                    <a href="/shop/leather/bag/travelbag">Sacs de voyage</a>
                    <a href="/shop/leather/bag/shoppingbag">Cabas</a>
                    <a href="/shop/leather/bag/backpack">Sacs à dos</a>
                  </div>
                </div>
                <div className="column">
                  <h4>Petite maroquinnerie</h4>
                  <div className="column-grid">  
                    <a href="/shop/leather/littleleather/wallet">Portefeuilles</a>
                    <a href="/shop/leather/littleleather/phonecase">Etuis téléphone</a>
                    <a href="/shop/leather/littleleather/cardholder">Porte-cartes</a>
                    <a href="/shop/leather/littleleather/glassescase">Etuis à lunette</a>
                    <a href="/shop/leather/littleleather/notebookcover">Couvertures cahier</a>
                    <a href="/shop/leather/littleleather/kit">Trousses & pochettes</a>
                    <a href="/shop/leather/littleleather/keyring">Porte-clés</a>
                    <a href="/shop/leather/littleleather/grigri">Grigris</a>
                    <a href="/shop/leather/littleleather/">Autres</a>
                  </div>
                </div>
                <div className="column">
                  <h4>Marques</h4>
                  <a href="/shop/leather/brand/Hermes">Hermes</a>
                  <a href="/shop/leather/brand/LouisVuitton">Louis-Vuitton</a>
                  <a href="/shop/leather/brand/Chanel">Chanel</a>
                  <a href="/shop/leather/brand/Goyard">Goyard</a>
                  <a href="/shop/leather/brand/Dior">Dior</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn"><a href="/shop/jewel">Bijoux</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h4>Types</h4>
                  <a href="/shop/jewel/type/bracelet">Bracelets</a>
                  <a href="/shop/jewel/type/necklace">Colliers</a>
                  <a href="/shop/jewel/type/earring">Boucles d'Oreille</a>
                  <a href="/shop/jewel/type/ring">Bagues</a>
                </div>
                <div className="column">
                  <h4>Materiaux</h4>
                  <a href="/shop/jewel/material/diamond">Diamant</a>
                  <a href="/shop/jewel/material/gold">Or</a>
                  <a href="/shop/jewel/material/silver">Argent</a>
                  <a href="/shop/jewel/material/aluminium">Aluminium</a>
                </div>
                <div className="column">
                  <h4>Marques</h4>
                  <a href="/shop/jewel/brand/Tiffany&Co">Tiffany & Co</a>
                  <a href="/shop/jewel/brand/VanCleef&Arpels">Van Cleef & Arpels</a>
                  <a href="/shop/jewel/brand/Piaget">Piaget</a>
                  <a href="/shop/jewel/brand/Bvlgari">Bvlgari</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn"><a href="/shop/watch">Montres</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h4>Mechanismes</h4>
                  <a href="/shop/watch/mechanism/quartz">Quartz</a>
                  <a href="/shop/watch/mechanism/gmt">GMT</a>
                  <a href="/shop/watch/mechanism/chronograph">Chronograph</a>
                  <a href="/shop/watch/mechanism/tourbillon">Tourbillon</a>
                  <a href="/shop/watch/mechanism/moonphases">Phases de Lune</a>
                </div>
                <div className="column">
                  <h4>Styles</h4>
                  <a href="/shop/watch/style/vintage">Vintage</a>
                  <a href="/shop/watch/style/diving">Plongée</a>
                  <a href="/shop/watch/style/pilot">Pilote</a>
                  <a href="/shop/watch/style/military">Militaire</a>
                  <a href="/shop/watch/style/swiss">Suisse</a>
                </div>
                <div className="column">
                  <h4>Marques</h4>
                  <a href="/shop/watch/brand/AudemarsPiguet">Audemars Piguet</a>
                  <a href="/shop/watch/brand/PatekPhilippe">Patek Philippe</a>
                  <a href="/shop/watch/brand/Rolex">Rolex</a>
                  <a href="/shop/watch/brand/Omega">Omega</a>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn"><a href="/shop/accesory">Accessoires</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              
              <div className="row">
                <div className="column">
                  <h3>Category 1</h3>
                  <a href="#">Porte Clés</a>
                  <a href="#">Accessoire de Sac</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Autres
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h3>Category 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div className="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </main>
  );
}


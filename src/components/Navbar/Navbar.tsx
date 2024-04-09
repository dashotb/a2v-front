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

  return (

    <main className="many">
      <header className="header">
        <div className="header__content">
          <div className="wrap-search">
            <div className="search-box">
              <button className="btn-search"><Image src={search} alt="search-logo" width={25} height={25} className="icon-search" /></button>
              <input type="text" className="input-search" placeholder="Rechercher" />
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
      <div className="navbar">
        <div className="navbar__list">
          <div className="dropdown">
            <button className="dropbtn">Homme
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
                  <h4>Vetements</h4>
                  <div className="column-grid">
                    <a href="#">Link 2</a>
                    <a href="#">Link 1</a>
                    <a href="#">Link 3</a>
                  </div>
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
            <button className="dropbtn">Femme
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h4>Vetements</h4>
                  <div className="column-grid">
                    <a href="#">Manteaux</a>
                    <a href="#">Combinaisons</a>
                    <a href="#">Vestes</a>
                    <a href="#">Pantalons</a>
                    <a href="#">Robes</a>
                    <a href="#">Jeans</a>
                    <a href="#">Pulls</a>
                    <a href="#">Lingeries</a>
                    <a href="#">Hauts</a>
                  </div>
                </div>
                <div className="column">
                  <h4>Chaussures</h4>
                  <a href="#">Sneakers</a>
                  <a href="#">Chaussure à talons</a>
                  <a href="#">Bottes et bottines</a>
                  <a href="#">Sandales</a>
                  <a href="#">Mocassins</a>
                </div>
                <div className="column">
                  <h4>Accessoires</h4>
                  <div className="column-grid">
                  <a href="#">Lunettes</a>
                  <a href="#">Chapeaux</a>
                  <a href="#">Ceintures</a>
                  <a href="#">Carrés de soie</a>
                  <a href="#">Portefeuilles</a>
                  <a href="#">Gants</a>
                  <a href="#">Petite maroquinerie</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Maroquinnerie
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
          <div className="dropdown">
            <button className="dropbtn"><a href="/shop">Bijoux</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <a href="#">Bracelet</a>
                  <a href="#">Collier</a>
                  <a href="#">Boucle d'Oreille</a>
                </div>
                <div className="column">
                  <a href="#">Bague</a>
                </div>
                <div className="column">
                  <h4>Marque</h4>
                  <a href="#">Tiffany & Co</a>
                  <a href="#">Van Cleef & Arpels</a>
                  <a href="#">Piaget</a>

                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn"><a href="">Montres</a>
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h4>Mechanisme</h4>
                  <a href="#">Quartz</a>
                  <a href="#">GMT</a>
                  <a href="#">Chronograph</a>
                  <a href="#">Tourbillon</a>
                  <a href="#">Phases de Lune</a>
                </div>
                <div className="column">
                  <h4>Style</h4>
                  <a href="#">Vintage</a>
                  <a href="#">Plongée</a>
                  <a href="#">Pilote</a>
                  <a href="#">Militaire</a>
                  <a href="#">Suisse</a>
                </div>
                <div className="column">
                  <h4>Marque</h4>
                  <a href="#">Audemars Piguet</a>
                  <a href="#">Patek Philippe</a>
                  <a href="#">Rolex</a>
                  <a href="#">Omega</a>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Accessoires
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
            <button className="dropbtn">Pieces Uniques
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


"use client"
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { ProductCard } from '../components/Product/ProductCard'
import { BrandCard } from "../components/Brand/BrandCard"
import { Test } from './test/Vitrine'
import infos from "../../public/infos.png"
import Image from 'next/image'

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const getProducts = async () => {
    
    const response = await fetch(`/api/products`).then((response) => response.json());
    setProducts(response);
    console.log(response)
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Test/>
      
    <main className={styles.main}>

      <section className={styles.hero}>
          
            <h1 className={styles.title} id='#'>Nouveautés</h1>
            <div className={styles.container}>
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

            <h1 className={styles.titles} id='#'>Marques</h1>
            <div className={styles.container}>
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

            <div className={styles.buyorsell}>
              <div className={styles.buy}>
                  
                <div className={styles.buy__buy}>
                  <h2>Qui sommes-nous ? <br /><br /></h2>
                  <p className={styles.buy__text}>Apprenez-en plus sur A2V.com, <br /> la marketplace française du luxe neuf et d'occasion <br /> <br /></p>
                  <div>
                  <button className={styles.buy__btn}>En savoir plus</button>
                  </div>
                </div>
              </div>
              <div className={styles.buy}>
                <div className={styles.buy__sell}>
                  <h2>Vendre un article <br /> <br /></h2>
                  <p className={styles.buy__text}>Voir les avantages et les conditions de ventes d'articles sur A2V.com</p>
                <button className={styles.buy__btn}>En savoir plus</button>
                </div>
              </div>
            </div>

            {/* <div className={styles.newsletter}>
              <div className={styles.newsletter__inside}>
                <h1>Inscrivez-vous à notre NewsLetter</h1>
                <p>Et vous serrez tenus au courrant des offres et nouveautés par mail </p>
                <input type="text" />
              </div>
            </div> */}
        

        {/* <div className={styles.vitrine}>
          <div className={styles.vitrine__text}>
            <h1>«Access-To-Vintage»</h1><br/>
            <p> Here is the hero</p>
          </div>
      
          <img className={styles.vitrine__img} src='https://media.tiffany.com/is/image/tiffanydm/T-HP-FWMH-1Alt-Desktop?$tile$&wid=2992&fmt=webp'   alt='carouse'/> 
        </div>  */}

       

        

      
      </section>

    </main>
    </>
  )
}

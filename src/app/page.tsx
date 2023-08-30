import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.scss'
import Footer from '../components/Footer/Footer'
import Annonce from '../components/Annonces/Annonce'
import H from "../../public/H.png"
import LV from "../../public/LV.png"
import C from "../../public/C.png"
import G from "../../public/G.png"
import M from "../../public/M.png"
import kellys from "../../public/Kellys.png"


export default function Home() {
  return (
    <main className={styles.main}>
      

      
      <section className={styles.nav}>
        <ul className={styles.nav__list}>
        
          <div className={styles.nav__list__dropdown}><Link href="/shop/jewels" style={{ color: styles.mainColor }}><br />Bijoux<br /><p>_______</p></Link>
            <ul>
              <li><a href="#">Bagues</a></li>
              <li><a href="#">Colliers</a></li>
              <li><a href="#">Bracelets</a></li>
              <li><a href="#">Boucles d'oreille</a></li>
              
            </ul>
          </div>
        
          
          <div className={styles.nav__list__dropdown}><Link href="/shop/watches" style={{color: styles.mainColor}}><br />Montres<br /><p>_________</p></Link>
            <ul>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Classique</a></li>
              
            </ul>
          </div>
          
          
          <div className={styles.nav__list__dropdown}><Link href="/shop/accesories" style={{color: styles.mainColor}}><br />Accessoires<br /><p>_____________</p></Link>
            <ul>
              <li><a href="#">Porte clefs</a></li>
              <li><a href="#">Etuis</a></li>
              <li><a href="#">Lunettes</a></li>
              <li><a href="#">Stylos</a></li>
              <li><a href="#">Briquets</a></li>
            </ul>
          </div>  
          
          
          <div className={styles.nav__list__dropdown}><Link href="/shop/one-of-one" style={{color: styles.mainColor}}><br />Pieces Uniques<br /><p>________________</p></Link>
            <ul>
              <li><a href="#">Information</a></li>
              
            </ul>
          </div>
          
          
          <div className={styles.nav__list__dropdown}><Link href="/shop/leathers" style={{ color: styles.mainColor }}><br />Maroquinnerie<br /><p>_______________</p></Link>
            <ul>
              <li><a href="#">Sac a main</a></li>
              <li><a href="#">Sac</a></li>
              <li><a href="#">Portefeuilles</a></li>
              
            </ul>
          </div>  
          
          
          <div className={styles.nav__list__dropdown}><Link href="/shop/home" style={{ color: styles.mainColor }}><br />Decoration<br /><p>____________</p></Link>
            <ul>
              <li><a href="#">Rideaux</a></li>
              <li><a href="#">School Profile</a></li>
              <li><a href="#">Attendance</a></li>
              <li><a href="#">Announcements</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div> 
          
          
          <div className={styles.nav__list__dropdown}><Link href="/shop/clothes" style={{ color: styles.mainColor }}><br />Vetements<br /><p>____________</p></Link>
            <ul>
              <li><a href="#">Chapeaux</a></li>
              <li><a href="#">Vestes</a></li>
              <li><a href="#">Hauts</a></li>
              <li><a href="#">Bas</a></li>
              <li><a href="#">Chaussures</a></li>
            </ul>
          </div>  
          
        </ul>
      </section>

      <Annonce/>

      <section className={styles.hero}>

        <div className={styles.vitrine}>

          <div className={styles.vitrine__text}>
            <h1>«Access-To-Vintage»</h1><br/>
            <p> Here is the hero</p>
          </div>
      
          <img src='https://media.tiffany.com/is/image/tiffanydm/T-HP-FWMH-1Alt-Desktop?$tile$&wid=2992&fmt=webp' width={540} height={303} alt='carousel'/>

           

        </div>

        <h1 className={styles.titles} id='#'>Nos marques :</h1><br/>
        <div className={styles.brands}>
          <div className={styles.brands__content}>
            <Image src={H} width={150} height={150} alt="Thumbnail"/>
          </div>
          <div className={styles.brands__content}>
            <Image src={LV} width={150} height={150} alt="Thumbnail" />
          </div>
          <div className={styles.brands__content}>
            <Image src={C} width={150} height={150} alt="Thumbnail"/>
          </div>
          <div className={styles.brands__content}>
            <Image src={G} width={150} height={150} alt="Thumbnail"/>
          </div>
          <div className={styles.brands__content}>
            <Image src={M} width={150} height={150} alt="Thumbnail"/>
          </div>
          

        </div>

        <br/><br/><h1 className={styles.titles}>Les plus prisés :</h1><br/>
        <div className={styles.brands}>
          <div className={styles.brands__content}>
            <Image src={kellys} width={150} height={150} alt="Thumbnail" />
          </div>
          <div className={styles.brands__content}>
            <Image src={kellys} width={150} height={150} alt="Thumbnail" />
          </div>
          <div className={styles.brands__content}>
            <Image src={kellys} width={150} height={150} alt="Thumbnail" />
          </div>
          <div className={styles.brands__content}>
            <Image src={kellys} width={150} height={150} alt="Thumbnail" />
          </div>
          <div className={styles.brands__content}>
            <Image src={kellys} width={150} height={150} alt="Thumbnail" />
          </div>
        </div>
        <br/><br/>

      </section>

      <Footer/>

    </main>
  )
}

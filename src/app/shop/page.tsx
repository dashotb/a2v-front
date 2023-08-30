import { NextPage } from "next";
import styles from "../../app/styles.module.scss"
import { Navbar } from "../../components/Navbar/Navbar";

const Shop:NextPage = () => {
    return(
            <main className={styles.main}>
                <h1>Welcome to Shop</h1>
            </main>
    )
}

export default Shop;
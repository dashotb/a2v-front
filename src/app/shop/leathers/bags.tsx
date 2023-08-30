import { NextPage } from "next";
import styles from "../../../app/styles.module.scss"
import {Navbar} from "../../../components/Navbar/Navbar";

const Bags:NextPage = () => {
    return(
        <>
            <Navbar/>
            <main className={styles.main}>
                <h1>Welcome to bags</h1>
            </main>
        </>
    )
}

export default Bags;
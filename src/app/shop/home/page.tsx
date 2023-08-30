import { NextPage } from "next";
import styles from "../../../app/styles.module.scss"

const Home:NextPage = () => {
    return(
        <>
            <main className={styles.main}>
                <h1>Welcome to Home</h1>
            </main>
        </>
    )
}

export default Home;
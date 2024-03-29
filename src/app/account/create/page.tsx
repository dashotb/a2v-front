"use client"
import { useState } from "react"
import "./styles.scss"
import { redirect, useSearchParams, useRouter } from "next/navigation"


export default function Create() {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/account/login";

    const submitPost = async () => {
        if (name.length > 2 && pass.length > 2) {
            let body = {
                email: name,
                password: pass

            }
            try {
                setLoading(true);
                await fetch(`/api/user`, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(body)
                })
                setLoading(false);
                router.push(callbackUrl);
            } catch (error) {
                console.error(error)
                setLoading(false);
            }
        }
    }
    return (

        <main className="main">

            <section>

                <div className="signin">

                    <div className="content">

                        <h2>Inscription</h2>

                        <div className="form">

                            <div className="inputBox">

                                <input onChange={(e) => setName(e.target.value)} type="text" required/> <i>Email</i>

                            </div>

                            <div className="inputBox">

                                <input onChange={(e) => setPass(e.target.value)} type="password" required/> <i>Mot de passe</i>

                            </div>

                            <div className="inputBox">

                                <input type="password" required /> <i>Confirmer</i>

                            </div>

                            <div className="links"> <a href="#">Mot de passe oublié</a> <a href="/account/login">Se connecter</a>

                            </div>



                            <div className="inputBox">

                                <button type="submit" value="" className="button_login" onClick={() => submitPost()}>{loading ? "chargement..." : "S'inscrire"}</button>

                            </div>

                        </div>

                    </div> 
                </div>
            </section>
            
        </main>

    )





}
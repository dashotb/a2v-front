"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter, redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";
import "./styles.scss"


export const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/account";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            setFormValues({ email: "", password: "" });

            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false);

            console.log(res);
            if (!res?.error) {
                redirect("/account");
            } else {
                setError("Email ou Mot de passe Invalide");
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (

        <form onSubmit={onSubmit} className="main">
            <section>
                <div className="signin">

                    <div className="content">

                        <h2>Connexion</h2>
                            {error && (
                                <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
                            )}

                        <div className="form">

                            <div className="inputBox">

                                <input type="email" name="email" value={formValues.email} onChange={handleChange} required /> <i>Email</i>

                            </div>

                            <div className="inputBox">

                                <input type="password" name="password" value={formValues.password} onChange={handleChange} required /> <i>Mot de passe</i>

                            </div>

                            <div className="links"> <a href="#">Mot de passe oublié</a> <a href="./create">Inscription</a>

                            </div>



                            <div className="inputBox">

                                <button type="submit" value="" className="button_login" >{loading ? "chargement..." : "Se connecter"}</button>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </form>

    )
}



import "./style.scss"
import vitrine from "../../../public/vitrine.jpg"
import  gsap from "gsap"
import {Power2} from "gsap/all"
import Image from "next/image"
import Link from "next/link"

export const  Test = () => {
    if (typeof document !== 'undefined'){
        
        const hero = document.querySelector(".hero");
        const slider = document.querySelector(".slider");
        const logo = document.querySelector("#logo");
        const hamburger = document.querySelector("#hamburger");
        const headline = document.querySelector("#headline");
        const btx = document.querySelector("#btx")
    
        const tl = gsap.timeline();
    
        var tween = tl.fromTo(
            hero,
            1,
            { height: "0%" },
            { height: "80%", ease: Power2.easeInOut }
        ).fromTo(
            hero,
            1.2,
            { width: "100%" },
            { width: "80%", ease: Power2.easeInOut }
        ).fromTo(
            slider,
            1.2,
            { x: "-100%" },
            { x: "0%", ease: Power2.easeInOut },
            "-=1.2"
        ).fromTo(
            logo,
            0.5,
            { y: "-100%", opacity: "0" },
            { y: "0%", opacity: "1" },
        ).fromTo(
            headline,
            0.5,
            { y: "100%", opacity: "0" },
            { y: "0%", opacity: "1" },
            "-=0.5"
        ).fromTo(
            hamburger,
            0.5,
            { y: "-100%", opacity: "0" },
            { y: "0%", opacity: "1" },
            "-=0.5"
        ).fromTo(
            btx,
            0.5,
            { y: "100%", opacity: "0" },
            { y: "0%", opacity: "1" },
            "-=0.5"
        )
        tl.add(tween)
    }

    return(
        <>
            
                <section className="Noob">
                    <div className="hero">
                        <Image className="image" src={vitrine} alt="" width={7200} height={3200}/>
                        <h1 id="headline">Access to Vintage</h1>
                        <p id="hamburger">A la recherche du bonheur? <br />Nous avons surement ce qu'il vous faut... <br />Explorez notre catalogue pour trouver la perle rare !</p>
                        
                        <button id="btx"><a href="/shop">Explorer</a></button>
                        
                    </div>
                </section>
            
            

        </>
    )
}
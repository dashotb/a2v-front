"use client"
import { NextPage } from "next";
import "./home.css"
import { useEffect, useState } from "react";
import { ProductCard } from "../../../components/Product/ProductCard";
import FilterSection from "../../../components/FilterSection/FilterSection";

const Home:NextPage = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await fetch(`/api/products`).then((response) => response.json());
        setProducts(response);
        console.log(response)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return(
        <>
            <main className="parent">
                <div className="section">
                    <h1>Fixed Sidebar With Pure CSS </h1>
                    <div className="box">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="main-section">
                    <div className="left-side">
                        WTF
                    </div>
                    <div className="right-side">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;
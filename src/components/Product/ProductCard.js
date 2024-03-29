import React from 'react'
import "./ProductCard.scss"
import Link from 'next/link'

export function ProductCard(props) {
    if(props.image.length > 1) {
        return(
            <div className='productList'>
                <Link  href="/product/[id]" as={`/product/${props.id}`}>
                    <div key={props.id} className='productCard'>
                        <img src={props.image[1]} alt={props.name} className='productImage'></img>
                        <img src={props.image[0]} alt={props.name} className='productImage2'></img>
                        <div className='productCard__content'>
                            <a className='productName'>{props.name}</a>
                            <div className='productBrand'>{props.brand}</div>
                            <div className='displayStack__1'>
                                <div className='productPrice'>{props.price}€</div>
                            </div>
                        </div>
                    </div>
                    </Link>
            </div>
        )
    }
    else{
        return (
            <div className='productList'>
                <Link href="/product/[id]" as={`/product/${props.id}`}>
                    <div key={props.id} className='productCard2'>
                        
                        <img src={props.image[0]} alt={props.name} className='productImage2'></img>
                        <div className='productCard__content'>
                            <a className='productName'>{props.name}</a>
                            <div className='productBrand'>{props.brand}</div>
                            <div className='displayStack__1'>
                                <div className='productPrice'>{props.price}€</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
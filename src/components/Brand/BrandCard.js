import React from 'react'
import "./BrandCard.scss"
import Link from 'next/link'

export function BrandCard(props) {
        return (
            <div className='productList'>
                <Link href="/shop/brand/[id]" as={`/shop/brand/${props.name}`}>
                    <div key={props.id} className='productCard2'>

                        <img src={props.image[0]} alt={props.name} className='productImage2'></img>
                        <div className='brandCard__content'>
                            <a className='brandName'>{props.name}</a>
                        </div>
                    </div>
                </Link>
            </div>
        )
}
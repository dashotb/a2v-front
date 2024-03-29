import React from 'react'
import "./BrandCard.scss"
import Link from 'next/link'

export function BrandCard(props) {
        return (
            <div className='brandList'>
                <Link href="/product/[id]" as={`/product/${props.id}`}>
                    <div key={props.id} className='brandCard'>
                        <img src={props.image[0]} alt={props.name} className='brandImage'></img>
                        <div className='brandCard__content'>
                            <div className='BrandName'>{props.name}</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
}
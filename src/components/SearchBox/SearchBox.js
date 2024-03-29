import "./SearchBox.scss"
import search from "../../../public/search.png"
import Image from "next/image"

export function SearchBox() {
    return (
        <div className="search-box">
            <button className="btn-search"><Image src={search} width={25} height={25} className="icon-search"/></button>
            <input type="text" className="input-search" placeholder="Rechercher" />
        </div>
    )
}
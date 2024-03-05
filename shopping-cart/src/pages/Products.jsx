import React from "react"
import { Link } from "react-router-dom"

export default function Products() {
    const [commodities, setCommodities] = React.useState([])

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=25')
            .then(res=>res.json())
            .then(data=>setCommodities(data))
    }, [])

    const commodityElements = commodities.map(commodity=> (
        <Link to={`/products/${commodity.id}`}>
        <div key={commodity.id} className="commodity-tile">
            <img src={commodity.image} />
            <div className="commodity-info">
                <h3>{commodity.title}</h3>
                <p>${commodity.price}</p>
            </div>
            <i className={`commodity-category ${commodity.category} selected`}>{commodity.category}</i>
        </div>
        </Link>
    ))

    return (
        <div className="commodity-list-container">
            <h1>Explore our commodity options</h1>
            <div className="commodity-list">
                {commodityElements}
            </div>
        </div>
    )
}
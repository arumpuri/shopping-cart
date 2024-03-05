import React from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail() {
    const params = useParams()
    const [commodity, setCommodity] = React.useState(null)

    React.useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => setCommodity(data))
    }, [params.id])

    return (
        <div className="commodity-detail-container">
            {commodity ? (
                <div className="commodity-detail">
                    <img src={commodity.image} />
                    <i className={`commodity-category ${commodity.category} selected`}>{commodity.category}</i>
                    <h2>{commodity.title}</h2>
                    <p className="commodity-price">${commodity.price}</p>
                    <p>{commodity.description}</p>
                    <button className="link-button">Buy this </button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
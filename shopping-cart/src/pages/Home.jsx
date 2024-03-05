import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Simply click on the items you want to purchase and add them to your cart..</h1>
            <p>Enjoy amazing discounts and special offers every day..</p>
            <Link to="products">Find your shoplife</Link>
        </div>
    )
};
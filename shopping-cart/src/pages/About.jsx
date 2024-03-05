import React from "react"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <h1>Simply click on the items you want to purchase and add them to your cart.</h1>
                <p>Browse through our extensive collection of products from various categories.</p>
                <p>Shop anytime, anywhere from the comfort of your home or on the go.</p>
            </div>
            <div className="about-page-cta">
                <h2>Enjoy amazing discounts and special offers every day.<br />Our Product is ready.</h2>
                <Link className="link-button" to="products">Explore our collections</Link>
            </div>
        </div>
    );
}
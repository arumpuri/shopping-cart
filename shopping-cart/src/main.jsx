import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import ProductDetail from "./pages/productDetail"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <header>
        <Link className="site-logo" to="/">#Shoplife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/products">Product</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
  </BrowserRouter>,
)
import React from 'react'
import { Col, Row, Spinner } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import LaptopDetails from './LaptopDetails';


export default function LapTop() {
    const [products, setProducts] = useState([])
    let { t } = useTranslation();


    let getProducts = () => {
        fetch("https://dummyjson.com/products/category/laptops")
            .then(res => res.json())
            .then(res => setProducts(res.products))
    }

    useEffect(() => {
        getProducts()
    }, [])



    let getCategory = (ev) => {
        fetch("https://dummyjson.com/products/category/" + ev.target.value)
            .then(res => res.json())
            .then(res => setProducts(res.products))
            // .then(res => console.log(res.products.id))
    }


    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light" onClick={getCategory} value="Laptops">Laptops</button>
                <button type="button" className="btn btn-light" onClick={getCategory} value="smartphones">smartphones</button>
                <button type="button" className="btn btn-light" onClick={getCategory} value="fragrances">fragrances</button>
            </div>
            {
                products.length > 0
                    ?
                    products.map(product =>
                        <LaptopDetails product={product} key={product.id} />
                    )
                    :
                    <div className="d-flex justify-content-center">
                        <Spinner animation="grow" />
                    </div>
            }
        </div>
    )
}

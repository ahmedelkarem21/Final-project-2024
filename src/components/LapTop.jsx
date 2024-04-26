import React from 'react'
import { Col, Row, Spinner } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { FaStar, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


export default function LapTop() {
    const [products, setProducts] = useState([])
    let { t } = useTranslation();

    const [type, setType] = useState("primary")

    let getProducts = () => {
        fetch("https://dummyjson.com/products/category/laptops")
            .then(res => res.json())
            .then(res => setProducts(res.products))
    }

    useEffect(() => {
        getProducts()
    }, [])

    let checkCart = () => {
        setType(type === "primary" ? "danger" : "primary")
        setType(type === "danger" ? "primary" : "danger")

    }

    return (
        <div>
            {
                products.length > 0
                    ?
                    products.map(product =>
                        <Row key={product.id} className='my-4 p-2 px-3 bg-white myBorder w-100 gx-0 justify-content-between'>
                            <Col lg={4} className='my-3'>
                                <img src={product.thumbnail} className='mx-2 w-100 px-lg-0 px-5' alt="this is a laptop image" />
                            </Col>
                            <Col lg={7} className='py-2 mx-0 my-3'>
                                <Row>
                                    <Col xs={10}>
                                        <h6>{product.title}</h6>
                                        <h5>${product.price}</h5>
                                        <div >
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar className='text-warning' />
                                            <FaStar />
                                            <span className='grayText fs-6 mx-3'>154 orders </span>
                                            <span className='mx-1 textGreen'> Free shipping</span>
                                        </div>

                                        <p className='w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime cum eum, dolore neque saepe, voluptatem repellendus labore dolorem ipsam</p>

                                        <h6 className='text-primary'>View details</h6>
                                    </Col>
                                    <Col xs={2} className='text-end my-2'>
                                        <FaRegHeart onClick={() => checkCart} className={'myBorder p-2 box text-' + type}/>
                                        <NavLink to="/Cart" className="nav-link">
                                            <FaCartShopping className='text-primary myBorder p-2 box my-2'/>
                                        </NavLink>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
                    :
                    <div className="d-flex justify-content-center">
                        <Spinner animation="grow" />
                    </div>
            }
        </div>
    )
}

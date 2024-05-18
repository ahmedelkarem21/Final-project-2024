import React from 'react'
import Nav from 'react-bootstrap/Nav';
import TshirtTwo from "../assets/T-shirtTwo.png"
import TshirtOne from "../assets/Tshirt.jpeg"
import { Col, Row, Button } from "react-bootstrap"
import itemOne from "../assets/item-1.png"
import itemTwo from "../assets/item-2.png"
import itemThree from "../assets/item-3.png"
import itemFour from "../assets/item-4.png"
import itemFive from "../assets/item-5.png"
import itemSix from "../assets/item-6.png"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function Description() {

    const [item, setItem] = useState([])

    const params = useParams()

    let getItem = () => {
        fetch("https://fakestoreapi.com/products/" + params.id)
            .then(res => res.json())
            .then(res => setItem(res))
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div className='bg-white myBorder my-4'>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="#" className='text-primary'>Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className='grayText'>Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className='grayText'>Shipping</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" className='grayText'>About seller</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='px-3 py-2'>
                <div>
                    <p className='w-75'>{item.description}</p>
                </div>
                <div className='w-75 my-4'>
                    <table className="table table-bordered">
                        <tbody>
                            <tr >
                                <td className='bg-light'>Model</td>
                                <td>#8786867</td>
                            </tr>
                            <tr>
                                <td className='bg-light'>Style</td>
                                <td>Classic style</td>
                            </tr>
                            <tr>
                                <td className='bg-light'>Certificate</td>
                                <td>ISO-898921212</td>
                            </tr>
                            <tr>
                                <td className='bg-light'>Size</td>
                                <td>34mm x 450mm x 19mm</td>
                            </tr>
                            <tr>
                                <td className='bg-light'>Memory</td>
                                <td>36GB RAM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul className='grayText'>
                    <li className='my-1'>Some great feature name here</li>
                    <li className='my-1'>Another great feature name here, take a look</li>
                    <li className='my-1'>Another great feature name here</li>
                    <li className='my-1'>Some great feature name here</li>
                </ul>

            </div>
        </div>
    )
}


export function MayLike() {
    return (
        <div className='bg-white my-4 myBorder p-3'>
            <h6 className='fw-bold'>You may like</h6>
            <div>
                <Row className='gx-0 justify-content-between my-2'>
                    <Col xl={4} className='myBorder p-2'>
                        <img src={TshirtTwo} alt="this is a product photo" className='w-100' />
                    </Col>
                    <Col xl={6} className='mx-3 py-1'>
                        <h6>Men Blazers Sets</h6>
                        <h6>Elegant Formal</h6>
                        <h6 className='grayText'>$7.00 - $99.50</h6>
                    </Col>
                </Row>
                <Row className='gx-0 justify-content-between my-2'>
                    <Col xl={4} className='myBorder p-2'>
                        <img src={TshirtOne} alt="this is a product photo" className='w-100' />
                    </Col>
                    <Col xl={6} className='mx-3 py-1'>
                        <h6>Men Blazers Sets</h6>
                        <h6>Elegant Formal</h6>
                        <h6 className='grayText'>$7.00 - $99.50</h6>
                    </Col>
                </Row>
                <Row className='gx-0 justify-content-between my-2'>
                    <Col xl={4} className='myBorder p-2'>
                        <img src={itemTwo} alt="this is a product photo" className='w-100' />
                    </Col>
                    <Col xl={6} className='mx-3 py-1'>
                        <h6>Men Blazers Sets</h6>
                        <h6>Elegant Formal</h6>
                        <h6 className='grayText'>$7.00 - $99.50</h6>
                    </Col>
                </Row>
                <Row className='gx-0 justify-content-between my-2'>
                    <Col xl={4} className='myBorder p-2'>
                        <img src={itemFour} alt="this is a product photo" className='w-100' />
                    </Col>
                    <Col xl={6} className='mx-3 py-1'>
                        <h6>Men Blazers Sets</h6>
                        <h6>Elegant Formal</h6>
                        <h6 className='grayText'>$7.00 - $99.50</h6>
                    </Col>
                </Row>
                <Row className='gx-0 justify-content-between my-0'>
                    <Col xl={4} className='myBorder p-2'>
                        <img src={TshirtOne} alt="this is a product photo" className='w-100' />
                    </Col>
                    <Col xl={6} className='mx-3 py-1'>
                        <h6>Men Blazers Sets</h6>
                        <h6>Elegant Formal</h6>
                        <h6 className='grayText'>$7.00 - $99.50</h6>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export function RelatedProducts () {

    return (
        <div className='myBorder p-4 bg-white my-0'>
            <h5 className='fw-bold mx-3'>Related products</h5>
            <Row className='row-cols-6'>
                <Col>
                    <div className='my-2'>
                        <img src= {itemTwo} alt="this is a product image" className='w-100'/>
                    </div>
                    <h6 className='w85 mx-3'>Xiaomi Redmi 8 Original</h6>
                    <h6 className='grayText mx-3'>$32.00-$40.00</h6>
                </Col>
                <Col>
                    <div className='my-2'>
                        <img src= {itemSix} alt="this is a product image" className='w-100'/>
                    </div>
                    <h6 className='w85 mx-3'>Xiaomi Redmi 8 Original</h6>
                    <h6 className='grayText mx-3'>$32.00-$40.00</h6>
                </Col>
                <Col>
                    <div className='my-2'>
                        <img src= {itemFour} alt="this is a product image" className='w-100'/>
                    </div>
                    <h6 className='w85 mx-3'>Xiaomi Redmi 8 Original</h6>
                    <h6 className='grayText mx-3'>$32.00-$40.00</h6>
                </Col>
                <Col>
                    <div className='my-2'>
                        <img src= {itemTwo} alt="this is a product image" className='w-100'/>
                    </div>
                    <h6 className='w85 mx-3'>Xiaomi Redmi 8 Original</h6>
                    <h6 className='grayText mx-3'>$32.00-$40.00</h6>
                </Col>
                <Col>
                    <div className='my-2'>
                        <img src= {itemFour} alt="this is a product image" className='w-100'/>
                    </div>
                    <h6 className='w85 mx-3'>Xiaomi Redmi 8 Original</h6>
                    <h6 className='grayText mx-3'>$32.00-$40.00</h6>
                </Col>
                <Col>
                    <div className='my-2'>
                        <img src= {itemThree} alt="this is a product image" className='w-100'/>
                    </div>
                    <h6 className='w85 mx-3'>Xiaomi Redmi 8 Original</h6>
                    <h6 className='grayText mx-3'>$32.00-$40.00</h6>
                </Col>
            </Row>
        </div>
    )
}
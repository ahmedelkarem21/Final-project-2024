import React from 'react'
import { Col, Row, Button, Card } from "react-bootstrap"
import tshirt from "../assets/Tshirt.jpeg"
import { FaStar } from "react-icons/fa"
import { MdOutlineMessage, MdOutlineLanguage, MdOutlineVerifiedUser } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function AnotherPreview() {

    const [item, setItem] = useState({})
    const [rate, setRate] = useState(0)

    const params = useParams()

    let getItem = () => {
        fetch("https://fakestoreapi.com/products/" + params.id)
            .then(res => res.json())
            .then(res => setItem(res))
            // .then(res => setRate(res.rating.rate))
    }

    // console.log(item.rating.count);

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div className='bg-white'>
            <Row className='flex-xl-nowrap flex-wrap myBorder p-4 gx-0 justify-content-around'>
                <Col xl={3} xs={12} className='px-0 my-2'>
                    <div className='myBorder p-2 text-center'>
                        <img src={item.image} alt="this is is a product photo" className='w-100' />
                    </div>
                    <Row className='flex-nowrap gx-0 my-3'>
                        <Col className='myBorder p-2'>
                            <img src={item.image} alt="this is is a product photo" className='w-100' />
                        </Col>
                        <Col className='myBorder p-2 mx-3'>
                            <img src={item.image} alt="this is is a product photo" className='w-100' />
                        </Col>
                        <Col className='myBorder p-2 mx-1'>
                            <img src={item.image} alt="this is is a product photo" className='w-100' />
                        </Col>
                        <Col className='myBorder p-2 mx-3'>
                            <img src={item.image} alt="this is is a product photo" className='w-100' />
                        </Col>
                        <Col className='myBorder p-2'>
                            <img src={item.image} alt="this is is a product photo" className='w-100' />
                        </Col>
                    </Row>
                </Col>
                {
                    Object.keys(item).length > 0 &&
                    <Col xl={5} xs={12} className='mx-2 my-1'>
                        <h4 className='w-75'>{item.title}</h4>
                        <div className='my-3'>
                            <span>
                                {/* {
                                    [...Array(5)].map((itemx, i) =>
                                    i <= Math.floor(item) ?
                                        <FaStar className='text-warning' key={i} />
                                        :
                                        <FaStar key={i} />    
                                )
                                } */}
                            </span>
                            <span className='grayText mx-4'>
                                <MdOutlineMessage />
                                <span className='mx-2'>32 Reviews</span>
                            </span>
                            <span className='grayText'>
                                <FaSailboat />
                                <span className='mx-2'>{item.rating.count} Sold</span>
                            </span>
                        </div>
                        <Row className='lightRedBg m-1 p-2 my-3'>
                            <Col xl={3} >
                                <h5 className='text-danger fw-bold'>${Math.floor(item.price)}</h5>
                                <span>50-100 pcs</span>
                            </Col>
                            <Col xl={3} className='border-start mx-4'>
                                <h5 className='fw-bold'>${Math.round(item.price * 0.9)}</h5>
                                <span>100-700 pcs</span>
                            </Col>
                            <Col xl={3} className='border-start'>
                                <h5 className='fw-bold'>${Math.round(item.price * 0.8)}</h5>
                                <span>700+ pcs</span>
                            </Col>
                        </Row>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td className='grayText'>Price:</td>
                                    <td>Negotiable</td>
                                </tr>
                                <tr className='border-top'>
                                    <td className='grayText'>Type:</td>
                                    <td>Classic shoes</td>
                                </tr>
                                <tr>
                                    <td className='grayText'>Material:</td>
                                    <td>Plastic material</td>
                                </tr>
                                <tr>
                                    <td className='grayText'>Design:</td>
                                    <td>Modern nice</td>
                                </tr>
                                <tr className='border-top'>
                                    <td className='grayText'>Customization:</td>
                                    <td>Customized logo and design custom packages</td>
                                </tr>
                                <tr>
                                    <td className='grayText'>Protection:</td>
                                    <td>Refund Policy</td>
                                </tr>
                                <tr className='border-bottom'>
                                    <td className='grayText'>Warranty:</td>
                                    <td>2 years full warranty</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                }
                <Col xl={3} xs={12} className='my-2'>
                    <div className='px-0'>
                        <div className='myBorder p-2'>
                            <Row>
                                <Col xl={3} className='text-center px-3'>
                                    <h1 className=' text-info bg-light border rounded border-light'>R</h1>
                                </Col>
                                <Col xl={9} className='px-0 my-0'>
                                    <h6 className='my-1'>Supplier</h6>
                                    <h6>Guanjoi Trading LLC</h6>
                                </Col>
                            </Row>
                            <div className='border-top py-2 my-2 grayText'>
                                <div>
                                    <LiaFlagUsaSolid />
                                    <span className='mx-3'>Germany, Berlin</span>
                                </div>
                                <div className='my-1'>
                                    <MdOutlineVerifiedUser />
                                    <span className='mx-3'>Verified Seller</span>
                                </div>
                                <div>
                                    <MdOutlineLanguage />
                                    <span className='mx-3'>Worldwide shipping</span>
                                </div>
                            </div>
                            <div className='my-0'>
                                <Button variant="primary" size="sm" className='w-100'>Send inquiry</Button>
                                <Button variant="light" size="sm" className='w-100 border my-2'>Send inquiry</Button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-primary my-4'>
                        <FaRegHeart className='text-primary' />
                        <span className='fw-medium mx-2'>Save for later</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

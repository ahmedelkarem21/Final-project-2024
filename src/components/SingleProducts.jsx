import React from 'react'
import { Col, Row, Spinner } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { FaStar, FaRegHeart } from "react-icons/fa"
import itemOne from "../assets/item-1.png"
import itemTwo from "../assets/item-2.png"
import itemThree from "../assets/item-3.png"
import itemFour from "../assets/item-4.png"
import itemFive from "../assets/item-5.png"
import itemSix from "../assets/item-6.png"
import { useEffect, useState } from 'react'

export default function SingleProducts() {
    const [type, setType] = useState("primary")
    let { t } = useTranslation();
    let checkCart = () => {
        const changeType = [...type]
        changeType === "primary" ?  changeType = "danger" : changeType = "primary"
        changeType === "danger" ? changeType = "primary" : changeType = "danger"
        setType(changeType);
    }

    return (
        <div className='bg-light'>
            <Row className='gx-0 my-3 flex-nowrap justify-content-between'>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart onClick={checkCart} className={'myBorder p-2 box text-' + type}/>
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3 mx-3'>
                    <div className='text-center p-4'>
                        <img src={itemOne} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart onClick={checkCart} className={'myBorder p-2 box text-' + type}/>
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemThree} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
            </Row>
            <Row className='gx-0 my-3 flex-nowrap justify-content-between'>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemSix} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3 mx-3'>
                    <div className='text-center p-4'>
                        <img src={itemFour} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemOne} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
            </Row>
            <Row className='gx-0 my-3 flex-nowrap justify-content-between'>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3 mx-3'>
                    <div className='text-center p-4'>
                        <img src={itemFour} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemThree} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-2'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}





export function SingleProductx() {

    let { t } = useTranslation();

    return (
        <div>
            <Row className='row-cols-3 g-5'>
                <Col className=' bg-white'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className=' bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
                <Col className='myBorder bg-white p-3'>
                    <div className='text-center p-4'>
                        <img src={itemTwo} alt="this is an item" height={200} />
                    </div>
                    <Row className='justify-content-between py-3'>
                        <Col xl={9}>
                            <h5 className='fw-bold'>$99.5 <del className='fw-normal grayText fs-6'> $1128.00</del></h5>
                            <div>
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar className='text-warning' />
                                <FaStar />
                            </div>
                        </Col>
                        <Col xl={3} className='text-end'>
                            <FaRegHeart className='text-primary myBorder p-2 box' />
                        </Col>
                    </Row>
                    <div className='my-1'>
                        <div className='grayText'>GoPro HERO6 4K Action</div>
                        <div className='grayText'>Camera - Black</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}       

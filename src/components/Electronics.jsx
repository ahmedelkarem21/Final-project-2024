import React from 'react'
import logoo from "../assets/unknown.png"
import { Button, Container, Card, Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Electronics() {
    var { t, i18n } = useTranslation()

    // const [count, setCount] = useState(0) 
    const countState = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    let increase = () => {
        // setCount(count + 1)
        dispatch({
            type: "INCREMENT"
        })
    }

    let decrease = () => {
        // setCount(count - 1)
        dispatch({
            type: "DECREMENT"
        })
    }



    return (

        <div className='py-3 ltr'>
            <Container>
                <div className='d-flex justify-content-between w-25 mx-auto my-3'>
                    <Button variant='danger' size="sm" onClick={decrease}>Decrease</Button>
                        <div>{countState}</div>
                    <Button variant='primary' size="sm" onClick={increase}>Increase</Button>
                </div>
                <div className='bg-white p-4 myBorder rounded-2'>
                    <Row className='gx-4'>
                        <Col sm={12} xl={2} className='text-center text-xl-start'>
                            <ul className="list-group list-group-flush my-2 text-center">
                                <li className="list-group-item" >{t('automobiles')}</li>
                                <li className="list-group-item">{t('clothes_and_wear')}</li>
                                <li className="list-group-item">{t('home_interiors')}</li>
                                <li className="list-group-item">{t('computer_and_tech')}</li>
                                <li className="list-group-item">{t('tools_equipments')}</li>
                                <li className="list-group-item">{t('sports_and_outdoor')}</li>
                                <li className="list-group-item">{t('animal_and_pets')}</li>
                                <li className="list-group-item">{t('machinery_tools')}</li>
                                <li className="list-group-item">{t('more_category')}</li>
                                <li className="list-group-item"></li>
                            </ul>
                        </Col>
                        <Col sm={12} xl={7} className='electronics p-5 my-3 my-xl-0'>
                            <h3>{t('latest_trending')}</h3>
                            <h2>{t('electronic_items')}</h2>
                            <Button variant="light" size="lg" active className='bg-light myHover'>{t('learn_more')}</Button>
                        </Col>
                        <Col sm={12} xl={3} className='order-sm-2'>
                            <div>
                                <Card className='p-0 w-100'>
                                    <Card.Body className=''>
                                        <Row>
                                            <Col className='p-0 text-center' sm={4}>
                                                <Card.Img variant="top" src={logoo} className='w-50' />
                                            </Col>
                                            <Col className='p-0 text-lg-start text-center' sm={8}>
                                                <Card.Subtitle className="mb-2 text-muted my-1">{t('hi_user')}</Card.Subtitle>
                                                <Card.Subtitle className="mb-2 text-muted">{t('lets_get_started')}</Card.Subtitle>
                                            </Col>
                                        </Row>
                                        <Button variant="primary" size="sm" active className='w-100 my-2 '>
                                            {t('Join_now')}</Button>
                                        <Button variant="light" size="sm" active className='w-100 text-primary bg-light fw-bold myHover'>
                                            {t('Log_in')}</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='my-3' >
                                <Card className='bg-warning p-2 text-light'>
                                    <Card.Body >
                                        <Card.Subtitle className="mb-2">Get US $10 off</Card.Subtitle>
                                        <Card.Text>
                                            with a new supplier
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className='bg-info p-2 text-light'>
                                    <Card.Body >
                                        <Card.Subtitle className="mb-2">Send Quotes with</Card.Subtitle>
                                        <Card.Text>
                                            supplier<br />
                                            prefrences
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { Col, Container, Row, Spinner, Card } from "react-bootstrap"
import Timer from "../components/Timer";


export default function Deals() {

  const [xproducts, setxProducts] = useState([])
  let { t } = useTranslation();

  let getProducts = () => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
        .then(res => res.json())
        .then(res => setxProducts(res.products))
}

useEffect(() => {
    getProducts()
}, [])

return (
    <div className="mainBackground">
        <Container>
            <Row className='p-2 text-center'>
                <Col xl={2}  className='myBorder py-5 bg-white'>
                    <h4>{t('Deals_and_offers')}</h4>
                    <h6 className='grayText'>{t('Hygiene_equipments')}</h6>
                    <div className='mx-2 my-3'>
                        <Timer />
                    </div>
                </Col>
                <Col xl={10}>
                {
                    xproducts.length > 0
                        ?
                        <Row className='row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-sm-2  g-4 row-cols-1' >
                            {xproducts.map(product => 
                            <Col key={product.id} className='px-0'>
                                <Card className="h-100 p-2">
                                <Card.Img variant="top" src={product.thumbnail} height={180} className="p-2"/>
                                    <Card.Body className='p-2'>
                                        <Card.Title className="text-center ">
                                            <h6>{product.title}</h6>
                                        </Card.Title>
                                    </Card.Body>
                                    <Card.Footer className='rounded-pill w-50 mx-auto border border-0 my-1'>
                                        <h6 className='text-danger my-1'>-{product.discountPercentage}%</h6>
                                    </Card.Footer>
                                </Card>
                            </Col>)}
                        </Row>
                        :
                        <div className="d-flex justify-content-center">
                            <Spinner animation="grow" />
                        </div>
                }
                </Col> 
            </Row>
        </Container>
    </div>
)
}

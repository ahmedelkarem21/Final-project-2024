import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { Col, Container, Row, Spinner, Card, Button} from "react-bootstrap"


export function HomeOutdoor() {

  const [xproducts, setxProducts] = useState([])
  let { t } = useTranslation();

  let getProducts = () => {
    fetch("https://dummyjson.com/products/category/furniture")
        .then(res => res.json())
        .then(res => setxProducts(res.products))
}


useEffect(() => {
    getProducts()
}, [])

return (
    <div className="mainBackground my-3">
        <Container className='p-0'>
            <Row className='myBorder m-2'>
                <Col xl={3} className='py-2 bg-white homeOutdoor'>
                    <div className='p-3'>
                        <h4 className='w-50 fw-bold'>{t('Home_and_outdoor')}</h4>
                        <Button variant='light' size="sm" className='px-3 py-2 my-1'>{t('source_now')}</Button>
                    </div>
                </Col>
                <Col xl={9} className='text-center'>
                {
                    xproducts.length > 0
                        ?
                        <Row className='row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-sm-2  g-4 row-cols-1'>
                            {xproducts.map(product => 
                            <Col key={product.id} className='px-0'>
                                <Card className="h-100 p-0 border-0">
                                    <div className='productBorder p-2'>
                                        <Card.Img variant="top" src={product.thumbnail} height={140} className="p-3"/>
                                        <Card.Body className='p-2'>
                                            <Card.Title className="text-center ">
                                                <h6>{product.title}</h6>
                                                <h6 className='grayText'>From</h6>
                                                <h6 className='grayText'>USD {product.price}</h6>
                                            </Card.Title>
                                        </Card.Body>
                                    </div>
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


export function Gadgets() {

    const [xproducts, setxProducts] = useState([])
    let { t } = useTranslation();
  
    let getProducts = () => {
      fetch("https://dummyjson.com/products/category/laptops")
          .then(res => res.json())
          .then(res => setxProducts(res.products))
  }
  
  
  useEffect(() => {
      getProducts()
  }, [])
  
  return (
      <div className="mainBackground my-4">
          <Container className='p-0'>
              <Row className='myBorder m-2'>
                  <Col xl={3} className='py-2 bg-white gadget'>
                      <div className='p-3'>
                          <h4 className='w-75 fw-bold'>{t('Consumer_electronics_and_gadgets')}</h4>
                          <Button variant='light' size="sm" className='px-3 py-2 my-1'>{t('source_now')}</Button>
                      </div>
                  </Col>
                  <Col xl={9} className='text-center'>
                  {
                      xproducts.length > 0
                          ?
                          <Row className='row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-sm-2  g-4 row-cols-1'>
                              {xproducts.map(product => 
                              <Col key={product.id} className='px-0'>
                                  <Card className="h-100 p-0 border-0">
                                      <div className='productBorder p-2'>
                                          <Card.Img variant="top" src={product.thumbnail} height={140} className="p-3"/>
                                          <Card.Body className='p-2'>
                                              <Card.Title className="text-center ">
                                                  <h6>{product.title}</h6>
                                                  <h6 className='grayText'>From</h6>
                                                  <h6 className='grayText'>USD {product.price}</h6>
                                              </Card.Title>
                                          </Card.Body>
                                      </div>
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
import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Crumb from '../layout/Crumb'
import Description, { MayLike, RelatedProducts } from '../components/Description'
import Subscribe from "../components/Subscribe"
import AnotherPreview from '../components/anotherPreview'

export default function anotherProduct() {

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <div className='mainBackground ltr'>
            <Container>
                {/* <h1>this is from another product</h1> */}
                <Crumb />
                <AnotherPreview />
                <Row>
                    <Col xl={9}>
                        <Description />
                    </Col>
                    <Col xl={3}>
                        <MayLike />
                    </Col>
                </Row>
                <RelatedProducts />
                <Row className='bg-primary text-light p-4 myBorder gx-0 my-4'>
                    <Col>
                        <h5>Super discount on more than 100 USD</h5>
                        <h6 className='fw-lighter'>Have you ever just write dummy info</h6>
                    </Col>
                    <Col className='text-end'>
                        <Button variant="warning my-2">Shop now</Button>
                    </Col>
                </Row>
                <Subscribe />
            </Container>
        </div>
    )
}

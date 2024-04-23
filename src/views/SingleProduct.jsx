import React from 'react'
import {Row, Col,  Container} from "react-bootstrap"
import Crumb from '../layout/Crumb'
import Subscribe from '../components/Subscribe'
import CategoryNav from '../layout/CategoryNav'
import SideNav from '../layout/SideNav'
import CategoryFooter from '../layout/CategoryFooter'
import SingleProducts from '../components/SingleProducts'
import SingleProductx from '../components/SingleProducts'



export default function SingleProduct() {

  return (
    <div className="mainBackground ltr">
        <Container>
            <Crumb/>
            <Row className='py-2 justify-content-between'>
                <Col xl={2} className="p-0">
                  <SideNav />
                </Col>
                <Col xl={10} className="p-0 mx-0">
                    <CategoryNav/>
                    <SingleProducts />
                    <CategoryFooter />
                </Col>
            </Row>
        </Container>
        <Subscribe />
    </div>
  )
}
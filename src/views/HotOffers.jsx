import React from 'react'
import {Row, Col,  Container} from "react-bootstrap"
import Crumb from '../layout/Crumb'
import LapTop from '../components/LapTop'
import Subscribe from '../components/Subscribe'
import CategoryNav from '../layout/CategoryNav'
import SideNav from '../layout/SideNav'
import CategoryFooter from '../layout/CategoryFooter'



export default function HotOffers() {

  return (
    <div className="mainBackground ltr">
        <Container>
            <Crumb/>
            {/* <h1>ana feeeen</h1> */}
            <Row className='py-2 justify-content-between'>
                <Col xl={2} className="p-0">
                  <SideNav />
                </Col>
                <Col xl={10} className="p-0 mx-0">
                    <CategoryNav/>
                    <LapTop />
                    <CategoryFooter />
                </Col>
            </Row>
        </Container>
        <Subscribe />
    </div>
  )
}

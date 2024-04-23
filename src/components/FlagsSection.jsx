import React from 'react'
import {Row, Col} from 'react-bootstrap';

export default function FlagsSection() {
  return (
    <div className='p-3 ltr'>
        <h5 className='fw-bold'>Suppliers by region</h5>
        <Row className='row-cols-5 g-3 py-3'>
            <Col>
                <span className="fi fi-ae "></span>
                <span className='mx-2'>Arabic Emirates</span>
            </Col>
            <Col>
                <span className="fi fi-au"></span>
                <span className='mx-2'>Austuralia</span>
            </Col>
            <Col>
                <span className="fi fi-us"></span>
                <span className='mx-2'>United States</span>
            </Col>
            <Col>
                <span className="fi fi-ru"></span>
                <span className='mx-2'>Russia</span>
            </Col>
            <Col>
                <span className="fi fi-it"></span>
                <span className='mx-2'>Italy</span>
            </Col>
            <Col>
                <span className="fi fi-dk"></span>
                <span className='mx-2'>Denmark</span>
            </Col>
            <Col>
                <span className="fi fi-fr"></span>
                <span className='mx-2'>France</span>
            </Col>
            <Col>
                <span className="fi fi-eg"></span>
                <span className='mx-2'>Egypt</span>
            </Col>
            <Col>
                <span className="fi fi-cn"></span>
                <span className='mx-2'>China</span>
            </Col>
            <Col>
                <span className="fi fi-gb"></span>
                <span className='mx-2'>Great Britain</span>
            </Col>
        </Row>
    </div>
  )
}

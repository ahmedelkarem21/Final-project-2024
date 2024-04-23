import React from 'react'
import { Col, Container, Row, Form, Button} from "react-bootstrap"

export default function SendRequests() {
  return (
    <div className='ltr'>
        <div className='easyWay mx-2 my-3 myBorder'>
            <Row className='p-5'>
                <Col lg={7} className='px-2 text-white'>
                    <div className='w-75'>
                        <h2 className='w-100'>An easy way to send requests to all suppliers</h2>
                        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam repudiandae Sunt quibusdam repudiandae </p>
                    </div>
                </Col>
                <Col lg={5} className='myBorder p-3 bg-white'>
                    <h5 className='fw-bold'>Send quotes to suppliers</h5>
                    <Form>
                        <input type="text" className='myBorder w-100 my-2 p-2 myForm' placeholder='What item you need?'/>
                        <textarea className='w-100 myBorder my-2 p-2 myForm'   rows="3" placeholder='Type more details'></textarea>
                        <input type="number" className='w-50 myBorder myForm  my-2 py-1 px-2' placeholder='Quantity'/>
                        <select className='w-25 myBorder mx-2'>
                            <option value="1">Pcs</option>
                            <option value="2">two</option>
                        </select>
                        <Button variant='primary' className='my-2'>Send inquiry</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    </div>
  )
}

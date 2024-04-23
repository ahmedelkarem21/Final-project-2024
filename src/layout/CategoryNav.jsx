import React from 'react'
import { Row, Col, Dropdown } from "react-bootstrap"
import { SiWindows } from "react-icons/si";

import { Fa6, FaGripLines } from "react-icons/fa6";


export default function CategoryNav() {
  return (
    <div className='myBorder p-2 bg-white'>
      <Row>
        <Col lg={7} md={12} className='text-center text-lg-start'>
          <h6 className="my-2">12,911 items in <span className='fw-bold'>Laptop accessory</span></h6>
        </Col>
        <Col lg={5} md={12} className='text-center'>
          <Row>
            <Col xs={4} className=' px-0 py-1'>
              <li className="list-group-item my-1">
                <input className="form-check-input mx-2" type="checkbox" />
                <label className="form-check-label "> Verified</label>
              </li>
            </Col>
            <Col className='mx-0 px-0' xs={4}>
              <Dropdown className='my-0 py-0'>
                <Dropdown.Toggle variant="white" id="dropdown-basic" className=' my-2 p-0 '>
                  Featured
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={4} className='px-0 text-center'>
              <div className="btn-group myBorder">
                <a href="#" className="btn btn-white active"><SiWindows className='text-dark' /></a>
                <a href="#" className="btn btn-white"><FaGripLines className='text-dark fw-bolder' /></a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

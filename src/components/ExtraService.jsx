import React from 'react'
import { Col, Row} from "react-bootstrap"
import { CiSearch } from "react-icons/ci";
import { FaBoxArchive } from "react-icons/fa6";
import { BiRightArrow } from "react-icons/bi";
import { GiCheckedShield } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

export default function ExtraService() {
  return (
    <div className='my-4 mx-3 ltr'>
        <h2 className='my-3'>Our extra service</h2>
        <Row>
            <Col xl={3} md={6} className=' gx-0 my-xl-0 my-2'>
                <div className='myBorder mx-2 bg-white position-relative'>
                    <div className='extra1 px-0'></div> 
                    <p className='py-2 px-3 w-50'>Source from industry hub</p>
                    <IoSearch className='rounded-circle bg-info conetn contentBox p-3 text-light'/> 
                </div>
            </Col>
            <Col xl={3} md={6} className=' gx-0 my-xl-0 my-2'>
                <div className='myBorder mx-2 bg-white  position-relative'>
                    <div className='extra2 px-0'></div> 
                    <p className='py-2 px-3 w-50'>Customize Your Products</p> 
                    <FaBoxArchive  className='rounded-circle bg-info conetn contentBox p-3 text-light'/> 
                </div>
            </Col>
            <Col xl={3} md={6} className=' gx-0 my-xl-0 my-2'>
                <div className='myBorder mx-2 bg-white  position-relative'>
                    <div className='extra3 px-0'></div> 
                    <p className='py-2 px-3 w-75'>Fast, reliable shipping by ocean on air</p>
                    <BiRightArrow className='rounded-circle bg-info conetn contentBox p-3 text-light'/> 
                </div>
            </Col>
            <Col xl={3} md={6} className=' gx-0 my-xl-0 my-2'>
                <div className='myBorder mx-2 bg-white  position-relative'>
                    <div className='extra4 px-0'></div> 
                    <p className='py-2 px-3 w-75'>Product monitoring and inspection</p>
                    <GiCheckedShield className='rounded-circle bg-info conetn contentBox p-3 text-light'/> 
                </div>
            </Col>
        </Row>
    </div>
  )
}

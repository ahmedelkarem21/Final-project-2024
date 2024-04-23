import React from 'react'
import {Breadcrumb, Container} from "react-bootstrap"

export default function Crumb() {
  return (
    <div>
        <Breadcrumb className='py-0 mx-3 text-center text-xl-start' id='myCrumb'>
            <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>Clothings</Breadcrumb.Item>
            <Breadcrumb.Item active>Men's wear</Breadcrumb.Item>
            <Breadcrumb.Item active>Summer clothing</Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}

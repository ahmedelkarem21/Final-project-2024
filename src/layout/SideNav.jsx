import React from 'react'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Button, Collapse } from "react-bootstrap"
import { MdOutlineSubject } from "react-icons/md";

export default function SideNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className='px-2 mx-2 text-xl-start text-center border-top border-bottom'>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="light"
                className='my-2'
            >
                <MdOutlineSubject/>
                <span className='grayText mx-1'>All Categories</span>
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <div className='py-2'>
                        <h6 className='fw-bold'>Category</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-light px-0 border-0">Mobile accessory</li>
                            <li className="list-group-item bg-light px-0 border-0" >Electronics</li>
                            <li className="list-group-item bg-light px-0 border-0">Smartphones</li>
                            <li className="list-group-item bg-light px-0 border-0">Modern tech</li>
                            <li className="list-group-item bg-light text-primary px-0 border-0">see all</li>
                        </ul>
                    </div>
                    <div className='my-3 border-top py-2'>
                        <h6 className='fw-bold'>Brands</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">Samsung</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1" >Apple</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">Huawei</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">Pocco</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">Lenovo</label>
                            </li>
                            <li className="list-group-item bg-light text-primary px-0">see all</li>
                        </ul>
                    </div>
                    <div className='my-3 border-top py-2'>
                        <h6 className='fw-bold'>Features</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">Metallic</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox " />
                                <label className="form-check-label mx-1" >Plastic Cover</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">8GB Ram</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">Super power</label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-1">Large Memory</label>
                            </li>
                            <li className="list-group-item bg-light text-primary px-0">see all</li>
                        </ul>
                    </div>
                    <div className='border-top py-2'>
                        <label className="form-label">Price range</label>
                        <input type="range" className="form-range" id="customRange1"></input>
                    </div>
                    <div className="form-check border-top py-2">
                        <h6 className='fw-bold'>Condition</h6>
                        <div className='py-1'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label">Any</label>
                        </div>
                        <div className='py-1'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label">Refurbished</label>
                        </div>
                        <div className='py-1'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label">Brand mew</label>
                        </div>
                        <div className='py-1'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label">Old items</label>
                        </div>
                    </div>
                    <div className='my-3 border-top py-2'>
                        <h6 className='fw-bold'>Ratings</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-2">
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                </label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-2">
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='fs-6' />
                                </label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-2">
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='fs-6' />
                                    <FaStar className='fs-6' />
                                </label>
                            </li>
                            <li className="list-group-item px-0 bg-light border-0">
                                <input className="form-check-input me-1" type="checkbox" />
                                <label className="form-check-label mx-2">
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='text-warning fs-6' />
                                    <FaStar className='fs-6' />
                                    <FaStar className='fs-6' />
                                    <FaStar className='fs-6' />
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

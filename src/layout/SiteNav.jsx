import { Container, Nav, Navbar, Button, InputGroup, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { FaMessage, FaHeart, FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.jpeg"
import { MdOutlineLanguage } from "react-icons/md";
import { useSelector } from 'react-redux';



export default function SiteNav() {
    var { t, i18n } = useTranslation()

    const countState = useSelector(state => state.counter)

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    return (
        <div className='bg-white site_nav'>
            <Navbar expand="lg" className="bg-body-tertiary py-4 ltr">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Site logo" width={60} />
                        <span className='text-primary fw-bold fs-4 mx-3'>Brand</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className='w-100 mx-4'>
                            <InputGroup className="mb-3 my-2">
                                <Form.Control aria-label="text" placeholder='search' className='w-50' />
                                <Form.Control aria-label="text" placeholder='All category' />
                                <Button>search</Button>
                            </InputGroup>
                        </div>
                    </Navbar.Collapse>
                    <div className='grayText mx-auto'>
                        <Row>
                            <Col className='text-center'>
                                <IoPerson />
                                <h6 className='my-1'>{t('profile')}</h6>
                            </Col>
                            <Col className='text-center'>
                                <FaHeart />
                                <h6 className='my-1'>{t('orders')}</h6>
                            </Col>
                            <Col className='text-center'>
                                <NavLink to="/Cart" className="nav-link d-flex">
                                    <div>
                                        <FaCartShopping />
                                        <h6 className='my-1'>{t('cart')}</h6>
                                    </div>
                                    <div className='text-danger fw-bold'>{countState}</div>
                                </NavLink>
                            </Col>
                            <Col className='mx-0 my-0 px-1'>
                                {/* <FaLanguage onClick={handleLanguage} className='langIcon my-1' /> */}
                                <MdOutlineLanguage onClick={handleLanguage} className='langIcon fs-2 my-1'/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Navbar>
            <div className='border-top border-bottom'>
                <Container >
                    <Row className='justify-content-between'>
                        <Col lg={11} xl={8} className='mx-0 mx-xs-5 mx-md-3 myLinks'>
                            <Navbar className='mx-0 mx-md-0 w-100 justify-content-center justify-content-xl-start'>
                                <Nav className="links">
                                    <NavLink to="/" className="nav-link mx-lg-2 mx-1">{t('home')}</NavLink>
                                    <NavLink to="/hot_offers" className="nav-link mx-lg-2 mx-1">{t('hot_offers')}</NavLink>
                                    <NavLink to="/single_product" className="nav-link mx-lg-2 mx-1">{t('gift_boxes')}</NavLink>
                                    <NavLink to="/one_product" className="nav-link mx-lg-2 mx-1">{t('projects')}</NavLink>
                                    <NavLink to="/products" className="nav-link mx-lg-2 mx-1">{t('menu_item')}</NavLink>
                                    <NavLink to="/products" className="nav-link mx-lg-2 mx-1">{t('help')}</NavLink>
                                    {/* <NavLink to="/addproduct" className="nav-link mx-lg-2 mx-1">add product</NavLink> */}
                                    {/* <NavLink to="/new_one" className="nav-link mx-lg-2 mx-1">New One</NavLink> */}
                                </Nav>
                            </Navbar>
                        </Col>
                        <Col lg={12} xl={3} className='mx-0'>
                            <Row>
                                <Col className='text-xl-start text-center px-0'>
                                    <Dropdown className='my-2'>
                                        <Dropdown.Toggle variant="white" id="dropdown-basic">{
                                            i18n.language === 'en' ? 'English, USD' : 'العربية - جنيه'
                                        }
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='w-25' id='myDrop'>
                                            <Dropdown.Item onClick={handleLanguage} >{
                                                i18n.language === 'en' ? 'Arabic, EGP' : 'English, USD'
                                            }</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col className='text-center px-0'>
                                    <Dropdown className='my-2'>
                                        <Dropdown.Toggle variant="white" id="dropdown-basic">{t('Ship_to')}
                                            <span className="fi fi-de mx-1"></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

import React from 'react'
import { Col, Container, Row, Dropdown} from "react-bootstrap"
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram, TiSocialYoutube} from "react-icons/ti";
import { FaApple, FaGooglePlay} from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { useTranslation } from "react-i18next"
import "/node_modules/flag-icons/css/flag-icons.min.css";




export default function Footer() {
    var { t, i18n } = useTranslation()
    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
  return (
    <div>
        <Container className='py-5'>
            <Row className='row-cols-xl-6 row-cols-lg-3 row-cols-sm-2 row-cols-2'>
                <Col className='my-lg-0 my-2'>   
                    <h2 className='text-primary fw-bold fs-4 py-2'>Brand</h2>
                    <p>{t('Best_information_about_company_gives_here')}</p>
                    <div>
                        <TiSocialFacebook/>
                        <TiSocialTwitter className='mx-1'/>
                        <TiSocialLinkedin className='mx-1'/>
                        <TiSocialInstagram className='mx-1'/>
                        <TiSocialYoutube className='mx-1'/>
                    </div>
                </Col>
                <Col className='my-lg-0 my-2'>
                    <h5>{t('About')}</h5>
                    <h6 className='grayText'>{t('About_us')}</h6>
                    <h6 className='grayText'>{t('Find_store')}</h6>
                    <h6 className='grayText'>{t('Categories')}</h6>
                    <h6 className='grayText'>{t('Blogs')}</h6>
                </Col>
                <Col className='my-lg-0 my-2'>
                    <h5>{t('Partnership')}</h5>
                    <h6 className='grayText'>{t('About_Us')}</h6>
                    <h6 className='grayText'>{t('Find_store')}</h6>
                    <h6 className='grayText'>{t('Categories')}</h6>
                    <h6 className='grayText'>{t('Blogs')}</h6>
                </Col>
                <Col className='my-lg-0 my-2'>
                    <h5>{t('Information')}</h5>
                    <h6 className='grayText'>{t('Help_Center')}</h6>
                    <h6 className='grayText'>{t('Money_Refund')}</h6>
                    <h6 className='grayText'>{t('Shipping')}</h6>
                    <h6 className='grayText'>{t('Contact_us')}</h6>
                </Col>
                <Col className='my-lg-0 my-2'>
                    <h5>For users</h5>
                    <h6 className='grayText'>Login</h6>
                    <h6 className='grayText'>Register</h6>
                    <h6 className='grayText'>Settings</h6>
                    <h6 className='grayText'>My Orders</h6>
                </Col>
                <Col className='my-lg-0 my-1'> 
                    <h5 className='mx-4'>{t('Get_app')}</h5>
                    <div className='mx-1 ltr'>
                        <Row className='bg-dark text-white rounded mx-3  my-2 py-1'>
                            <Col sm={3} className='p-0 text-xl-end text-center'>
                                <IoLogoApple className='fs-1 text-white text-end'/>
                            </Col>
                            <Col sm={8} className='text-center px-0 py-2'>
                                <h6 className='m-0 p-0 fw-lighter fs-tiny'>Download on</h6>
                                <h5 className='m-0 p-0'>App store</h5>
                            </Col>
                        </Row>
                    </div>
                    <div className='mx-1 ltr'>
                        <Row className='bg-dark text-white rounded mx-3 my-1 py-1'>
                            <Col sm={3} className='p-0 text-xl-end text-center'>
                                <FaGooglePlay className='fs-3 text-white my-2'/>
                            </Col>
                            <Col sm={8} className='text-xl-center text-center px-0 py-2'>
                                <h6 className='my-0 mx-2 p-0 fw-lighter fs-tiny'>Get on</h6>
                                <h5 className='m-0 p-0'>Google play</h5>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="mainBackground ltr">
            <Container >
                <Row>
                    <Col>
                        <h6 className='py-4 mx-1'>
                            {/* <span className='fs-4 lh-lg'> &copy; </span> */}
                             2023 Ecommerce.
                        </h6>
                    </Col>
                    <Col className='my-3 text-end'>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                {
                                    i18n.language === 'en' ? <span className="fi fi-gb mx-2"></span> : <span className="fi fi-eg mx-2"></span>
                                }
                            {
                                i18n.language === 'en' ? 'English' : 'Arabic' 
                            }
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleLanguage}>
                                    {
                                    i18n.language === 'en' ? <span className="fi fi-eg mx-2"></span> : <span className="fi fi-gb mx-2"></span>
                                    }
                                {
                                    i18n.language === 'en' ? 'Arabic'  : 'English' 
                                }
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>    
            </Container>
        </div>
    </div>
  )
}

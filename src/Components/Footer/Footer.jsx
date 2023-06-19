import React from 'react'
import { course1, course2, course3, course4, course5, course6, wewave_logo_white } from '../../Assets/Index'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css"
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={6} md={6} lg={3}>
                        <div className="footer_wiget">
                            <div className="logo">
                                <Link to="#"><img src={wewave_logo_white} alt="" /></Link>
                            </div>
                            <p>
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum.
                            </p>
                            <ul className="social_link">
                                <li>
                                    <Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                </li>
                                <li>
                                    <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                                </li>
                                <li>
                                    <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                                </li>
                                <li>
                                    <Link to="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                </li>
                                <li>
                                    <Link to="#"><FontAwesomeIcon icon={faPinterestP} /></Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={3}>
                        <div className="footer_content">
                            <h3 className="footer_title">explore</h3>
                            <ul className="links">
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p>about us</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p>upcoming events</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p>blogs & news</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p><span>faq</span> question</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p>testimonial</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p>privacy policy</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col sm={6} md={6} lg={3}>
                        <div className="footer_content newsletter_arae">
                            <h3 className="footer_title">Newsletter</h3>

                            <p>Stay always in touch! Subscribe to our newsletter.</p>
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter Your Email" className="form-control" />
                                </div>
                                <button className="custom_btn">
                                    Submit
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </form>
                        </div>
                    </Col>

                    <Col sm={6} md={6} lg={3}>
                        <div className="footer_content">
                            <h3 className="footer_title">Our Gallery</h3>
                            <ul className="fblog_area">
                                <li> <img src={course1} alt="img1" className="img-fluid" /> </li>
                                <li> <img src={course2} alt="img2" className="img-fluid" /> </li>
                                <li> <img src={course3} alt="img3" className="img-fluid" /> </li>
                                <li> <img src={course4} alt="img4" className="img-fluid" /> </li>
                                <li> <img src={course5} alt="img5" className="img-fluid" /> </li>
                                <li> <img src={course6} alt="img6" className="img-fluid" /> </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copy_right_bar">
                <Row>
                    <Col sm={12}>
                        <span className="copy_right">© 2022-23 WeWave. All Rights Reserved.</span>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

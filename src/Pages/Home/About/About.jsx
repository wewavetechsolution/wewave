import React from 'react'
import './About.css'
import { about_image_01, about_image_02, shape_04_01 } from '../../../Assets/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowsToDot } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <section className="about_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="about_img">
                            <img src={about_image_01} alt="about_img" className="img-fluid" />
                            <img src={about_image_02} alt="about_img2" className="front_img" />
                            <img src={shape_04_01} alt="shape" className="shape_img" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="about_content">
                            <div className="heading text-left">
                                <span>about us</span>
                                <h2>We Execute Our Ideas From The Start To Finish</h2>
                                <p>
                                    Wewave is a leading provider of cutting-edge IT services, with a
                                    focus on web development, UI/UX design, mobile app development,
                                    web design, content authoring, maintenance, and digital marketing.
                                    The company's main goal is to provide its clients with abrasive,
                                    high-quality solutions that will aid them in achieving their
                                    business goals.
                                </p>
                                {/* <p>We at Wewave think that being innovative and creative are what keeps us one step ahead of the competition. Our team of skilled developers and designers works directly with clients to provide unique solutions that are both functional and aesthetically pleasing. We take pleasure in our capacity to offer first-rate assistance and client service throughout the whole development process and beyond.</p> */}
                            </div>
                            <div className="about_tab">
                                <nav>
                                    <Tabs defaultActiveKey="nav-home" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="nav-home" title={<span><FontAwesomeIcon icon={faArrowsToDot} /> Our Mission</span>}>
                                            Delivering high-quality, individualised IT solutions that meet
                                            and beyond our clients' expectations is our aim at WeWave. We
                                            are dedicated to offering outstanding customer service and
                                            support throughout the whole development process and beyond
                                            since we feel that originality and innovation are the key
                                            factors that allow us to stay one step ahead of the competition.
                                            Our mission is to support organisations in achieving their goals
                                            for digital transformation and prospering in the rapidly
                                            evolving technological environment.
                                        </Tab>
                                        <Tab eventKey="nav-profile" title={<span><FontAwesomeIcon icon={faEye} /> Our Vision</span>}>
                                            To be the premier provider of innovative IT solutions that are
                                            unique and help organisations thrive in the modern digital
                                            environment.
                                        </Tab>
                                    </Tabs>
                                </nav>
                            </div>
                            <Link to="#" className="custom_btn">
                                Know about us {" "} <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

import React from 'react'
import "./Service.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ui } from '../../../Assets/Index'
import ReactOwlCarousel from 'react-owl-carousel'

export default function Service() {

    const setting = {
        loop: true,
        margin: 30,
        autoplay: true,
        nav: false,
        dots: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    }

    return (
        <section className="services_sec">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading text-center">
                            <span>Our Services</span>
                            <h2>We Are Dedicated To Serve You All Time.</h2>
                        </div>
                    </div>
                    <ReactOwlCarousel className='service_slider owl-carousel' {...setting}>
                        <div className="service_item">
                            <div className="service_icon_area">
                                <div className="service_icon">
                                    <img src={ui} alt="" />
                                </div>
                            </div>
                            <div className="service_title">UI/UX Design</div>
                            <div className="service_des">
                                We’re wildly passionate about our purpose, and it has us
                                transforming everything.
                            </div>
                            <div className="read_btn">
                                <Link to="#" className="btn service_read">
                                    read more{" "}
                                    <span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </span>
                                </Link>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 100 100"
                                version="1.1"
                                preserveAspectRatio="none"
                                height="32px"
                                style={{ fill: "#fff" }}
                            >
                                <path
                                    strokeWidth={0}
                                    d="M0 0 C50 100 50 100 100 0  L100 100 0 100"
                                />
                            </svg>
                        </div>
                        <div className="service_item">
                            <div className="service_icon_area">
                                <div className="service_icon">
                                    <img src={ui} alt="" />
                                </div>
                            </div>
                            <div className="service_title">UI/UX Design</div>
                            <div className="service_des">
                                We’re wildly passionate about our purpose, and it has us
                                transforming everything.
                            </div>
                            <div className="read_btn">
                                <Link to="#" className="btn service_read">
                                    read more{" "}
                                    <span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </span>
                                </Link>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 100 100"
                                version="1.1"
                                preserveAspectRatio="none"
                                height="32px"
                                style={{ fill: "#fff" }}
                            >
                                <path
                                    strokeWidth={0}
                                    d="M0 0 C50 100 50 100 100 0  L100 100 0 100"
                                />
                            </svg>
                        </div>
                        <div className="service_item">
                            <div className="service_icon_area">
                                <div className="service_icon">
                                    <img src={ui} alt="" />
                                </div>
                            </div>
                            <div className="service_title">UI/UX Design</div>
                            <div className="service_des">
                                We’re wildly passionate about our purpose, and it has us
                                transforming everything.
                            </div>
                            <div className="read_btn">
                                <Link to="#" className="btn service_read">
                                    read more{" "}
                                    <span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </span>
                                </Link>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 100 100"
                                version="1.1"
                                preserveAspectRatio="none"
                                height="32px"
                                style={{ fill: "#fff" }}
                            >
                                <path
                                    strokeWidth={0}
                                    d="M0 0 C50 100 50 100 100 0  L100 100 0 100"
                                />
                            </svg>
                        </div>
                        <div className="service_item">
                            <div className="service_icon_area">
                                <div className="service_icon">
                                    <img src={ui} alt="" />
                                </div>
                            </div>
                            <div className="service_title">UI/UX Design</div>
                            <div className="service_des">
                                We’re wildly passionate about our purpose, and it has us
                                transforming everything.
                            </div>
                            <div className="read_btn">
                                <Link to="#" className="btn service_read">
                                    read more{" "}
                                    <span>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </span>
                                </Link>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 100 100"
                                version="1.1"
                                preserveAspectRatio="none"
                                height="32px"
                                style={{ fill: "#fff" }}
                            >
                                <path
                                    strokeWidth={0}
                                    d="M0 0 C50 100 50 100 100 0  L100 100 0 100"
                                />
                            </svg>
                        </div>
                        <div className="service_item">
                            <div className="service_icon_area">
                                <div className="service_icon">
                                    <img src={ui} alt="" />
                                </div>
                            </div>
                            <div className="service_title">UI/UX Design</div>
                            <div className="service_des">
                                We’re wildly passionate about our purpose, and it has us
                                transforming everything.
                            </div>
                            <div className="read_btn">
                                <Link to="#" className="btn service_read">
                                    read more
                                </Link>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 100 100"
                                version="1.1"
                                preserveAspectRatio="none"
                                height="32px"
                                style={{ fill: "#fff" }}
                            >
                                <path
                                    strokeWidth={0}
                                    d="M0 0 C50 100 50 100 100 0  L100 100 0 100"
                                />
                            </svg>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>
        </section>
    )
}

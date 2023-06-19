import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Banner.css"
import { banner_hero1, girl_bg } from '../../../Assets/Index'

export default function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="banner_container">
                            <h5>IT Design, Development &amp; Consulting</h5>
                            <h1>Developing Powerful Brands &amp; Business Identities</h1>
                            <p>
                                We’re Providing the Best Innovative Website Solutions for your All
                                Businesses Better Growth &amp; Futures.
                            </p>
                            <Link to="#" className="custom_btn">
                                Get Started today <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner_img">
                            <img
                                src={banner_hero1}
                                alt="banner_img1"
                                className="img-fluid banner_img1"
                            />
                            <img
                                src={girl_bg}
                                alt="banner_bg"
                                className="img_bg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* wave section */}
            <div className="waves">
                <div className="wave" id="wave1" />
                <div className="wave" id="wave2" />
                <div className="wave" id="wave3" />
                <div className="wave" id="wave4" />
            </div>
            {/* wave section */}
        </section>

    )
}

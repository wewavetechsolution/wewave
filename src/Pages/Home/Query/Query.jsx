import React from 'react'
import "./Query.css"
import { booking_1, shape3 } from '../../../Assets/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Query() {
    return (
        <section class="feature">
            <div class="container">
                <div class="row content_row">
                    <div class="col-sm-12 col-md-6">
                        <div class="heading">
                            <span>Get A Quote</span>
                            <h2>Fill Out This Form Now</h2>
                            <p>
                                If you're looking for a reliable partner to help you achieve your digital transformation objectives, we would love to hear from you. Get in touch with us today to learn more about our services and to request a quote. We look forward to the opportunity to work with you and help your business succeed.
                            </p>
                        </div>
                        <div class="contact_content">
                            <form>
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="First Name"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="E-mail ID"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Contact No"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <textarea
                                                name=""
                                                id=""
                                                rows="5"
                                                class="form-control"
                                                placeholder="Type Your Message Here"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <button></button>
                                        <button class="custom_btn">
                                            Submit <FontAwesomeIcon icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="booking-img">
                            <img src={booking_1} alt="booking_1" class="img-fluid" />
                            <div class="booking-shape">
                                <img src={shape3} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

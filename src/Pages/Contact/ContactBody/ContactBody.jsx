import React from 'react'
import './ContactBody.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeadphones, faHome } from '@fortawesome/free-solid-svg-icons'

export default function ContactBody() {
    return (
        <section className="contact_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="contact_info">
                            <span>contact us</span>
                            <h3>Get in Touch with us</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ipsam dolor id corrupti
                                inventore eaque nulla assumenda totam pariatur libero magnam? Quibusdam doloremque aperiam
                                debitis provident laudantium reiciendis soluta mollitia!
                            </p>
                            <ul className="description_list mt-4">
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHome} />
                                    </div>
                                    <div className="description">
                                        <h4>our location</h4>
                                        <p>
                                            99 S.t jomblo park Pekhanbaur 28546, indonesia
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHeadphones} />
                                    </div>
                                    <div className="description">
                                        <h4>phone number</h4>
                                        <p>
                                            <a href="tel:025 89658626">025 89658626</a>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="description">
                                        <h4>email address</h4>
                                        <p>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="contact_form">
                            <form action="">
                                <div className="from_group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Enter your Name" />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Enter your Email" />
                                    </div>
                                    <div className="input-group">
                                        <input type="tel" className="form-control" placeholder="Enter your Phone Number" />
                                    </div>
                                    <div className="input-group">
                                        <textarea name="" id="" rows="5" className="form-control"
                                            placeholder="Enter your Phone Number"></textarea>
                                    </div>
                                    <button type="submit" className="send_btn">send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

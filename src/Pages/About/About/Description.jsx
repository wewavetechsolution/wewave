import React from 'react'
import "./Description.css"
import { about_s4_bubble, about_s4_lines, ipad } from '../../../Assets/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faTags, faTextWidth } from '@fortawesome/free-solid-svg-icons'


export default function Description() {
    return (
        <section className="about section-padding style-4">
            <div className="content frs-content">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="img mb-30 mb-lg-0">
                                <img src={ipad} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="info">
                                <div className="section-head style-4">
                                    <small className="title_small">Notero - Easy Notes App</small>
                                    <h2 className="mb-30">
                                        The Notero For <span>Creatives</span>{" "}
                                    </h2>
                                </div>
                                <p className="text mb-40">
                                    Stay focused and productive with a clean and clutter-free note{" "}
                                    <br />
                                    space. The flexible ways to organize your notes: hashtags, nested
                                    notebooks, pinning notes to the top of the note list, etc
                                </p>
                                <ul>
                                    <li className="d-flex align-items-center mb-3">
                                        <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <FontAwesomeIcon icon={faTags} />
                                        </small>
                                        <h6 className="fw-bold">
                                            Filtering notes using matched keywords
                                        </h6>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <FontAwesomeIcon icon={faSync} />
                                        </small>
                                        <h6 className="fw-bold">Automatically sync in real times</h6>
                                    </li>
                                    <li className="d-flex align-items-center ">
                                        <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                                            <FontAwesomeIcon icon={faTextWidth} />
                                        </small>
                                        <h6 className="fw-bold">
                                            Complete note editor with rich text options
                                        </h6>
                                    </li>
                                </ul>
                                <a className="btn rounded-pill bg-blue4 fw-bold text-white mt-50" href="/page-contact-5/">
                                    <small>Free Register</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={about_s4_lines} alt="" className="lines" />
                <img src={about_s4_bubble} alt="" className="bubble" />
            </div>
        </section>
    )
}

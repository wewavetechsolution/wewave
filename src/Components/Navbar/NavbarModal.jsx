import React from 'react'
import "./NavbarModal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function NavbarModal() {

    const CloseHandaler = () => {
        document.getElementById('modal-container').classList.add('out')
        document.querySelector("body").classList.remove("modal-active")
    }

    return (
        <div id="modal-container">
            <div className="modal-close" onClick={CloseHandaler} />
            <div className="modal-background">
                <div className="modal">
                    <div className="quote_content">
                        <b>Fill tabs bellow</b>
                        <div className="contact_content">
                            <form>
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="E-mail ID" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Contact No" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <textarea name="" id="" rows={5} className="form-control" placeholder="Type Your Message Here" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <button />
                                        <button className="custom_btn">
                                            Submit <FontAwesomeIcon icon={faArrowRight} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

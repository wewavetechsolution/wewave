import React from 'react'
import { wewave_logo } from '../../Assets/Index'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import NavbarModal from './NavbarModal'

export default function Navbar() {

    const ShowHandaler = (id) => {
        document.getElementById('modal-container').removeAttribute('class');
        document.getElementById('modal-container').classList.add(id)
        document.querySelector("body").classList.add('modal-active')
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img src={wewave_logo} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">
                                        About us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        Pages
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </Link>
                                    <ul className="submenu">
                                        <li>
                                            <Link to="#">HTML</Link>
                                        </li>
                                        <li>
                                            <Link href="#">CSS</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="tls_plus">
                                                JavaScript <i className="fa-solid fa-plus" />
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <Link href="#">HTML</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">CSS</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">JavaScript</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Jquery</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Wordpress</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">React</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="#">Jquery</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Wordpress</Link>
                                        </li>
                                        <li>
                                            <Link href="#">React</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right_area">
                            <button className="custom_btn button" id="one" onClick={(e) => ShowHandaler(e.target.id)}>
                                Get a Quote
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
            <NavbarModal />
        </>
    )
}

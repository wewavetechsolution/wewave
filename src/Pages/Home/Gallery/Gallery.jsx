import React, { useState } from 'react'
import IsoTopeGrid from "react-isotope";
import cardsLayout from "./cardsLayout.json";
import filtersList from "./filters.json";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Gallery.css"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Gallery() {
    const [filters, updateFilters] = useState(filtersList);

    const onFilter = (event) => {
        const { target: { value, checked } } = event;
        updateFilters((state) =>
            state.map((f) => {
                if (f.isChecked === true) {
                    return { ...f, isChecked: false };
                }
                return f;
            })
        );

        updateFilters((state) =>
            state.map((f) => {
                if (f.label === value) {
                    return {
                        ...f,
                        isChecked: checked
                    };
                }
                return f;
            })
        );
    };

    return (
        <>
            <section className="gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="heading text-center">
                                <span>Our Gallery</span>
                                <h2>creating a community of life long learners</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                    omnis? Nobis asperiores natus aperiam? Aperiam, asperiores eligendi.
                                    Quaerat numquam alias ex voluptatem soluta. Animi nesciunt nulla ad
                                    dolores veniam voluptas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="gallery_menu">
                                <div className='filterbuttongroup'>
                                    {filters.map((f) => (
                                        <div className={`filterButton ${f.isChecked === true ? "active" : ""}`} key={`${f.label}_key`}>
                                            <input id={f.label} type="checkbox" value={f.label} onChange={onFilter} checked={f.isChecked} hidden />
                                            <label htmlFor={f.label}>{f.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row grid-fliter" style={{ "minHeight": "527px" }}>
                        <IsoTopeGrid gridLayout={cardsLayout} noOfCols={3} filters={filters} unitWidth={416} unitHeight={304}>
                            {cardsLayout.map((card) => (
                                <div key={card.id} className="col-lg-4 col-md-6 col-sm-6 col gallery_items ternding features all">
                                    <div className="gallery_img">
                                        <img src={card.image} alt="img1" className="img-fluid" />
                                        <div className="gallery_overley">
                                            <div className="gallery_content">
                                                <h4>{card.title}</h4>
                                                <p>{card.content}</p>
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <FontAwesomeIcon icon={faFacebookF} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <FontAwesomeIcon icon={faTwitter} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <FontAwesomeIcon icon={faInstagram} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </IsoTopeGrid>
                    </div>
                </div>
                <div class="center_btn">
                    <button to="#" class="custom_btn">
                        Know about us <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </section>
        </>
    )
}

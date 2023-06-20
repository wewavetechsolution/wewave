import React from 'react'
import { Link } from 'react-router-dom'
import "./Counter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function AboutCounter() {
    return (
        <section class="join_us">
            <div class="container">
                <div class="counter_inner">
                    <div class="row align-items-center">
                        <div class="col-sm-9">
                            <span class="join_text">Bright future that we <b>cherish</b>. We thrive for <b>success</b>.</span>
                        </div>
                        <div class="col-sm-3">
                            <Link href="#" class="custom_btn">Join us <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import "./Quality.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMicrochip, faThumbsUp, faVialCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function Quality() {
    return (
        <section class="quality_sec">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="quality_item">
                            <div class="quality_header">
                                <div class="quality_icon"><FontAwesomeIcon icon={faThumbsUp} /></div>
                                <div class="quality_title">Quality Assurance System</div>
                            </div>
                            <p>Our service offerings enhance customer experience throughout secure & highly functional end-to-end
                                warranty management.
                            </p>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="quality_item">
                            <div class="quality_header">
                                <div class="quality_icon"><FontAwesomeIcon icon={faVialCircleCheck} /></div>
                                <div class="quality_title">Accurate Testing Processes </div>
                            </div>
                            <p>Develop and propose product improvements through periodical and accurate testing, repairing & refining
                                every version.
                            </p>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="quality_item">
                            <div class="quality_header">
                                <div class="quality_icon"><FontAwesomeIcon icon={faGlobe} /></div>
                                <div class="quality_title">Smart API Generation</div>
                            </div>
                            <p>Develop and propose product improvements through periodical and accurate testing, repairing & refining
                                every version.
                            </p>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="quality_item">
                            <div class="quality_header">
                                <div class="quality_icon"><FontAwesomeIcon icon={faMicrochip} /></div>
                                <div class="quality_title">Infrastructure Integration Technology
                                </div>
                            </div>
                            <p>At WeWave, we have a holistic and integrated approach towards core modernization to experience
                                technological evolution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

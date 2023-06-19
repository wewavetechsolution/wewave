import React from 'react'
import "./Counsup.css"
import CountUp from 'react-countup'

export default function Countup() {
    return (
        <section className="counter_up">
            <div className="container">
                <div className="counter_inner">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="counter_item">
                                <b className="number"><CountUp end={269} /></b>
                                <p>happy client</p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="counter_item">
                                <b className="number"><CountUp end={32} /></b>
                                <p>finished projects</p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="counter_item">
                                <b className="number"><CountUp end={73} /></b>
                                <p>skilled experts</p>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="counter_item">
                                <b className="number"><CountUp end={318} /></b>
                                <p>daily likes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

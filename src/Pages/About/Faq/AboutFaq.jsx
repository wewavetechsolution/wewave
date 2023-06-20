import React from 'react'
import "./AboutFaq.css"
import { faq_j, shape3 } from '../../../Assets/Index'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

export default function AboutFaq() {
    return (
        <section className="faq_sec">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="heading text-center">
                            <span>FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={12} md={6}>
                        <Accordion id="accordionExample">
                            <Accordion.Item eventKey="collapseOne">
                                <Accordion.Header> How can we help your business? </Accordion.Header>
                                <Accordion.Body>
                                    Through the collaboration with customers in discussing needs and
                                    demand, we're able to attain mutual understanding, gain customer
                                    trust to offer appropriate advice, and bring about suggestions
                                    on suitable technology to transform your business.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="collapseTwo">
                                <Accordion.Header> What are the advantages of WeWave? </Accordion.Header>
                                <Accordion.Body>
                                    WeWave takes into consideration every little detail to make sure
                                    the system run smoothly and responsively. Mitech employs a new
                                    technique called Minified Technology for securing customers'
                                    database &amp; building up highly confidential firewalls.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="collapseThree">
                                <Accordion.Header> How working process is simplified? </Accordion.Header>
                                <Accordion.Body>
                                    We reduce redundant complex calculations and lengthy erroneous
                                    code texts with simpler ones to ensure Mitech would run
                                    seamlessly and the design is reserved in its best form when
                                    viewed from a wide range of mobile devices &amp; browsers.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="booking-img">
                            <img src={faq_j} alt="faq" className="img-fluid" />
                            <div className="booking-shape">
                                <img src={shape3} alt="shape" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

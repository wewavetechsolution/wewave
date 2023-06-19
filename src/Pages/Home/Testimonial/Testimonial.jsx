import React from 'react'
import "./Testimonial.css"
import ReactOwlCarousel from 'react-owl-carousel'
import { client1, client2, client3 } from '../../../Assets/Index'

export default function Testimonial() {

    const setting = {
        loop: true,
        margin: 30,
        autoplay: true,
        nav: false,
        dots: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }

    return (
        <div class="testimonial">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-6">
                        <div class="heading text-center">
                            <span>TESTIMONIAL</span>
                            <h2>What Our Client Says</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <ReactOwlCarousel className='testimonial_slider owl-carousel' {...setting}>
                        <div class="testimonial_items text-center">
                            <blockquote>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                                odio aliquid, culpa facilis veritatis quisquam maiores sequi
                                amet ea, iure suscipit impedit mollitia! Nam sit repellat
                                voluptatem nulla quia est!
                            </blockquote>
                            <div class="client_box">
                                <div class="cl_img">
                                    <img src={client1} alt="" />
                                </div>
                                <div class="cl_info">
                                    <h4>Geraldine D. Anspach</h4>
                                    <span>SEO experts</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial_items text-center">
                            <blockquote>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                                odio aliquid, culpa facilis veritatis quisquam maiores sequi
                                amet ea, iure suscipit impedit mollitia! Nam sit repellat
                                voluptatem nulla quia est!
                            </blockquote>
                            <div class="client_box">
                                <div class="cl_img">
                                    <img src={client2} alt="" />
                                </div>
                                <div class="cl_info">
                                    <h4>Geraldine D. Anspach</h4>
                                    <span>SEO experts</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial_items text-center">
                            <blockquote>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                                odio aliquid, culpa facilis veritatis quisquam maiores sequi
                                amet ea, iure suscipit impedit mollitia! Nam sit repellat
                                voluptatem nulla quia est!
                            </blockquote>
                            <div class="client_box">
                                <div class="cl_img">
                                    <img src={client3} alt="" />
                                </div>
                                <div class="cl_info">
                                    <h4>Geraldine D. Anspach</h4>
                                    <span>SEO experts</span>
                                </div>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

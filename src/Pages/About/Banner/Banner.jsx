import React from 'react'
import { softbanner_aboubg } from '../../../Assets/Index'
import { Link } from 'react-router-dom'
import "./Banner.css"

export default function AboutBanner() {
    return (
        <div class="soft_banner">
            <img src={softbanner_aboubg} alt="" class="img-fluid" />
                <div class="soft_banner_overley">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h2>About Us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="soft_wave"></div>
        </div>
    )
}

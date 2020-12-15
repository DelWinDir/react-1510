import React from 'react';

export default function Testimonials() {
    return(
        <div className="content-lg container">
            <div className="row">
                <div className="col-sm-9">
                    <h2>Customer Reviews</h2>

                    <div className="swiper-slider swiper-testimonials">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <blockquote className="blockquote">
                                    <div className="margin-b-20">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut
                                        laboret dolore magna aliqua. Ut enim minim veniam exercitation laboris ut siad
                                        consequat siad minim enum esqudiat dolore.
                                    </div>
                                    <div className="margin-b-20">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut
                                        laboret tempor incididunt dolore magna consequat siad minim aliqua.
                                    </div>
                                    <p><span className="fweight-700 color-link">Joh Milner</span>, Metronic Customer</p>
                                </blockquote>
                            </div>
                            <div className="swiper-slide">
                                <blockquote className="blockquote">
                                    <div className="margin-b-20">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div className="margin-b-20">
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.
                                    </div>
                                    <p><span className="fweight-700 color-link">Alex Clarson</span>, Metronic Customer
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="swiper-testimonials-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
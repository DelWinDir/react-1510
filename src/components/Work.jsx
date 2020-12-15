import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Work() {
    return(
        <div className="bg-color-sky-light overflow-h">
            <div className="content-lg container">
                <div className="row margin-b-40">
                    <div className="col-sm-6">
                        <h2>Showcase</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                    </div>
                </div>

                <div className="masonry-grid">
                    <div className="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                    <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-8">
                        <div className="work wow fadeInUp" data-wow-duration=".3" data-wow-delay=".1s">
                            <div className="work-overlay">
                                <img className="full-width img-responsive" src="img/800x400/01.jpg" alt="Portfolio Images" />
                            </div>
                            <div className="work-content">
                                <h3 className="color-white margin-b-5">Art Of Coding</h3>
                                <p className="color-white margin-b-0">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                            </div>
                            <NavLink exact to="#" className="content-wrapper-link" ></NavLink>
                        </div>
                    </div>
                    <div className="masonry-grid-item col-xs-6 col-sm-6 col-md-4">
                        <div className="work wow fadeInUp" data-wow-duration=".3" data-wow-delay=".2s">
                            <div className="work-overlay">
                                <img className="full-width img-responsive" src="img/397x400/01.jpg" alt="Portfolio Images" />
                            </div>
                            <div className="work-content">
                                <h3 className="color-white margin-b-5">Clean Design</h3>
                                <p className="color-white margin-b-0">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                            </div>
                            <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                        </div>
                    </div>
                    <div className="masonry-grid-item col-xs-6 col-sm-6 col-md-4">
                        <div className="work wow fadeInUp" data-wow-duration=".3" data-wow-delay=".3s">
                            <div className="work-overlay">
                                <img className="full-width img-responsive" src="img/397x300/01.jpg" alt="Portfolio Images" />
                            </div>
                            <div className="work-content">
                                <h3 className="color-white margin-b-5">Clean Design</h3>
                                <p className="color-white margin-b-0">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                            </div>
                            <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                        </div>
                    </div>
                    <div className="masonry-grid-item col-xs-6 col-sm-6 col-md-4">
                        <div className="work wow fadeInUp" data-wow-duration=".3" data-wow-delay=".4s">
                            <div className="work-overlay">
                                <img className="full-width img-responsive" src="img/397x300/02.jpg" alt="Portfolio Images" />
                            </div>
                            <div className="work-content">
                                <h3 className="color-white margin-b-5">Clean Design</h3>
                                <p className="color-white margin-b-0">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                            </div>
                            <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                        </div>
                    </div>
                    <div className="masonry-grid-item col-xs-6 col-sm-6 col-md-4">
                        <div className="work wow fadeInUp" data-wow-duration=".3" data-wow-delay=".5s">
                            <div className="work-overlay">
                                <img className="full-width img-responsive" src="img/397x300/03.jpg" alt="Portfolio Images" />
                            </div>
                            <div className="work-content">
                                <h3 className="color-white margin-b-5">Clean Design</h3>
                                <p className="color-white margin-b-0">Lorem ipsum dolor sit amet consectetur
                                    adipiscing</p>
                            </div>
                            <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
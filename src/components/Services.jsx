import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Services() {
    return(
        <div className="bg-color-sky-light" data-auto-height="true">
            <div className="content-lg container">
                <div className="row row-space-1 margin-b-2">
                    <div className="col-sm-4 sm-margin-b-2">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-chemistry"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Art Of Coding</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad
                                        esqudiat dolor</p>
                                </div>
                                <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 sm-margin-b-2">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".2s">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-screen-tablet"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Responsive Design</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".1s">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-badge"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Feature Reach</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad
                                        esqudiat dolor</p>
                                </div>
                                <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-space-1">
                    <div className="col-sm-4 sm-margin-b-2">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".4s">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-notebook"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Useful Documentation</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 sm-margin-b-2">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".5s">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-speedometer"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Fast Delivery</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                </div>
                                <NavLink exact to="#" className="content-wrapper-link"></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".6s">
                            <div className="service" data-height="height">
                                <div className="service-element">
                                    <i className="service-icon icon-badge"></i>
                                </div>
                                <div className="service-info">
                                    <h3>Free Plugins</h3>
                                    <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad
                                        esqudiat dolor</p>
                                </div>
                                <NavLink exact to="" className="content-wrapper-link"></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Team() {
    return(
        <div className="bg-color-sky-light">
            <div className="content-lg container">
                <div className="row margin-b-40">
                    <div className="col-sm-6">
                        <h2>Meet the Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="bg-color-white margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <img className="img-responsive" src="img/770x860/01.jpg" alt="Team Images" />
                            </div>
                        </div>
                        <h4><NavLink exact to="#">Alicia Keys</NavLink> <span
                            className="text-uppercase margin-l-20">Project Manager</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <NavLink exact to="#" className="link">Read More</NavLink>
                    </div>

                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="bg-color-white margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <img className="img-responsive" src="img/770x860/02.jpg" alt="Team Images" />
                            </div>
                        </div>
                        <h4><NavLink exact to="#">James Millner</NavLink> <span
                            className="text-uppercase margin-l-20">Lead Developer</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <NavLink exact to="#" className="link">Read More</NavLink>
                    </div>

                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="bg-color-white margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <img className="img-responsive" src="img/770x860/03.jpg" alt="Team Images" />
                            </div>
                        </div>
                        <h4><NavLink exact to="#">Scarlet Johanson</NavLink> <span
                            className="text-uppercase margin-l-20">Designer</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <NavLink exact to="#" className="link">Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
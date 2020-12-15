import React from "react";
import { NavLink } from 'react-router-dom';

export default function Paralax() {
    return(
        <div className="section-seperator">
            <div className="content-lg container">
                <div className="row">
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                            <h3>Art Of Coding</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
                            <NavLink exact to="#" className="link" >Read More</NavLink>
                        </div>
                    </div>
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".2s">
                            <h3>Clean Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
                            <NavLink exact to="#" className="link">Read More</NavLink>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".1s">
                            <h3>Amazing Support</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna ut consequat siad esqudiat dolor</p>
                            <NavLink exact to="#" className="link">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
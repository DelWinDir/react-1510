import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Products() {
    return(
        
        <div className="content-lg container">
            <div className="row margin-b-40">
                <div className="col-sm-6">
                    <h2>Latest Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                </div>
            </div>


            <div className="row">
                <div className="col-sm-4 sm-margin-b-50">
                    <div className="margin-b-20">
                        <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img className="img-responsive" src="img/970x647/01.jpg" alt="Latest Products Images" />
                        </div>
                    </div>
                    <h4><NavLink exact to="#">Triangle Roof</NavLink> <span className="text-uppercase margin-l-20">Management</span>
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                    <NavLink  exact to="#" className="link">Read More</NavLink>
                </div>

                <div className="col-sm-4 sm-margin-b-50">
                    <div className="margin-b-20">
                        <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img className="img-responsive" src="img/970x647/02.jpg" alt="Latest Products Images" />
                        </div>
                    </div>
                    <h4><NavLink exact to="#">Curved Corners</NavLink> <span className="text-uppercase margin-l-20">Developmeny</span>
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor
                        magna ut consequat siad esqudiat dolor</p>
                    <NavLink exact to="#" className="link">Read More</NavLink>
                </div>

                <div className="col-sm-4 sm-margin-b-50">
                    <div className="margin-b-20">
                        <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img className="img-responsive" src="img/970x647/03.jpg" alt="Latest Products Images" />
                        </div>
                    </div>
                    <h4><NavLink exact to="#">Bird On Green</NavLink> <span className="text-uppercase margin-l-20">Design</span></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor
                        magna ut consequat siad esqudiat dolor</p>
                    <NavLink exact to="#" className="link">Read More</NavLink>
                </div>>
            </div>
        </div>
    )
}
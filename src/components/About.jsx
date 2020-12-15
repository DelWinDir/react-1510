import React from 'react';

export default function About() {
    return(
        <div className="content-lg container">
            <div className="row margin-b-20">
                <div className="col-sm-6">
                    <h2>About</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-7 sm-margin-b-50">
                    <div className="margin-b-30">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret
                            dolore adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enimet minim
                            veniam magna aliqua. Ut enim minim veniam exercitation laboris ut siad consequat siad minim
                            enum esqudiat dolore.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret tempor
                        incididunt dolore magna consequat siad minim aliqua. Lorem ipsum dolor sit amet consectetur
                        adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua. Ut enim minim veniam
                        exercitation laboris ut siad consequat siad minim enum esqudiat dolore.</p>
                </div>
                <div className="col-sm-4 col-sm-offset-1">
                    <img className="img-responsive" src="img/640x380/01.jpg" alt="Our Office" />
                </div>
            </div>
        </div>
    )
}
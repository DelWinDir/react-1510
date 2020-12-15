import { React } from "react";

export default function Slider() {
    return(
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <div className="container">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                </ol>
            </div>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="img/1920x1080/01.jpg" className="img-responsive"  alt="Slider Images"/>
                        <div className="container">
                            <div className="carousel-centered">
                                <div className="margin-b-40">
                                    <h1 className="carousel-title">Hi-Tech Design</h1>
                                    <p>Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br/> enim minim estudiat veniam siad venumus dolore</p>
                                </div>
                                <a href="# " className="btn-theme btn-theme-sm btn-white-brd text-uppercase">Explore</a>
                            </div>
                        </div>
                </div>
                <div className="item">
                    <img className="img-responsive" src="img/1920x1080/02.jpg" alt="Slider Images"/>
                        <div className="container">
                            <div className="carousel-centered">
                                <div className="margin-b-40">
                                    <h2 className="carousel-title">Hi-Tech Design</h2>
                                    <p>Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua <br/> enim
                                        minim estudiat veniam siad venumus dolore</p>
                                </div>
                                <a href="# " className="btn-theme btn-theme-sm btn-white-brd text-uppercase">Explore</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
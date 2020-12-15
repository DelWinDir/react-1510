import { React } from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return(
    <header className="header navbar-fixed-top">
        <nav className="navbar" role="navigation">
            <div className="container">
                <div className="menu-container">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="toggle-icon"></span>
                    </button>

                    <div className="logo">
                        <a className="logo-wrap" href="index.html">
                            <img className="logo-img logo-img-main" src="img/logo.png" alt="Asentus Logo" />
                                <img className="logo-img logo-img-active" src="img/logo-dark.png" alt="Asentus Logo" />
                        </a>
                    </div>
                </div>

                <div className="collapse navbar-collapse nav-collapse">
                    <div className="menu-container">
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item"><NavLink exact to="/" className="nav-item-child nav-item-hover">Home</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/pricing" className="nav-item-child nav-item-hover">Pricing</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/about" className="nav-item-child nav-item-hover">About</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/products" className="nav-item-child nav-item-hover">Products</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/faq" className="nav-item-child nav-item-hover">FAQ</NavLink></li>
                            <li className="nav-item"><NavLink exact to="/contact" className="nav-item-child nav-item-hover">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>)
}
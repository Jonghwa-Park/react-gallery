import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>
                <div className="pp-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <Link to='/index' className="navbar-brand"><img src="/images/favicon.png" alt="Logo"/></Link>
                            <Link to='/index' className="navbar-brand">Photo Perfect</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation"><span
                                className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link to='/index' className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/about' className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/blog' className="nav-link">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contact' className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
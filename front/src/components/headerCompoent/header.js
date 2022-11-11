import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    const [active, setActive] = useState('Home')

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
                                    <li className={active === 'Home'? 'nav-item active' : 'nav-item'}
                                        onClick={()=>setActive('Home')}>
                                        <Link to='/index' className="nav-link">Home</Link>
                                    </li>
                                    <li className={active === 'About'? 'nav-item active' : 'nav-item'}
                                        onClick={()=>setActive('About')}>
                                        <Link to='/about' className="nav-link">About</Link>
                                    </li>
                                    <li className={active === 'Blog'? 'nav-item active' : 'nav-item'}
                                        onClick={()=>setActive('Blog')}>
                                        <Link to='/blog' className="nav-link">Blog</Link>
                                    </li>
                                    <li className={active === 'Contact'? 'nav-item active' : 'nav-item'}
                                        onClick={()=>setActive('Contact')}>
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
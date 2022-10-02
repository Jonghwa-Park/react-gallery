import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="pp-footer">
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="col-md-12"><a className="pp-facebook btn btn-link" href="#"><i
                            className="fab fa-facebook-f fa-2x " aria-hidden="true"></i></a><a
                            className="pp-twitter btn btn-link " href="#"><i className="fab fa-twitter fa-2x "
                                                                             aria-hidden="true"></i></a><a
                            className="pp-youtube btn btn-link" href="#"><i className="fab fa-youtube fa-2x"
                                                                            aria-hidden="true"></i></a><a
                            className="pp-instagram btn btn-link" href="#"><i className="fab fa-instagram fa-2x "
                                                                              aria-hidden="true"></i></a></div>
                        <div className="col-md-12">
                            <p className="mt-3">Copyright &copy; Photo Perfect. All rights reserved.<br/>Design - <a
                                className="credit" href="https://templateflip.com" target="_blank">TemplateFlip</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
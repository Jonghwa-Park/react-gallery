import React from 'react';

const About = () => {
    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="pp-about container px-0 pp-section">
                        <div className="row mb-2">
                            <div className="col-md-9">
                                <h1 className="h4">Light is beautiful and if you expose for it, it will look
                                    awesome</h1>
                                <p className="text-muted">Photography is the science, art, application and practice of
                                    creating durable images by recording light or other electromagnetic radiation,
                                    either electronically by means of an image sensor, or chemically by means of a
                                    light-sensitive material such as photographic film.</p>
                            </div>
                        </div>
                        <img className="img-fluid pp-about-img" src="images/about-img-1.jpg" alt="About Image"/>
                        <div className="row py-5">
                            <div className="col-md-9 col-sm-12">
                                <div className="h3">Our clients and Partners</div>
                            </div>
                        </div>
                        <div className="row pp-client-brand">
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/about-img-2.png"
                                                                     alt="Brand Logo"/></div>
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/about-img-3.png"
                                                                     alt="Brand Logo"/></div>
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/about-img-4.png"
                                                                     alt="Brand Logo"/></div>
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/about-img-5.png"
                                                                     alt="Brand Logo"/></div>
                        </div>
                        <div className="h3 py-5 mt-5">Our Team</div>
                        <div className="row pp-team">
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/face-1.jpg"
                                                                     alt="Face"/>
                                <div className="h5">Ashley Ford</div>
                                <p>Ceo/Founder</p>
                            </div>
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/face-2.jpg"
                                                                     alt="Face"/>
                                <div className="h5">Royal Anwar</div>
                                <p>Photographer</p>
                            </div>
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/face-3.jpg"
                                                                     alt="Face"/>
                                <div className="h5">Jina Sara</div>
                                <p>Web Developer</p>
                            </div>
                            <div className="col-md-3 col-sm-12"><img className="img-fluid" src="images/face-4.jpg"
                                                                     alt="Face"/>
                                <div className="h5">Adelle Charles</div>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
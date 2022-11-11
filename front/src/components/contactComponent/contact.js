import React, {useState} from 'react';
import axios from "axios";
const Contact = () => {

    const initFields = {
        "first-name" : '',
        "last-name" : '',
        "Subject" : '',
        "_replyto" : '',
        "message" : ''
    }

    const [fields, setFields] = useState(initFields)

    const handleChange = (event) =>{
        const {name, value} = event.target
        const newObj = {}
        newObj[name] = value
        setFields({...fields, ...newObj})

    }



    const handleSubmit = async(event)  => {
        event.preventDefault()
        await axios.post(`http://localhost:8000/contact`, fields).then(function (response) {
            alert('Succeed, You requested information will be cleard')
            setFields(initFields)
        }).catch(function (err) {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="row pp-section">
                        <div className="col-md-9">
                            <h1 className="h4">Contact Us</h1>
                            <p>Message us with any questions or inquiries. We would be happy to answer your
                                question. </p>
                        </div>
                    </div>
                    <div className="container pp-contact px-0 mt-5">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <div className="h4">Call or email</div>
                                <p>Support, Sales, and Photo Management services are currently available.</p>
                                <p className="pt-5"><b>Support</b></p>
                                <p>+800 3005 4523</p>
                                <p>Contact Support</p>
                                <p>Our technical support is available by phone or email from 11am to 7pm Monday through
                                    Friday.</p>
                                <p className="pt-5"><b>Sales</b></p>
                                <p>+800 3005 4523</p>
                                <p>Contact Support</p>
                                <p>Our technical support is available by phone or email from 11am to 7pm Monday through
                                    Friday.</p>
                                <p className="pt-5"><b>General Inquiries</b></p>
                                <p>info@example.com</p>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <div className="pp-contact-message">
                                    <div className="h4 mb-3">Drop a Message</div>
                                    <form onSubmit={handleSubmit} method="POST">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 mb-3">
                                                <input className="mr-3 form-control" type="text" name="first-name"
                                                       placeholder="*First Name"
                                                        value={fields['first-name']}
                                                        onChange={handleChange}/>
                                            </div>
                                            <div className="col-md-6 col-sm-12 mb-3">
                                                <input className="form-control" type="text" name="last-name"
                                                       placeholder="*Last Name"
                                                       value={fields['last-name']}
                                                       onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input className="form-control" type="text" name="Subject"
                                                       placeholder="*Subject"
                                                       value={fields['Subject']}
                                                       onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <input className="form-control" type="email" name="_replyto"
                                                       placeholder="*E-mail"
                                                       value={fields['_replyto']}
                                                       onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <textarea className="form-control" name="message"
                                                          placeholder="*Your Message"
                                                          value={fields['message']}
                                                          onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn btn-primary" type="submit">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
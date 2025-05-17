'use client';

export default function Contact(){
    return (
        <div className="contact-area overflow-hidden bg-gray default-padding">
        <div className="sahpe-right-bottom">
            <img src="/assets/img/shape/16.png" alt="Image Not Found" />
        </div>
        <div className="container">
            <div className="row align-center">
                
                <div className="col-tact-stye-one col-xl-6 col-lg-7">
                    <div className="contact-form-style-one mb-md-50">
                        <img src="/assets/img/illustration/10.png" alt="Image Not Found" />
                        <h5 className="sub-title">Have Questions?</h5>
                        <h2 className="heading">Send us a massage</h2>
                        <form action="/assets/mail/contact.php" method="POST" className="contact-form contact-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                        <span className="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group comments">
                                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <button type="submit" name="submit" id="submit">
                                        <i className="fa fa-paper-plane"></i> Get in Touch
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-12 alert-notification">
                                <div id="message" className="alert-msg"></div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-tact-stye-one col-xl-5 offset-xl-1 col-lg-5">
                    <div className="contact-style-one-info text-light">
                        <h2>
                            Contact 
                            <span>
                                Information
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0" style={{animationPlayState: 'running'}}></path></svg>
                            </span>
                        </h2>
                        <p>
                            Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                        </p>
                        <ul>
                            <li>
                                <div className="content">
                                    <h5 className="title">Hotline</h5>
                                    <a href="">+4733378901</a>
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    <h5 className="title">Our Location</h5>
                                    <p>
                                        55 Main Street, The Grand Avenue 2nd Block, <br /> New York City
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    <h5 className="title">Official Email</h5>
                                    <a href="mailto:info@agrul.com.com">info@agrul.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
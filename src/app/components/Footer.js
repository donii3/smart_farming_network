'use client';


export default function Footer(){
    return (
        <footer className="bg-dark text-light" style={{backgroundImage: 'url(assets/img/shape/8.png)'}}>
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    
                   
                    <div className="col-lg-4 col-md-6 item">
                        <div className="footer-item about">
                            {/*<img className="logo" src="assets/img/logo-light.png" alt="Logo" /> */}
                            <h2>Smart Farming Network (SFN)</h2>
                            <p>
                            Seamlessly connect with key stakeholders—buyers, suppliers, and investors—to expand your market reach and secure growth opportunities.
                            </p>
                            <form action="#">
                                <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                <button type="submit"> Go</button>  
                            </form>
                        </div>
                    </div>
                    

                    <div className="col-lg-2 col-md-6 item">
                        <div className="footer-item link">
                            <h4 className="widget-title">Explore</h4>
                            <ul>
                                <li>
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                    <a href="team.html">Meet Our Team</a>
                                </li>
                                <li>
                                    <a href="blog-single-with-sidebar.html">News & Media</a>
                                </li>
                                <li>
                                    <a href="services.html">Services</a>
                                </li>
                                <li>
                                    <a href="contact-us.html">Contact Us</a>
                                </li>
                                <li>
                                    <a href="team-details.html">Volunteers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="col-lg-3 col-md-6 item">
                        <div className="footer-item recent-post">
                            <h4 className="widget-title">Recent Posts</h4>
                            <ul>
                                <li>
                                    <div className="thumb">
                                        <a href="blog-single-with-sidebar.html">
                                            <img src="assets/img/1.jpeg" alt="Thumb" />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <div className="meta-title">
                                            <span className="post-date">12 Sep, 2023</span>
                                        </div>
                                        <h5><a href="blog-single-with-sidebar.html">Meant widow equal an share least part. </a></h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb">
                                        <a href="blog-single-with-sidebar.html">
                                            <img src="assets/img/4.jpeg" alt="Thumb" />
                                        </a>
                                    </div>
                                    <div className="info">
                                        <div className="meta-title">
                                            <span className="post-date">18 Jul, 2023</span>
                                        </div>
                                        <h5><a href="blog-single-with-sidebar.html">SmartFarms with tailore IoT machine drones </a></h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="col-lg-3 col-md-6 item">
                        <div className="footer-item contact">
                            <h4 className="widget-title">Contact Info</h4>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <div className="content">
                                        <strong>Address:</strong>
                                        5919 Trussville Crossings Pkwy, Birmingham
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <strong>Email:</strong>
                                        <a href="mailto:info@validtheme.com">info@validtheme.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <strong>Phone:</strong>
                                        <a href="tel:2151234567">+123 34598768</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="footer-bottom text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <p>&copy; Copyright 2023. All Rights Reserved by <a href="#">validthemes</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape-right-bottom">
            <img src="assets/img/shape/7.png" alt="Image Not Found" />
        </div>
    </footer>
    )
}
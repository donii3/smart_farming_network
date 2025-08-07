'use client';
import Image from "next/image";
import Link from "next/link";



export default function Footer(){
    return (
        <footer className="bg-dark text-light" style={{backgroundImage: 'url(/assets/img/shape/8.png)'}}>
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    
                   
                    <div className="col-lg-4 col-md-6 item">
                        <div className="footer-item about">
                            {/*<Image  fill className="logo" src="/assets/img/logo-light.png" alt="Logo" /> */}
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
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link href="team.html">Meet Our Team</Link>
                                </li>
                                <li>
                                    <Link href="blog-single-with-sidebar.html">News & Media</Link>
                                </li>
                                <li>
                                    <Link href="services.html">Services</Link>
                                </li>
                                <li>
                                    <Link href="contact-us.html">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="team-details.html">Volunteers</Link>
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
                                        <Link href="blog-single-with-sidebar.html">
                                            <Image  width={50} height={50} src="/assets/img/1.jpeg" alt="Thumb" />
                                        </Link>
                                    </div>
                                    <div className="info">
                                        <div className="meta-title">
                                            <span className="post-date">12 Sep, 2023</span>
                                        </div>
                                        <h5><Link href="blog-single-with-sidebar.html">Meant widow equal an share least part. </Link></h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb">
                                        <Link href="blog-single-with-sidebar.html">
                                            <Image  width={50} height={50} src="/assets/img/4.jpeg" alt="Thumb" />
                                        </Link>
                                    </div>
                                    <div className="info">
                                        <div className="meta-title">
                                            <span className="post-date">18 Jul, 2023</span>
                                        </div>
                                        <h5><Link href="blog-single-with-sidebar.html">SmartFarms with tailore IoT machine drones </Link></h5>
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
                                        <Link href="mailto:info@validtheme.com">info@validtheme.com</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <strong>Phone:</strong>
                                        <Link href="tel:2151234567">+123 34598768</Link>
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
                        <p>&copy; Copyright 2023. All Rights Reserved by <Link href="#">validthemes</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape-right-bottom">
            <Image  width={50} height={50} src="/assets/img/shape/7.png" alt="Image Not Found" />
        </div>
    </footer>
    )
}
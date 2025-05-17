'use client';

export default function Header(){
    return(

         <div>
            {/** START HEADER TOP */}
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-8">
                            <ul className="item-flex">
                                <li>
                                    <i className="fas fa-clock"></i> Opening Hours : Sunday- Friday, 08:00 am - 05:00pm
                                </li>
                                <li>
                                    <a href="tel:+4733378901"><i className="fas fa-phone-alt"></i> +4733378901</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/** HEADER */}
            <header>
                <nav className="navbar mobile-sidenav inc-shape navbar-sticky navbar-default validnavs dark">

                    <div className="container d-flex justify-content-between align-items-center">
                        
                        
                        <div className="navbar-brand-left">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="index.html">
                                    <img src="/assets/img/logo-mix.png" className="logo" alt="Logo" />
                                </a>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-menu">

                            <img src="/assets/img/logo.png" alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-times"></i>
                            </button>
                            
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="index.html">Home Agriculture</a></li>
                                        <li><a href="index-2.html">Home Farming</a></li>
                                        <li><a href="index-3.html">Agriculture Shop</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="farmers.html">Team</a></li>
                                        <li><a href="farmer-details.html">Team Details</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="404.html">Error Page</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="project.html" className="dropdown-toggle" data-toggle="dropdown" >Projects</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="project.html">Project</a></li>
                                        <li><a href="project-details.html">Project Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Services</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="services.html">Services Version One</a></li>
                                        <li><a href="services-2.html">Services Version Two</a></li>
                                        <li><a href="services-details.html">Services Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                        <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                        <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                        <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        
                        {/*<!-- /.navbar-collapse -->*/}

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                                            <i className="far fa-shopping-cart"></i>
                                            <span className="badge">3</span>
                                        </a>
                                        <ul className="dropdown-menu cart-list">
                                            <li>
                                                <div className="thumb">
                                                    <a href="#" className="photo">
                                                        <img src="/assets/img/products/1.png" alt="Thumb" />
                                                    </a>
                                                    <a href="#" className="remove-product">
                                                        <i className="fas fa-times"></i>
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <h6><a href="#">Delica omtantur </a></h6>
                                                    <p>2x - <span className="price">$99.99</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="#" className="photo">
                                                        <img src="/assets/img/products/2.png" alt="Thumb" />
                                                    </a>
                                                    <a href="#" className="remove-product">
                                                        <i className="fas fa-times"></i>
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                                    <p>1x - <span className="price">$33.33</span></p>
                                                </div>
                                            </li>
                                            <li className="total">
                                                <span className="pull-right"><strong>Total</strong>: $0.00</span>
                                                <a href="#" className="btn btn-default btn-cart">Cart</a>
                                                <a href="#" className="btn btn-default btn-cart">Checkout</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="button"><a href="#">Register</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>   
                    <div className="overlay-screen"></div>

                </nav>
            </header> 
         </div>
    )
}
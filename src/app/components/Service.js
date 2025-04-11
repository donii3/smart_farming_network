'use client';

export default function Service(){
    return (
        <div className="services-style-one-area bg-gray default-padding bottom-less">
            <div className="shape-right-top" style={{backgroundImage: 'url(/assets/img/shape/9.png)'}}></div>
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="site-heading text-center">
                            <h5 className="sub-title">What we do</h5>
                            <h2 className="title">Currently we are <br/> selling organic food</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 service-one-single">
                        <div className="service-style-one-item">
                            <div className="thumb">
                                <img src="/assets/img/illustration/2.png" alt="Image Not Found" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h4><a href="#">Agriculture <span>Products</span></a></h4>
                                </div>
                                <p>
                                    Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
                                </p>
                            </div>
                            <a href="#" className="btn-angle"><i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 service-one-single">
                        <div className="service-style-one-item">
                            <div className="thumb">
                                <img src="/assets/img/illustration/3.png" alt="Image Not Found" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h4><a href="#">Fresh <span>Vegetables</span></a></h4>
                                </div>
                                <p>
                                    Perming rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
                                </p>
                                <a href="#" className="btn-angle"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 service-one-single">
                        <div className="service-style-one-item">
                            <div className="thumb">
                                <img src="/assets/img/illustration/4.png" alt="Image Not Found" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h4><a href="#">Dairy <span>Products</span></a></h4>
                                </div>
                                <p>
                                    Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
                                </p>
                                <a href="#" className="btn-angle"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
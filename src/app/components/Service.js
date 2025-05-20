'use client';
import Image from "next/image";


export default function Service(){
    return (
        <div className="services-style-one-area bg-gray default-padding bottom-less">
            <div className="shape-right-top" style={{backgroundImage: 'url(/assets/img/shape/9.png)'}}></div>
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="site-heading text-center">
                            <h5 className="sub-title">What we do</h5>
                            <h2 className="title">Smart Farming Network (SFN),  <br/> a pioneering platform revolutionizing agriculture through technology.</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 service-one-single">
                        <div className="service-style-one-item">
                            <div className="thumb">
                                <Image  fill src="/assets/img/illustration/2.png" alt="Image Not Found" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h4><a href="#">Smart <span>Farming Solutions</span></a></h4>
                                </div>
                                <p>
                                Implement our cutting-edge techniques to enhance crop yields and streamline farm management with real-time data insights.
                                </p>
                            </div>
                            <a href="#" className="btn-angle"><i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 service-one-single">
                        <div className="service-style-one-item">
                            <div className="thumb">
                                <Image  fill src="/assets/img/illustration/3.png" alt="Image Not Found" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h4><a href="#">Market &  <span>Investment Hub</span></a></h4>
                                </div>
                                <p>
                                    Seamlessly connect with key stakeholders—buyers, suppliers, and investors—to expand your market reach and secure growth opportunities.
                                </p>
                                <a href="#" className="btn-angle"><i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 service-one-single">
                        <div className="service-style-one-item">
                            <div className="thumb">
                                <Image  fill src="/assets/img/illustration/4.png" alt="Image Not Found" />
                            </div>
                            <div className="info">
                                <div className="top">
                                    <h4><a href="#">Land  <span>Brokerage Services</span></a></h4>
                                </div>
                                <p>
                                    Navigate farmland acquisitions with ease, backed by our expert guidance to simplify the purchasing process.
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
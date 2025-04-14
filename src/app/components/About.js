'use client';

export default function About(){
    return (
        <div className="about-style-one-area default-padding overflow-hidden">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about-style-one-thumb">
                            <img src="/assets/img/800x1000.png" alt="Image Not Found" />
                            <div className="animation-shape">
                                <img src="/assets/img/illustration/1.png" alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                        <div className="about-style-one-info">
                            
                            <h2 className="title">Agriculture & Organic <br /> Product Farm</h2>
                            <p>
                                There are many variations of passages of ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even. Comparison new ham melancholy.
                            </p>
                            <div className="fun-fact-style-flex mt-35">
                                <div className="counter">
                                    <div className="timer" data-to="25" data-speed="2000">25</div>
                                    <div className="operator">M</div>
                                </div>
                                <span className="medium">Growth Tonns <br /> of Harvest</span>
                            </div>
                            <ul className="top-feature">
                                <li>
                                    <div className="icon">
                                        <img src="/assets/img/icon/3.png" alt="Image Not Found" />
                                    </div>
                                    <div className="info">
                                        <h4>100% Guaranteed Organic Product</h4>
                                        <p>
                                            Always parties but trying she shewing of moment.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img src="/assets/img/icon/2.png" alt="Image Not Found" />
                                    </div>
                                    <div className="info">
                                        <h4>Top-Quality Healthy Foods Production</h4>
                                        <p>
                                            Majority have suffered alteration in some form by injected humor.
                                        </p>
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
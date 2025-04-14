'use client';

export default function Carousel(){
    return(
        <div className="banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
            <div className="banner-fade">
                <div className="swiper-wrapper">

                    <div className="swiper-slide banner-style-one">
                        <div className="banner-thumb bg-cover shadow dark" style={{background: 'url(/assets/img/2440x1578.png)'}}></div>
                        <div className="shape">
                            <img src="/assets/img/shape/2.png" alt="Image Not Found" />
                        </div>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-9">
                                    <div className="content">
                                        <div className="badge">
                                            <div className="curve-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                                    <text><textPath href="#textPath">100% Organic Product</textPath></text>
                                                </svg>
                                                <a href="https://www.youtube.com/watch?v=ipUuoMCEbDQ" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h2><strong>Agriculture</strong> Farming Products</h2>
                                            <p>
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable.
                                            </p>
                                            <div className="button">
                                                <a className="btn btn-theme btn-md radius animation" href="about-us.html">Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide banner-style-one">
                        <div className="banner-thumb bg-cover shadow dark" style={{background: 'url(/assets/img/2440x1578.png)'}}></div>
                        <div className="shape">
                            <img src="/assets/img/shape/2.png" alt="Image Not Found" />
                        </div>
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-9">
                                    <div className="content">
                                        <div className="badge">
                                            <div className="curve-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                                    <path id="textPath2" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                                                    <text><textPath href="#textPath">100% Organic Product</textPath></text>
                                                </svg>
                                                <a href="https://www.youtube.com/watch?v=ipUuoMCEbDQ" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h2><strong>Homemade</strong> Organic Product</h2>
                                            <p>
                                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable.
                                            </p>
                                            <div className="button">
                                                <a className="btn btn-theme btn-md radius animation" href="about-us.html">Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

            </div>        
        </div>
    )
}
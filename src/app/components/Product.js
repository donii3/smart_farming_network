'use client';
import Image from "next/image";


export default function Product(){
    return(
        <div className="product-cat-area default-padding">
            <div className="shape-right-bottom-mini">
                <Image  fill src="/assets/img/shape/11.png" alt="Image Not Found" />
            </div>
            <div className="container">
                <div className="product-cat-items">
                    <div className="row align-center">
                        <div className="col-lg-5 product-cat-info">
                            <h2 className="mask-text" style={{backgroundImage: 'url(/assets/img/shape/28.jpg)'}}>Healthy Life With Fresh Products</h2>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="product-cat-lists text-light">
                                <div className="product-list-box">
                                    <div className="product-list-item">
                                        <a href="services-details.html">
                                            <Image  fill src="/assets/img/icon/9.png" alt="Icon" />
                                            <h5>Blueberry</h5>
                                        </a>
                                    </div>
                                    
                                    <div className="product-list-item">
                                        <a href="services-details.html">
                                            <Image  fill src="/assets/img/icon/10.png" alt="Icon" />
                                            <h5>Strawberry</h5>
                                        </a>
                                    </div>
                                    
                                    <div className="product-list-item">
                                        <a href="services-details.html">
                                            <Image  fill src="/assets/img/icon/11.png" alt="Icon" />
                                            <h5>Cabbage</h5>
                                        </a>
                                    </div>
                                    
                                    <div className="product-list-item">
                                        <a href="services-details.html">
                                            <Image  fill src="/assets/img/icon/12.png" alt="Icon" />
                                            <h5>Maize</h5>
                                        </a>
                                    </div>
                                   
                                    <div className="product-list-item">
                                        <a href="services-details.html">
                                            <Image  fill src="/assets/img/icon/13.png" alt="Icon" />
                                            <h5>Orange</h5>
                                        </a>
                                    </div>
                                    
                                    <div className="product-list-item">
                                        <a href="services-details.html">
                                            <Image  fill src="/assets/img/icon/14.png" alt="Icon" />
                                            <h5>Apples</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
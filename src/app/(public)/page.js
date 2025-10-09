'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined" && window.Swiper) {
      new window.Swiper(".banner-fade", {
        direction: "horizontal",
        loop: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: '.banner-pagination',
          clickable: true,
        },
      });
    }
  }, []);

  return (

    <div>

      {/* CAROUSEL SECTION */}
      <div className="banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
        <div className="banner-fade">
          <div className="swiper-wrapper">

            <div className="swiper-slide banner-style-one">
              <div className="banner-thumb bg-cover shadow dark" style={{ background: 'url(/assets/img/10.avif)' }}></div>
              <div className="shape">
                <Image fill src="/assets/img/shape/2.png" alt="Image Not Found" />
              </div>
              <div className="container">
                <div className="row align-center justify-content-between">
                  <div className="col-xl-11">
                    <div className="content">
                      
                      <div className="info">
                        <h2>Elevate Your Agricultural Operations with SFN</h2>
                        <p>
                          Experience unparalleled advancements in agriculture with Smart Farming Network (SFN).
                        </p>
                        <div className="button">
                          <a className="btn btn-theme btn-md radius animation" href="about-us.html">Discover More</a>
                        </div>
                      </div>

                      <div className="badge mx-5">
                        <div className="curve-text">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                            <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                            <text><textPath href="#textPath">100% Smart Solutions</textPath></text>
                          </svg>
                          <a href="https://www.youtube.com/watch?v=ipUuoMCEbDQ" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide banner-style-one">
              <div className="banner-thumb bg-cover shadow dark" style={{ background: 'url(/assets/img/3.jpeg)' }}></div>
              <div className="shape">
                <Image fill src="/assets/img/shape/2.png" alt="Image Not Found" />
              </div>
              <div className="container">
                <div className="row align-center justify-content-between">
                  <div className="col-xl-11">
                    <div className="content">
                      <div className="badge">
                        <div className="curve-text">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                            <path id="textPath2" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                            <text><textPath href="#textPath">100% Agricultural & Tech</textPath></text>
                          </svg>
                          <a href="https://www.youtube.com/watch?v=ipUuoMCEbDQ" className="popup-youtube"><i className="fas fa-arrow-right"></i></a>
                        </div>
                      </div>
                      <div className="info">
                        <h2>Transform Your Agricultural Experience with Smart Solutions</h2>
                        <p>
                          Implement our cutting-edge techniques to enhance crop yields and streamline farm management with real-time data insights.
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
      {/* ABOUT SECTION */}
      <div className="about-style-one-area default-padding overflow-hidden">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-5">
              <div className="about-style-one-thumb">
                <Image width={800} height={500} src="/assets/img/55.jpeg" alt="Image Not Found" />
                <div className="animation-shape">
                  <Image fill src="/assets/img/illustration/1.png" alt="Image Not Found" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
              <div className="about-style-one-info">

                <h2 className="title">Innovative Solutions Empowered Farming Transformative Impact</h2>
                <p>
                  Experience unparalleled advancements in agriculture with Smart Farming Network (SFN). Our tailored services, from precision farming solutions to market connectivity, empower you to optimize operations and enhance productivity. Join us in pioneering the future of agriculture.
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
                      <Image width={80} height={80} src="/assets/img/icon/3.png" alt="Image Not Found" />
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
                      <Image width={80} height={80} src="/assets/img/icon/2.png" alt="Image Not Found" />
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


      {/* SERVICE SECTION */}
      <div className="services-style-one-area bg-gray default-padding bottom-less">
        <div className="shape-right-top" style={{ backgroundImage: 'url(/assets/img/shape/9.png)' }}></div>
        <div className="container">

          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="site-heading text-center">
                <h5 className="sub-title">What we do</h5>
                <h2 className="title">Smart Farming Network (SFN),  <br /> a pioneering platform revolutionizing agriculture through technology.</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 service-one-single">
              <div className="service-style-one-item">
                <div className="thumb">
                  <Image width={100} height={80} src="/assets/img/illustration/2.png" alt="Image Not Found" />
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
                  <Image width={100} height={80} src="/assets/img/illustration/3.png" alt="Image Not Found" />
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
                  <Image width={100} height={80} src="/assets/img/illustration/4.png" alt="Image Not Found" />
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


      {/* BENEFIT SECTION */}
      <div className="benifits-area default-padding-top video-bg-live bg-cover mt--50 mt-md-0 mt-xs-0" style={{ backgroundImage: 'url(/assets/img/6.jpeg)' }}>
        <div className="player" data-property="{videoURL:'w9eRIGTHKJM',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:13, opacity:1, quality:'default'}"></div>
        <div className="shape-top-center" style={{ backgroundImage: 'url(/assets/img/shape/10.png)' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="benifit-items text-light">
                <div className="shape">
                  <Image fill src="/assets/img/illustration/8.png" alt="Image Not Found" />
                </div>
                <h2 className="title">Elevate Your Agricultural Operations with SFN</h2>
                <p>
                  SFN&apos;s innovative agri-tech platform transformed my farming practices with technology-driven solutions that truly made a difference.
                </p>
                <ul className="list-standard">
                  <li>Smart Farming Solutions</li>
                  <li>Market & Investment Hub</li>
                  <li>Land Brokerage Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* PRODUCT SECTION */}
      <div className="product-cat-area default-padding">
        <div className="shape-right-bottom-mini">
          <Image fill src="/assets/img/shape/11.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="product-cat-items">
            <div className="row align-center">
              <div className="col-lg-5 product-cat-info">
                <h2 className="mask-text" style={{ backgroundImage: 'url(/assets/img/shape/28.jpg)' }}>Healthy Life With Fresh Products</h2>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="product-cat-lists text-light">
                  <div className="product-list-box">
                    <div className="product-list-item">
                      <a href="services-details.html">
                        <Image width={50} height={50} src="/assets/img/icon/9.png" alt="Icon" />
                        <h5>Blueberry</h5>
                      </a>
                    </div>

                    <div className="product-list-item">
                      <a href="services-details.html">
                        <Image width={50} height={50} src="/assets/img/icon/10.png" alt="Icon" />
                        <h5>Strawberry</h5>
                      </a>
                    </div>

                    <div className="product-list-item">
                      <a href="services-details.html">
                        <Image width={50} height={50} src="/assets/img/icon/11.png" alt="Icon" />
                        <h5>Cabbage</h5>
                      </a>
                    </div>

                    <div className="product-list-item">
                      <a href="services-details.html">
                        <Image width={50} height={50} src="/assets/img/icon/12.png" alt="Icon" />
                        <h5>Maize</h5>
                      </a>
                    </div>

                    <div className="product-list-item">
                      <a href="services-details.html">
                        <Image width={50} height={50} src="/assets/img/icon/13.png" alt="Icon" />
                        <h5>Orange</h5>
                      </a>
                    </div>

                    <div className="product-list-item">
                      <a href="services-details.html">
                        <Image width={50} height={50} src="/assets/img/icon/14.png" alt="Icon" />
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

      {/* CONTACT SECTION */}
      <div className="contact-area overflow-hidden bg-gray default-padding">
        <div className="sahpe-right-bottom">
          <Image fill src="/assets/img/shape/16.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">

            <div className="col-tact-stye-one col-xl-6 col-lg-7">
              <div className="contact-form-style-one mb-md-50">
                <Image width={300} height={300} src="/assets/img/illustration/10.png" alt="Image Not Found" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M14.4,111.6c0,0,202.9-33.7,471.2,0c0,0-194-8.9-397.3,24.7c0,0,141.9-5.9,309.2,0" style={{ animationPlayState: 'running' }}></path></svg>
                  </span>
                </h2>
                <p>
                  Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                </p>
                <ul>
                  <li>
                    <div className="content">
                      <h5 className="title">Hotline</h5>
                      <a href="">+234(0) 912 188 1781</a>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <h5 className="title">Our Location</h5>
                      <p>
                        HeadQuarters Address: 82A Js Tarkaa Railway Bye Pass, Makurdi, <br /> Benue State.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="info">
                      <h5 className="title">Official Email</h5>
                      <a href="mailto: smartfarmningetwork@gmail.com"> smartfarmningetwork@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

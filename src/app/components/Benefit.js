'use client';
import Image from "next/image";

export default function Benefit(){
    return (
        <div className="benifits-area default-padding-top video-bg-live bg-cover mt--50 mt-md-0 mt-xs-0" style={{backgroundImage: 'url(/assets/img/6.jpeg)'}}>
            <div className="player" data-property="{videoURL:'w9eRIGTHKJM',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:13, opacity:1, quality:'default'}"></div>
            <div className="shape-top-center" style={{backgroundImage: 'url(/assets/img/shape/10.png)'}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="benifit-items text-light">
                            <div className="shape">
                                <Image  fill src="/assets/img/illustration/8.png" alt="Image Not Found" />
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
    )
}
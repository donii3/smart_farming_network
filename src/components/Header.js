'use client';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logout } from './Logout';


export default function Header() {
    const { data: session } = useSession();
    return (

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
                                    <Link href="tel:+4733378901"><i className="fas fa-phone-alt"></i> +4733378901</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="social">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </Link>
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
                                <Link className="navbar-brand" href="/">
                                    <Image width={50} height={40} src="/assets/img/logo-mix.png" className="logo" alt="Logo" />
                                </Link>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-menu">

                            <Image  width={50} height={40} src="/assets/img/logo.png" alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-times"></i>
                            </button>

                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <Link href="/">Home Agriculture</Link>
                                </li>
                                <li className="dropdown">
                                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" >Pages</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/content-details">Content Details</Link></li>
                                        <li><Link href="contact.html">Contact Us</Link></li>
                                    </ul>
                                </li>
                                
                                <li className="dropdown">
                                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" >Services</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="#">Services Version One</Link></li>
                                        <li><Link href="#">Services Version Two</Link></li>
                                        <li><Link href="#">Services Details</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/*<!-- /.navbar-collapse -->*/}

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>

                                    <li className="dropdown">
                                        <Link href="#" className="dropdown-toggle" data-toggle="dropdown" >
                                            <i className="far fa-shopping-cart"></i>
                                            <span className="badge">3</span>
                                        </Link>
                                        <ul className="dropdown-menu cart-list">
                                            <li>
                                                <div className="thumb">
                                                    <Link href="#" className="photo">
                                                        <Image fill src="/assets/img/products/1.png" alt="Thumb" />
                                                    </Link>
                                                    <Link href="#" className="remove-product">
                                                        <i className="fas fa-times"></i>
                                                    </Link>
                                                </div>
                                                <div className="info">
                                                    <h6><Link href="#">Delica omtantur </Link></h6>
                                                    <p>2x - <span className="price">$99.99</span></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <Link href="#" className="photo">
                                                        <Image fill src="/assets/img/products/2.png" alt="Thumb" />
                                                    </Link>
                                                    <Link href="#" className="remove-product">
                                                        <i className="fas fa-times"></i>
                                                    </Link>
                                                </div>
                                                <div className="info">
                                                    <h6><Link href="#">Omnes ocurreret</Link></h6>
                                                    <p>1x - <span className="price">$33.33</span></p>
                                                </div>
                                            </li>
                                            <li className="total">
                                                <span className="pull-right"><strong>Total</strong>: $0.00</span>
                                                <Link href="#" className="btn btn-default btn-cart">Cart</Link>
                                                <Link href="#" className="btn btn-default btn-cart">Checkout</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {session ? (
                                        <li>
                                            <Logout className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" />
                                        </li>
                                    ) : (
                                        <li className="button">
                                            <Link href="/login">Login</Link>
                                        </li>
                                    )}
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
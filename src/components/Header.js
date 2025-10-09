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
            
            {/** HEADER */}
            <header>
                <nav className="navbar mobile-sidenav inc-shape navbar-default validnavs dark py-0">

                    <div className="container d-flex justify-content-between align-items-center py-0">


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
                                    <Link href="/">Home</Link>
                                </li>

                                <li className="dropdown">
                                    <Link href="/about">About</Link>
                                </li>

                                <li className="dropdown">
                                    <Link href="/contact">Contact</Link>
                                </li>
                                
                                <li className="dropdown">
                                    <Link href="#" className="dropdown-toggle" data-bs-toggle="dropdown" >Services</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="#">Smart Farming Solution</Link></li>
                                    </ul>
                                </li>

                                 <li className="dropdown">
                                    <Link href="#" className="dropdown-toggle" data-bs-toggle="dropdown" >Market Place</Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href="#">Join Our Community</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/*<!-- /.navbar-collapse -->*/}

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
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
'use client';

import Link from 'next/link';


export default function SignUpPage() {
    return (
        <div>
            <div className="signup-area bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="signup-form">
                                <div className="heading">
                                    <h2>Create Your Account</h2>
                                    <p>Join our community to get started</p>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="First Name*"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Last Name*"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Email*"
                                                    type="email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Password*"
                                                    type="password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    type="tel"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group terms">
                                                <input type="checkbox" id="terms" required />
                                                <label htmlFor="terms">
                                                    I agree to the <Link href="/terms-conditions">Terms of Service</Link> and <Link href="/privacy-policy">Privacy Policy</Link>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary">
                                                Create Account
                                            </button>
                                        </div>
                                        <div className="col-lg-12">
                                            <p className="login-link">
                                                Already have an account? <Link href="/login">Login here</Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
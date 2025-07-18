'use client';

import Link from 'next/link';

export default function LoginForm() {
    return (
        <div>
            <div className="login-area bg-gray default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="login-form">
                            <div className="heading">
                                <h2>Login to Your Account</h2>
                                <p>Access your dashboard and manage your account</p>
                            </div>
                            <form>
                                <div className="row">
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
                                        <div className="form-group remember">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Remember me</label>
                                            <Link href="#" className="forgot-pass">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-primary">
                                            Login Now
                                        </button>
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="register-link">
                                            Don&apos;t have an account?{' '}
                                            <Link href="/register">Register here</Link>
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
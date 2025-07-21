'use client';

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ConfirmationModal } from "@/components/ConfirmationModal";

export default function RegisterForm() {
    // Form state
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    // Modal state
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [registrationData, setRegistrationData] = useState(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email: email.toLowerCase().trim(),
                    password,
                    phone
                })
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Registration failed');

            // Show success modal instead of immediate redirect
            setRegistrationData(data);
            setShowSuccessModal(true);
            
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const handleSuccessConfirm = () => {
        setShowSuccessModal(false);
        router.push(`/login?registered=true&callbackUrl=${encodeURIComponent(callbackUrl)}`);
    };

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

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    {/* Form fields remain the same */}
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="First Name*"
                                                    type="text"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
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
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
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
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
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
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
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
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
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
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary" 
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Creating Account...
                                                    </>
                                                ) : 'Create Account'}
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

            {/* Success Confirmation Modal */}
            <ConfirmationModal
                isOpen={showSuccessModal}
                title="Registration Successful!"
                message={
                    <>
                        <p>Your account has been created successfully.</p>
                        <p>You&apos;ll now be redirected to login.</p>
                    </>
                }
                confirmText="Continue to Login"
                onConfirm={handleSuccessConfirm}
                onCancel={() => setShowSuccessModal(false)}
                confirmButtonVariant="primary"
                showCancelButton={false} // Optional: Hide cancel button for success modal
            />
        </div>
    );
}
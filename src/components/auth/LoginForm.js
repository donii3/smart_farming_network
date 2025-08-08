'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ConfirmationModal } from '@/components/ConfirmationModal';


export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const errorParam = searchParams.get('error');

  // Modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [processData, setProcessData] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        email: email.toLowerCase().trim(),
        password,
        redirect: false,
        callbackUrl
      });


      if (res?.error) {
        setError('Invalid email or password');
      } else if (res?.ok) {

        setProcessData(res.url);
        setShowSuccessModal(true);

      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessConfirm = () => {
    setShowSuccessModal(false);
    router.push(callbackUrl);
  };

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
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row">
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
                      <div className="form-group remember d-flex align-items-center">
                        <input type="checkbox" id="remember" />
                        <label className='mx-1 mb-0' htmlFor="remember">Remember me</label>
                        <Link href="#" className="forgot-pass">
                          Forgot password?
                        </Link>
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
                            Logging in...
                          </>
                        ) : 'Login Now'}
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

      {/* Success Confirmation Modal */}
      <ConfirmationModal
        isOpen={showSuccessModal}
        title="Logic Successful!"
        message={
          <>
            <p>You&apos;ll now be redirected to home page.</p>
          </>
        }
        confirmText="Continue.."
        onConfirm={handleSuccessConfirm}
        onCancel={() => setShowSuccessModal(false)}
        confirmButtonVariant="primary"
        isLoading={loading}
        showCancelButton={false} // Optional: Hide cancel button for success modal
      />
    </div>
  );
}
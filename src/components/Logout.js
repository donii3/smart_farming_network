// components/Logout.tsx
'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';

export function Logout() {
    const [showDialog, setShowDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await signOut({ callbackUrl: '/login' });
        } catch (error) {
            console.error('Logout failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Logout Button */}
            <button
                onClick={() => setShowDialog(true)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Logout
            </button>

            {/* Confirmation Dialog */}
            {showDialog && (
                <div
                    className="modal fade show"
                    style={{
                        display: 'block',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 9999, // Higher than default Bootstrap z-index
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        style={{
                            maxWidth: '500px',
                            zIndex: 10000 // Even higher than overlay
                        }}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Logout</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowDialog(false)}
                                    disabled={loading}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to sign out?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowDialog(false)}
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleLogout}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Signing out...
                                        </>
                                    ) : 'Sign Out'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
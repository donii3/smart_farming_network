// components/Logout.tsx
'use client';

import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { ConfirmationModal } from './ConfirmationModal';

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
            <ConfirmationModal
                isOpen={showDialog}
                title="Confirm Logout"
                message="Are you sure you want to sign out?..."
                confirmText="Sign Out"
                onConfirm={handleLogout}
                onCancel={() => setShowDialog(false)}
                isLoading={loading}
                confirmButtonVariant="danger"
            />
        </>
    );
}
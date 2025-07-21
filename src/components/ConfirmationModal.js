'use client';

import { ReactNode } from 'react';



export function ConfirmationModal({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  isLoading = false,
  confirmButtonVariant = 'danger',
}) {
  if (!isOpen) return null;

  const variantClasses = {
    danger: 'btn-danger',
    primary: 'btn-primary',
    success: 'btn-success',
    warning: 'btn-warning',
  };

  return (
    <div
      className="modal fade show"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{
          maxWidth: '500px',
          zIndex: 10000,
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
              disabled={isLoading}
            ></button>
          </div>
          <div className="modal-body">
            {typeof message === 'string' ? <p>{message}</p> : message}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className={`btn ${variantClasses[confirmButtonVariant]}`}
              onClick={onConfirm}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span 
                    className="spinner-border spinner-border-sm me-2" 
                    role="status" 
                    aria-hidden="true"
                  ></span>
                  Processing...
                </>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
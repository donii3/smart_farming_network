'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './dashboard.css';

export default function FarmersLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout d-flex">
      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`dashboard-sidebar d-flex flex-column p-3 ${sidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-logo row align-items-center justify-content-center mb-4">
          <span className="me-2 col-12 justify-content-center d-flex align-items-center">
            <Link className="" href="/">
                <Image width={50} height={50} src="/assets/img/logo-mix.png" className="logo" alt="Logo" />
            </Link>
          </span>
          <h5 className="m-0 fw-bold text-white col text-center">SmartFarm</h5>
        </div>

        <ul className="nav mt-3 row">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              <i className="fa fa-home me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa fa-leaf me-2"></i> Farms
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa fa-tasks me-2"></i> Tasks
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-chart-line me-2"></i> Analytics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa fa-star me-2"></i> Reviews
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa fa-cog me-2"></i> Settings
            </a>
          </li>
          
          {/* Spacer to push logout to bottom */}
          <div className="flex-grow-1"></div>
          
          <li className="nav-item">
            <a href="#" className="nav-link btn btn-outline-light text-dark">
              <i className="fa fa-sign-out me-2"></i> Logout
            </a>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <div className="dashboard-main flex-grow-1 d-flex flex-column">
        {/* Top navbar */}
        <nav className="dashboard-navbar d-flex justify-content-between align-items-center px-4 py-3">
          <div className="d-flex align-items-center gap-3">
            <button 
              className="mobile-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <h5 className="fw-semibold mb-0 text-dark">Farmers Dashboard</h5>
          </div>
          
          <div className="d-flex align-items-center gap-3">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search farms, crops..."
              />
              <i className="fa fa-search search-icon"></i>
            </div>
            <div className="notif-circle">
              <i className="fa fa-bell"></i>
            </div>
            <div className="profile-circle">
              <i className="fa fa-user"></i>
            </div>
          </div>
        </nav>

        <main className="dashboard-content p-4 flex-grow-1">
          {children}
        </main>
      </div>
    </div>
  );
}
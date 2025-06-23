// components/Preloader.jsx
'use client';

import { useEffect } from 'react';
import { usePreloader } from '../hooks/usePreloader';

export default function Preloader() {
  usePreloader();

  return (
    <div id="preloader">
      <div id="agrica-preloader" className="agrica-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="loading"></div>
    </div>
  );
}
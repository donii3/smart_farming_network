'use client';

import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler);

export default function ChartClient() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
      datasets: [
        {
          label: 'Moisture ($%)',
          data: [12, 24, 32, 28, 40, 48],
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointRadius: 4,
          backgroundColor: 'rgba(73,167,96,0.08)',
          borderColor: getComputedStyle(document.documentElement).getPropertyValue('--dark') || '#1f4e3d',
          pointBackgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--dark') || '#1f4e3d',
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            callback: function(val) {
              return val + '%';
            }
          },
          beginAtZero: true
        },
        x: {
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: false },
      },
    };

    const chart = new Chart(ctx, {
      type: 'line',
      data,
      options,
    });

    return () => chart.destroy();
  }, []);

  return (
    <div style={{ height: 280 }}>
      <canvas ref={canvasRef} />
    </div>
  );
}

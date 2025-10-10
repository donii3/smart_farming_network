import React from 'react';
import ChartClient from './ChartClient';

export default function FarmersPage() {
  const stats = [
    { title: 'Total Farms', value: 12 },
    { title: 'Active Crops', value: 34 },
    { title: 'Avg Moisture', value: '42%' },
    { title: 'Weather', value: 'Sunny' },
  ];

  const projects = [
    { id: 1, title: 'Organic Vegetable Plot', subtitle: 'Tomatoes, Lettuce', amount: '$1,200' },
    { id: 2, title: 'Smart Irrigation', subtitle: 'Drip + Sensors', amount: '$3,500' },
    { id: 3, title: 'Greenhouse Expansion', subtitle: 'Hydroponics', amount: '$2,000' },
  ];

  return (
    <div className="container py-5">
      <header className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center gap-3">
          
          <div>
            <h1 className="display-6 text-heading mb-0">Farmers Dashboard</h1>
            <small className="text-muted">Smart Farming Network</small>
          </div>
        </div>

        <div className="profile-circle d-flex align-items-center justify-content-center">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
      </header>

      {/* Stats row */}
      <div className="row mb-4 g-3">
        {stats.map((s, idx) => (
          <div key={idx} className="col-6 col-md-3">
            <div className="card stat-card h-100">
              <div className="card-body text-center">
                <div className="stat-title">{s.title}</div>
                <div className="stat-value">{s.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overview + Chart */}
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="section-heading">Soil Moisture Overview</h2>
          <div className="card chart-card p-3">
            <ChartClient />
          </div>
        </div>
      </div>

      {/* Projects / Tasks */}
      <div className="row">
        <div className="col-12">
          <h2 className="section-heading">Projects</h2>
          <div className="project-list">
            {projects.map((p) => (
              <div key={p.id} className="card project-item mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div className="project-icon rounded-circle d-flex align-items-center justify-content-center">
                      {/* choose an icon per project */}
                      <i className="fa fa-seedling"></i>
                    </div>
                    <div>
                      <div className="fw-bold project-title">{p.title}</div>
                      <div className="text-muted small">{p.subtitle}</div>
                    </div>
                  </div>

                  <div className="project-amount fw-bold">{p.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

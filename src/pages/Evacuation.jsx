import React from 'react';


function Evacuation({ evacuationList }) {
  // replace evacuationCenters references inside Evacuation.jsx with evacuationList
  return (
    <div className="container py-4">
      <h2 className="fw-bold text-danger mb-3">
        <i className="bi bi-geo-alt-fill me-2"></i>Designated Evacuation Centers
      </h2>
      <p className="text-muted mb-4">Active and standby emergency shelters across Barangays in Lucena City.</p>

      <div className="row g-4">
        {evacuationList.map((center) => (
          <div key={center.id} className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                <span className="fw-bold">{center.barangay}</span>
                <span className={`badge ${center.status === 'Open' ? 'bg-success' : 'bg-warning text-dark'}`}>
                  {center.status}
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{center.name}</h5>
                <p className="card-text mb-2"><strong>Capacity:</strong> {center.capacity}</p>
                <p className="card-text mb-2"><strong>Available Facilities:</strong> {center.facilities}</p>
                <p className="card-text text-muted small"><strong>Coordinates:</strong> {center.coordinates}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Evacuation;
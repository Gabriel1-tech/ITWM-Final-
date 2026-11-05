import React from 'react';

function Home({ setActivePage }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="bg-danger text-white py-5 mb-4 shadow-sm">
        <div className="container text-center py-4">
          <h1 className="display-4 fw-bold mb-3">Lucena City Disaster Preparedness & Relief Hub</h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Empowering residents of Lucena City with instant access to emergency hotlines, active evacuation center statuses, and essential safety guidelines.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light text-danger fw-bold btn-lg" onClick={() => setActivePage('hotlines')}>
              <i className="bi bi-telephone-fill me-2"></i>Emergency Hotlines
            </button>
            <button className="btn btn-outline-light fw-bold btn-lg" onClick={() => setActivePage('evacuation')}>
              <i className="bi bi-geo-alt-fill me-2"></i>Evacuation Centers
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-3">
              <div className="card-body">
                <i className="bi bi-headset fs-1 text-danger mb-3"></i>
                <h5 className="card-title fw-bold">24/7 Hotlines</h5>
                <p className="card-text text-muted">Direct phone numbers for CDRRMO, Police, Fire Department, and medical services in Lucena.</p>
                <button className="btn btn-outline-danger btn-sm" onClick={() => setActivePage('hotlines')}>View Directory</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-3">
              <div className="card-body">
                <i className="bi bi-building fs-1 text-danger mb-3"></i>
                <h5 className="card-title fw-bold">Shelter Locations</h5>
                <p className="card-text text-muted">Real-time status updates and capacity of designated barangay evacuation shelters.</p>
                <button className="btn btn-outline-danger btn-sm" onClick={() => setActivePage('evacuation')}>Find Shelters</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-3">
              <div className="card-body">
                <i className="bi bi-heart-handshake fs-1 text-danger mb-3"></i>
                <h5 className="card-title fw-bold">Volunteer & Relief</h5>
                <p className="card-text text-muted">Sign up as a community volunteer or pledge relief donations for affected families.</p>
                <button className="btn btn-outline-danger btn-sm" onClick={() => setActivePage('volunteer')}>Get Involved</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
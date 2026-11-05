import React from 'react';

function Footer({ setActivePage }) {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-auto border-top border-danger border-4">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-6">
            <h5 className="fw-bold text-danger">Lucena City Disaster Preparedness & Relief Hub</h5>
            <p className="small text-muted mb-0">
              Providing real-time emergency information, hotline directories, and evacuation guidance for residents of Lucena City, Quezon.
            </p>
          </div>
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li><button className="btn btn-link text-muted p-0 text-decoration-none" onClick={() => setActivePage('hotlines')}>Emergency Hotlines</button></li>
              <li><button className="btn btn-link text-muted p-0 text-decoration-none" onClick={() => setActivePage('evacuation')}>Evacuation Centers</button></li>
              <li><button className="btn btn-link text-muted p-0 text-decoration-none" onClick={() => setActivePage('preparedness')}>Preparedness Guide</button></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Emergency Contact</h6>
            <p className="small text-muted mb-1">CDRRMO Hotline: (042) 710-0911</p>
            <p className="small text-muted mb-0">Location: Lucena City, Quezon</p>
          </div>
        </div>
        <hr className="my-3 border-secondary" />
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} Lucena Disaster Preparedness & Relief Hub. Built for Academic Project.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
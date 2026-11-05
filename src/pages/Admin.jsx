import React, { useState } from 'react';

function Admin({ hotlines, setHotlines, evacuationList, setEvacuationList, alerts, setAlerts }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Admin Login Credentials (for academic demo)
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'cdrrmo2026';

  // Form states for adding items
  const [newAgency, setNewAgency] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newCategory, setNewCategory] = useState('Primary Emergency');

  const [alertTitle, setAlertTitle] = useState('');
  const [alertLevel, setAlertLevel] = useState('Warning');
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  const handleAddHotline = (e) => {
    e.preventDefault();
    if (!newAgency || !newNumber) return;
    const item = {
      id: Date.now(),
      agency: newAgency,
      number: newNumber,
      category: newCategory
    };
    setHotlines([item, ...hotlines]);
    setNewAgency('');
    setNewNumber('');
  };

  const handleAddAlert = (e) => {
    e.preventDefault();
    if (!alertTitle || !alertMessage) return;
    const newAlert = {
      id: Date.now(),
      title: alertTitle,
      level: alertLevel,
      message: alertMessage,
      timestamp: 'Just now'
    };
    setAlerts([newAlert, ...alerts]);
    setAlertTitle('');
    setAlertMessage('');
  };

  const toggleShelterStatus = (id) => {
    setEvacuationList(
      evacuationList.map((center) =>
        center.id === id
          ? { ...center, status: center.status === 'Open' ? 'Standby' : 'Open' }
          : center
      )
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow border-0">
              <div className="card-header bg-danger text-white text-center py-3">
                <h4 className="fw-bold mb-0">
                  <i className="bi bi-lock-fill me-2"></i>CDRRMO Admin Portal
                </h4>
              </div>
              <div className="card-body p-4">
                {loginError && <div className="alert alert-danger py-2">{loginError}</div>}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter admin username"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-danger w-100 fw-bold py-2">
                    Login to Dashboard
                  </button>
                </form>
                <div className="mt-3 text-center text-muted extra-small">
                  <small>Demo Credentials: <b>admin</b> / <b>cdrrmo2026</b></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-danger mb-0">
          <i className="bi bi-speedometer2 me-2"></i>Disaster Command Dashboard
        </h2>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setIsAuthenticated(false)}>
          <i className="bi bi-box-arrow-right me-1"></i>Logout
        </button>
      </div>

      <div className="row g-4">
        {/* Post Broadcast Alert */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-dark text-white fw-bold">
              Broadcast Emergency Alert
            </div>
            <div className="card-body">
              <form onSubmit={handleAddAlert}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Alert Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={alertTitle}
                    onChange={(e) => setAlertTitle(e.target.value)}
                    placeholder="e.g. Flash Flood Warning"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Severity Level</label>
                  <select
                    className="form-select"
                    value={alertLevel}
                    onChange={(e) => setAlertLevel(e.target.value)}
                  >
                    <option value="Warning">Warning (High Priority)</option>
                    <option value="Advisory">Advisory (Medium)</option>
                    <option value="Info">Information (Low)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={alertMessage}
                    onChange={(e) => setAlertMessage(e.target.value)}
                    placeholder="Provide details and safety instructions..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100 fw-bold">
                  Broadcast Alert
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Add New Emergency Hotline */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-dark text-white fw-bold">
              Add Emergency Hotline
            </div>
            <div className="card-body">
              <form onSubmit={handleAddHotline}>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Agency Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newAgency}
                    onChange={(e) => setNewAgency(e.target.value)}
                    placeholder="e.g. Red Cross Lucena"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    placeholder="e.g. (042) 710-XXXX"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold">Category</label>
                  <select
                    className="form-select"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  >
                    <option value="Primary Emergency">Primary Emergency</option>
                    <option value="Law Enforcement">Law Enforcement</option>
                    <option value="Fire & Rescue">Fire & Rescue</option>
                    <option value="Medical">Medical</option>
                    <option value="Utilities">Utilities</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-dark w-100 fw-bold">
                  Add Hotline to Directory
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Toggle Shelter Statuses */}
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-dark text-white fw-bold">
              Manage Evacuation Center Statuses
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Center Name</th>
                      <th>Barangay</th>
                      <th>Capacity</th>
                      <th>Current Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evacuationList.map((center) => (
                      <tr key={center.id}>
                        <td className="fw-semibold">{center.name}</td>
                        <td>{center.barangay}</td>
                        <td>{center.capacity}</td>
                        <td>
                          <span className={`badge ${center.status === 'Open' ? 'bg-success' : 'bg-warning text-dark'}`}>
                            {center.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className={`btn btn-sm ${center.status === 'Open' ? 'btn-outline-warning' : 'btn-outline-success'}`}
                            onClick={() => toggleShelterStatus(center.id)}
                          >
                            Set to {center.status === 'Open' ? 'Standby' : 'Open'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
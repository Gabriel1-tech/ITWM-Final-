import React, { useState, useEffect } from 'react';

function Admin({ 
  hotlines, 
  setHotlines, 
  evacuationList, 
  setEvacuationList, 
  alerts, 
  setAlerts 
}) {
  // Initialize state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isAdminLoggedIn');
    console.log("Initial load - localStorage isAdminLoggedIn:", saved);
    return saved === 'true';
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [newHotlineName, setNewHotlineName] = useState('');
  const [newHotlineNum, setNewHotlineNum] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('Warning');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Attempting login with:", username, password);
    if (username === 'admin' && password === 'cdrrmo2026') {
      setIsLoggedIn(true);
      localStorage.setItem('isAdminLoggedIn', 'true');
      console.log("Login successful! Saved to localStorage.");
      setError('');
    } else {
      setError('Invalid username or password');
      console.log("Login failed: invalid credentials.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAdminLoggedIn');
    console.log("Logged out. Cleared localStorage.");
  };

  const handleAddHotline = (e) => {
    e.preventDefault();
    if (!newHotlineName || !newHotlineNum) return;
    setHotlines([...hotlines, { id: Date.now(), name: newHotlineName, number: newHotlineNum }]);
    setNewHotlineName('');
    setNewHotlineNum('');
  };

  const toggleShelterStatus = (id) => {
    setEvacuationList(evacuationList.map(center => {
      if (center.id === id) {
        const newStatus = center.status === 'Open' ? 'Standby' : 'Open';
        return { ...center, status: newStatus };
      }
      return center;
    }));
  };

  const handleBroadcastAlert = (e) => {
    e.preventDefault();
    if (!alertTitle || !alertMessage) return;
    const newAlert = {
      id: Date.now(),
      title: alertTitle,
      message: alertMessage,
      severity: alertSeverity,
      time: 'Just now'
    };
    setAlerts([newAlert, ...alerts]);
    setAlertTitle('');
    setAlertMessage('');
  };

  if (!isLoggedIn) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow border-0">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4 fw-bold text-danger">CDRRMO Admin Portal</h3>
                {error && <div className="alert alert-danger py-2">{error}</div>}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter admin username"
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Enter password"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-danger w-100 fw-bold py-2">Login to Dashboard</button>
                </form>
                <div className="text-center mt-3 text-muted small">
                  Demo credentials: <code>admin</code> / <code>cdrrmo2026</code>
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
        <h2 className="fw-bold text-dark">Disaster Command Dashboard</h2>
        <button className="btn btn-outline-danger btn-sm fw-bold" onClick={handleLogout}>Logout</button>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold text-danger mb-3">Broadcast Emergency Alert</h5>
              <form onSubmit={handleBroadcastAlert}>
                <div className="mb-3">
                  <label className="form-label">Alert Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Red Rainfall Warning"
                    value={alertTitle}
                    onChange={(e) => setAlertTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Severity Level</label>
                  <select 
                    className="form-select"
                    value={alertSeverity}
                    onChange={(e) => setAlertSeverity(e.target.value)}
                  >
                    <option value="Warning">Warning (High Priority)</option>
                    <option value="Advisory">Advisory (Moderate)</option>
                    <option value="Info">Info (Normal)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    rows="3" 
                    placeholder="Provide details and safety instructions..."
                    value={alertMessage}
                    onChange={(e) => setAlertMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">Broadcast Alert</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold text-danger mb-3">Add Emergency Hotlines</h5>
              <form onSubmit={handleAddHotline}>
                <div className="mb-3">
                  <label className="form-label">Agency / Hotlines Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Brgy Red Cross Lucena"
                    value={newHotlineName}
                    onChange={(e) => setNewHotlineName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. (042) 710-3000"
                    value={newHotlineNum}
                    onChange={(e) => setNewHotlineNum(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-4">Add Hotline to Directory</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 mt-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold text-danger mb-3">Manage Evacuation Center Statuses</h5>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-dark">
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
                        <td className="fw-bold">{center.name}</td>
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
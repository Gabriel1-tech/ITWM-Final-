import React, { useState } from 'react';
import { emergencyHotlines } from '../data/disasterData';

function Hotlines({ hotlines }) {
  // replace emergencyHotlines references inside Hotlines.jsx with hotlines
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(emergencyHotlines.map(h => h.category))];

  const filteredHotlines = emergencyHotlines.filter((item) => {
    const matchesSearch = item.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.number.includes(searchTerm);
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-danger mb-3">
        <i className="bi bi-telephone-outbound-fill me-2"></i>Emergency Hotlines Directory
      </h2>
      <p className="text-muted mb-4">Official emergency contact details for agencies operating within Lucena City.</p>

      {/* Filter controls */}
      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search agency or phone number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Directory Cards */}
      <div className="row g-3">
        {filteredHotlines.length > 0 ? (
          filteredHotlines.map((hotline) => (
            <div key={hotline.id} className="col-md-6">
              <div className="card h-100 border-start border-danger border-4 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">{hotline.category}</span>
                  <h5 className="card-title fw-bold text-dark">{hotline.agency}</h5>
                  <p className="card-text fs-5 text-danger fw-semibold mb-0">
                    <i className="bi bi-telephone-fill me-2"></i>{hotline.number}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-4 text-muted">
            No emergency hotlines found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

export default Hotlines;
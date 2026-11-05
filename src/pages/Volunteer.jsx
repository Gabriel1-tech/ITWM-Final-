import React, { useState } from 'react';

function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    barangay: '',
    role: 'Volunteer Responder',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.phone && formData.barangay) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-danger mb-3">
        <i className="bi bi-heart-fill me-2"></i>Volunteer & Donation Registration
      </h2>
      <p className="text-muted mb-4">Join the community response effort in Lucena City during emergency situations.</p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {submitted ? (
            <div className="alert alert-success p-4 shadow-sm text-center">
              <h4 className="alert-heading fw-bold">Thank You for Registering!</h4>
              <p>Your details have been submitted to the Lucena Relief Command. A coordinator will reach out to you shortly.</p>
              <button className="btn btn-outline-success mt-2" onClick={() => setSubmitted(false)}>Register Another Person</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="e.g. Juan Dela Cruz"
                />
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Contact Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="e.g. 09171234567"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Barangay Location *</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={formData.barangay}
                    onChange={(e) => setFormData({...formData, barangay: e.target.value})}
                    placeholder="e.g. Barangay Cotta"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Support Category</label>
                <select
                  className="form-select"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                  <option value="Volunteer Responder">Volunteer Responder (On-site)</option>
                  <option value="Relief Goods Donor">Relief Goods / Food Donor</option>
                  <option value="Medical Assistance">Medical / First Aid Support</option>
                  <option value="Logistics & Transport">Logistics & Transport Support</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Additional Notes / Pledged Goods</label>
                <textarea
                  className="form-rows-3 form-control"
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Mention any specific items or availability details..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger btn-lg fw-bold w-100">
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
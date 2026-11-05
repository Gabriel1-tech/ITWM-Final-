import React from 'react';
import { preparednessSteps } from '../data/disasterData';

function Preparedness() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold text-danger mb-3">
        <i className="bi bi-shield-check me-2"></i>Disaster Preparedness & Action Guide
      </h2>
      <p className="text-muted mb-4">Essential steps to keep your household safe before, during, and after a calamity.</p>

      <div className="accordion" id="preparednessAccordion">
        {preparednessSteps.map((section, idx) => (
          <div className="accordion-item shadow-sm mb-3 border rounded" key={idx}>
            <h2 className="accordion-header" id={`heading${idx}`}>
              <button
                className="accordion-button fw-bold text-danger fs-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${idx}`}
                aria-expanded={idx === 0 ? "true" : "false"}
              >
                {section.phase}
              </button>
            </h2>
            <div
              id={`collapse${idx}`}
              className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
              data-bs-parent="#preparednessAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  {section.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="list-group-item d-flex align-items-start gap-2">
                      <span className="badge bg-danger rounded-pill me-2">{stepIdx + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preparedness;
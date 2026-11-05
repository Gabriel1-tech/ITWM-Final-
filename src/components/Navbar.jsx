import React from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'hotlines', label: 'Hotlines' },
  { id: 'evacuation', label: 'Evacuation Centers' },
  { id: 'volunteer', label: 'Volunteer / Donate' },
  { id: 'admin', label: 'Admin Portal' }
];

function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm">
      <div className="container">
        <a 
          className="navbar-brand fw-bold" 
          href="#home" 
          onClick={(e) => { e.preventDefault(); setActivePage('home'); }}
        >
          <i className="bi bi-shield-exclamation me-2"></i>
          Lucena Disaster Hub
        </a>
        
        <div className="navbar-nav ms-auto flex-row flex-wrap gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`btn btn-sm ${activePage === item.id ? 'btn-light text-danger fw-bold' : 'btn-outline-light'}`}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
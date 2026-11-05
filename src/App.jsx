import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotlines from './pages/Hotlines';
import Evacuation from './pages/Evacuation';
import Preparedness from './pages/Preparedness';
import Volunteer from './pages/Volunteer';
import Admin from './pages/Admin';
import { hotlinesData, evacuationCenters, initialAlerts } from './data/disasterData';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [hotlines, setHotlines] = useState(hotlinesData);
  const [evacuationList, setEvacuationList] = useState(evacuationCenters);
  const [alerts, setAlerts] = useState(initialAlerts);

  // Directly check localStorage on every render so it's 100% persistent
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

  const handleLoginStatus = (status) => {
    if (status) {
      localStorage.setItem('isAdminLoggedIn', 'true');
    } else {
      localStorage.removeItem('isAdminLoggedIn');
    }
    // Force a re-render so Navbar/Admin instantly reflect the change
    setActivePage((prev) => prev); 
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow-1">
        {activePage === 'home' && <Home setActivePage={setActivePage} alerts={alerts} />}
        {activePage === 'hotlines' && <Hotlines hotlines={hotlines} />}
        {activePage === 'evacuation' && <Evacuation evacuationList={evacuationList} />}
        {activePage === 'preparedness' && <Preparedness />}
        {activePage === 'volunteer' && <Volunteer />}
        {activePage === 'admin' && (
          <Admin
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={handleLoginStatus}
            hotlines={hotlines}
            setHotlines={setHotlines}
            evacuationList={evacuationList}
            setEvacuationList={setEvacuationList}
            alerts={alerts}
            setAlerts={setAlerts}
          />
        )}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
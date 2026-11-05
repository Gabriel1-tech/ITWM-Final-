import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Hotlines from './pages/Hotlines';
import Evacuation from './pages/Evacuation';
import Preparedness from './pages/Preparedness';
import Volunteer from './pages/Volunteer';
import Admin from './pages/Admin';

import { emergencyHotlines as initialHotlines, evacuationCenters as initialCenters, initialAlerts } from './data/disasterData';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [hotlines, setHotlines] = useState(initialHotlines);
  const [evacuationList, setEvacuationList] = useState(initialCenters);
  const [alerts, setAlerts] = useState(initialAlerts);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} alerts={alerts} />;
      case 'hotlines':
        return <Hotlines hotlines={hotlines} />;
      case 'evacuation':
        return <Evacuation evacuationList={evacuationList} />;
      case 'preparedness':
        return <Preparedness />;
      case 'volunteer':
        return <Volunteer />;
      case 'admin':
        return (
          <Admin
            hotlines={hotlines}
            setHotlines={setHotlines}
            evacuationList={evacuationList}
            setEvacuationList={setEvacuationList}
            alerts={alerts}
            setAlerts={setAlerts}
          />
        );
      default:
        return <Home setActivePage={setActivePage} alerts={alerts} />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow-1">
        {renderPage()}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
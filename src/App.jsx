{activePage === 'admin' && (
  <Admin
    hotlines={hotlines}
    setHotlines={setHotlines}
    evacuationList={evacuationList}
    setEvacuationList={setEvacuationList}
    alerts={alerts}
    setAlerts={setAlerts}
  />
)}
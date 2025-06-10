import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CoverPage from './components/cover-page.jsx';
import Navbar from './components/navbar.jsx';
import Homepage from './components/homepage.jsx';
import LocationPage from './components/locationpage.jsx';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <Router>
      {!started ? (
        <CoverPage onStart={() => setStarted(true)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/location/:locationId" element={<LocationPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
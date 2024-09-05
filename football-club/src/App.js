import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Adults from './pages/Teams/Adults';
import Ateam from './pages/Teams/Adults/Ateam';
import Youth from './pages/Teams/Youth';
import JuniorYounger from './pages/Teams/Youth/JuniorYounger';
import JuniorOlder from './pages/Teams/Youth/JuniorOlder';
import YouthYounger from './pages/Teams/Youth/YouthYounger';
import YouthOlder from './pages/Teams/Youth/YouthOlder';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/teams/adults" element={<Adults />} />
            <Route path="/teams/adults/ateam" element={<Ateam />} />
            <Route path="/teams/youth" element={<Youth />} />
            <Route path="/teams/youth/junior-younger" element={<JuniorYounger />} />
            <Route path="/teams/youth/junior-older" element={<JuniorOlder />} />
            <Route path="/teams/youth/youth-younger" element={<YouthYounger />} />
            <Route path="/teams/youth/youth-older" element={<YouthOlder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;

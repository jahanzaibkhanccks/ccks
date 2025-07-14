import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlumniForm from './components/AlumniForm';
import AlumniList from './components/AlumniList';
import Header from './Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';

export default function App() {
  return (
    <Router>
          <Header/>
        <Routes>
          <Route path="/AlumniForm" element={<AlumniForm />} />
          <Route path="/AlumniList" element={<AlumniList />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </Router>
  );
}

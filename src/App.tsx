// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WebSerial from './components/WebSerial';
import Credits from './components/Credits';
import Documentation from './components/Documentation';
import Navbar from './components/NavBar'; // Import the Navbar component
import './App.css'; // Import any global styling for your app

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/console" Component={WebSerial} />
        <Route path="/docs" Component={Documentation} />
        <Route path="/credits" Component={Credits} />
      </Routes>
    </Router>
  );
}

export default App;

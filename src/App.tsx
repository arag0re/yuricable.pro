// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Console from './components/Console';
import Credits from './components/Credits';
import Documentation from './components/Documentation';
import Navbar from './components/NavBar';
import './App.css'; 

function App() {
  const isChromium = (window as any).chrome !== undefined;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {isChromium && <Route path="/console" element={<Console />} />}
        <Route path="/docs" element={<Documentation />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;

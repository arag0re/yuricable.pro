// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/CLI'
import CLI from './pages/CLI'
import Credits from './pages/Credits'
import NavBarTop from './nav/NavBarTop'
import './App.css'

function App() {
   const isChromium = (window as any).chrome !== undefined

   return (
      <Router>
         <NavBarTop />
         <Routes>
            <Route path="/" element={<Home />} />
            {isChromium && <Route path="/cli" element={<CLI />} />}
            <Route path="/credits" element={<Credits />} />
         </Routes>
      </Router>
   )
}

export default App

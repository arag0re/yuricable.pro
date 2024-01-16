// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CLI from './components/CLI'
import Credits from './components/Credits'
import NavBarTop from './components/NavBarTop'
import './App.css'

function App() {
   const isWebSerialCompatible: boolean = navigator.serial ? true : false

   return (
      <Router>
         <NavBarTop />
         <Routes>
            {isWebSerialCompatible ? (
               <Route path="/" element={<CLI />} />
            ) : (
               <>Incompatible</>
            )}

            <Route id="credits" path="/credits" element={<Credits />} />
         </Routes>
      </Router>
   )
}

export default App

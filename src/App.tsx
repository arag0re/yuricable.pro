// src/App.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import CLI from './components/CLI'
import Credits from './components/Credits'
import NavBarTop from './components/NavBarTop'
import IncompatibleBrowser from './components/IncompatibleBrowser'
import NotFound from './components/IncompatibleBrowser'
import './App.css'
import { DetailedHTMLProps, HTMLAttributes, PropsWithRef } from 'react'

export type HTMLProps<E, T> = PropsWithRef<
   E & DetailedHTMLProps<HTMLAttributes<T>, T>
>

function App() {
   const isWebSerialCompatible: boolean = !!navigator.serial

   return (
      <Router>
         <NavBarTop />
         <Routes>
            {isWebSerialCompatible ? (
               <Route path="/" element={<CLI />} />
            ) : (
               <Route path="/" element={<IncompatibleBrowser />} />
            )}
            <Route path="/credits" element={<Credits />} />
            <Route path="*" element={<NotFound />} /> {/* 404 or Redirect */}
         </Routes>
      </Router>
   )
}

export default App

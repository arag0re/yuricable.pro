// src/App.js
import { DetailedHTMLProps, HTMLAttributes, PropsWithRef } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import CLI from './components/cli/CLI'
import Credits from './components/credits/Credits'
import NavBarTop from './components/nav/NavBarTop'
import IncompatibleBrowser from './components/IncompatibleBrowser'
import NotFound from './components/IncompatibleBrowser'
import BoodleRegular from './assets/fonts/boodle/Boodle-Regular.otf'
import './App.css'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Boodle';
        src: url(${BoodleRegular}) format('opentype');
    }
`

export type HTMLProps<E, T> = PropsWithRef<
   E & DetailedHTMLProps<HTMLAttributes<T>, T>
>

function App() {
   const isWebSerialCompatible: boolean = !!navigator.serial

   return (
      <>
         <GlobalStyle />
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
      </>
   )
}

export default App

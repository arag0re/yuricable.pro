import { Component } from 'react'
import styled from 'styled-components'
import dolphinSad from '../assets/dolphin-sad.png'

const StyledIncompatibleBrowser = styled.nav`
   margin: 20px;
   padding: 20px;
   border: 1px solid pink;
   color: rgb(154, 25, 126);
   border-radius: 5px;
   text-align: center;
`

export default class IncompatibleBrowser extends Component {
   render() {
      return (
         <StyledIncompatibleBrowser className="incompatible-browser">
            <h1>Browser Incompatibility</h1>
            <img src={dolphinSad} alt="Sad Dolphin"></img>
            <p>
               Unfortunately, your current browser does not support the features
               required by our application.
            </p>
            <p>
               We recommend using the latest version of a Chromium Based Browser
               like: Microsoft Edge or Google Chrome
            </p>
            <p>
               If you believe this message is an error, please ensure your
               browser is up to date and that any relevant features are not
               disabled in your browser settings.
            </p>
         </StyledIncompatibleBrowser>
      )
   }
}

import { Component } from 'react'
import styled from 'styled-components'
import dolphinSad from '../assets/dolphin-sad.png'

const StyledIncompatibleBrowser = styled.div`
   margin: 20px;
   padding: 20px;
   color: rgb(154, 25, 126);
   text-align: center;
   font-family: 'Boodle', sans-serif;
`

export default class IncompatibleBrowser extends Component {
   render() {
      return (
         <StyledIncompatibleBrowser className="incompatible-browser">
            <h1>Browser Incompatibility</h1>
            <img
               style={{
                  width: '60%',
                  imageRendering: 'pixelated',
               }}
               src={dolphinSad}
               alt="Sad Dolphin"
            ></img>
            <p>
               Unfortunately, your current browser does not support the features
               required by our application.
            </p>
            <p>
               We recommend using the latest version of a Chromium Based Browser
               like: Microsoft Edge or Brave Browser
            </p>
            <p>Meanwhile you can look at out cool PCB!</p>
            <iframe
                id="altium-iframe"
               src="https://personal-viewer.365.altium.com/client/index.html?feature=embed&source=F7968924-074A-413F-852B-0C0A28F65F61&activeView=PCB"
               width="1280"
               height="720"
               scrolling="no"
            ></iframe>
         </StyledIncompatibleBrowser>
      )
   }
}

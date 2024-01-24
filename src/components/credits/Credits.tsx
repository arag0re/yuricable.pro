import { Component } from 'react'
import styled from 'styled-components'
import discordSvg from '../../assets/discord.svg'
import discordSvgBlack from '../../assets/discord_black.svg'
import twitterSvg from '../../assets/twitter.svg'
import twitterSvgBlack from '../../assets/twitter_black.svg'
import qFlipperImg from '../../assets/qFlipper_macOS_256px.png'
import qFlipperImgBlack from '../../assets/qFlipper_black_macOS_256px.png'
import githubSvg from '../../assets/github.svg'
import githubSvgBlack from '../../assets/github_black.svg'
import SocialsButton from './SocialsButton'

const StyledCreditContainer = styled.nav`
   max-height: 100%;
   max-width: 100%;
   padding: 30px 10% 0;
   margin-bottom: 10%;
   font-family: 'Boodle', sans-serif;
`
export default class Credits extends Component {
   constructor(props: any) {
      super(props)
      this.state = {
         selectedVideo: null,
      }
   }

   embedYouTubeVideo(videoId: string) {
      const videoContainerStyle = {
         width: '100%',
         height: '674px',
         margin: '20px auto 20px',
         border: 'none',
      }
      return (
         <div>
            <iframe
               style={videoContainerStyle}
               src={`https://www.youtube.com/embed/${videoId}`}
               title={`YouTube Video ${videoId}`}
               allowFullScreen
            ></iframe>
         </div>
      )
   }

   render() {
      const titleStyle = {
         color: 'white',
         fontSize: '2em',
         fontWeight: 'bold',
      }

      const contentStyle = {
         color: 'white',
         fontSize: '1.2em',
      }

      const linkStyle = {
         color: '#9a197e',
         textDecoration: 'none',
         fontSize: '1.2em',
         cursor: 'pointer',
      }

      const videoLinksContainerStyle = {
         ...contentStyle,
         paddingBottom: '10vh',
      }

      return (
         <StyledCreditContainer className="web-serial-container">
            <h1 style={titleStyle}>Credits</h1>

            <div style={contentStyle}>
               <h3>Flipper Devices Inc.</h3>
               <p>
                  Thanks to Flipper Devices Inc. for developing and releasing
                  the Flipper Zero of course and also thanks to the very helpful
                  discord-community! ❤️
               </p>
               <div className="socials-section">
                  <ul className="socials-list">
                     <li>
                        <SocialsButton
                           svgActive={discordSvg}
                           svgInactive={discordSvgBlack}
                           href="https://discord.gg/flipper"
                           altText="Flipper Discord"
                           tooltipText="Flipper Discord"
                        />
                     </li>
                     <li>
                        <SocialsButton
                           svgActive={qFlipperImg}
                           svgInactive={qFlipperImgBlack}
                           href="https://flipperzero.one/"
                           altText="Flipper Devices Inc. Website"
                           tooltipText="Flipper Devices Inc. Website"
                        />
                     </li>
                     <li>
                        <SocialsButton
                           svgActive={githubSvg}
                           svgInactive={githubSvgBlack}
                           href="https://github.com/flipperdevices"
                           altText="Flipper Devices GitHub"
                           tooltipText="Flipper Devices GitHub"
                        />
                     </li>
                  </ul>
               </div>
               Especially thanks to{' '}
               <a
                  style={linkStyle}
                  href="https://twitter.com/l33tbunni"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  @l33tbunni
               </a>{' '}
               from the Flipper Discord for beeing so supportive!
               <ul className="socials-list">
                  <li>
                     <SocialsButton
                        svgActive={twitterSvg}
                        svgInactive={twitterSvgBlack}
                        href="https://twitter.com/l33tbunni"
                        altText="l33tbunni Twitter"
                        tooltipText="Check l33tbunni out on Twitter"
                     />
                  </li>
               </ul>
               <h3>SDQ</h3>
               <ul>
                  <li>
                     <strong>Name:</strong> SDQ (IDBUS) developed by Texas
                     Instruments
                  </li>
                  <li>
                     <strong>Source:</strong>{' '}
                     <a
                        style={linkStyle}
                        href="https://nyansatan.github.io/lightning/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Reversed Protocol & Info on Lightning
                     </a>
                  </li>
               </ul>
            </div>

            <div style={contentStyle}>
               <p>
                  Credits for SDQ reverse engineering to{' '}
                  <a
                     style={linkStyle}
                     href="https://github.com/nyansatan"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     @nyansatan
                  </a>
               </p>
            </div>

            <div style={contentStyle}>
               <h3>SDQ Analyzer & Protocol Decoder for Logic2</h3>
               <ul>
                  <li>
                     <a
                        style={linkStyle}
                        href="https://github.com/nezza/SDQAnalyzer"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        SDQ Analyzer for Logic2
                     </a>
                  </li>
               </ul>
            </div>
            <p>
               Credits to{' '}
               <a
                  style={linkStyle}
                  href="https://github.com/nezza"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  @nezza
               </a>{' '}
               and all contributors for the Analyzer.
            </p>

            <div style={contentStyle}>
               <h3>Tamarin Cable Implementation</h3>
               <ul>
                  <li>
                     <a
                        style={linkStyle}
                        href="https://github.com/stacksmashing/tamarin-firmware"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Tamarin Firmware
                     </a>
                  </li>
               </ul>
            </div>

            <div style={videoLinksContainerStyle} id="videoLinks">
               <p>
                  Credits to{' '}
                  <a
                     style={linkStyle}
                     href="https://github.com/stacksmashing"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     @stacksmashing
                  </a>{' '}
                  for an example RaspberryPi-Pico implementation and his talks
                  on the subject.
               </p>
               <p>Here is a list of his talks on YouTube:</p>
               <ul>
                  <li>
                     <details style={linkStyle}>
                        <summary>
                           The Hitchhacker’s Guide to iPhone Lightning and JTAG
                           Hacking
                        </summary>
                        {this.embedYouTubeVideo('8p3Oi4DL0eI')}
                     </details>
                  </li>
                  <li>
                     <details style={linkStyle}>
                        <summary>
                           Inside Apple's Lightning: JTAGging The iPhone For
                           Fuzzing And Profit
                        </summary>
                        {this.embedYouTubeVideo('vmQcrU5pNvU')}
                     </details>
                  </li>
                  <li>
                     <details style={linkStyle}>
                        {' '}
                        <summary>
                           {' '}
                           Stacksmashing- Inside Apple’s Lightning: JTAGging the
                           iPhone for Fuzzing and Profit
                        </summary>
                        {this.embedYouTubeVideo('-nFWcKHIUN4')}
                     </details>
                  </li>
                  <li>
                     <details style={linkStyle}>
                        <summary>
                           The secrets of Apple Lightning - Part 1
                        </summary>
                        {this.embedYouTubeVideo('p5tMaWsuGk0')}
                     </details>
                  </li>
                  <li>
                     <details style={linkStyle}>
                        <summary>Getting JTAG on the iPhone 15</summary>
                        {this.embedYouTubeVideo('D8UGlvBubkA')}
                     </details>
                  </li>
               </ul>
            </div>
         </StyledCreditContainer>
      )
   }
}

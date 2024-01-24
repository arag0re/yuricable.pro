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
   selectedVideo: string | null

   constructor(props: any) {
      super(props)
      this.selectedVideo = null
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

   toggleVideo(videoId: string) {
      if (this.selectedVideo === videoId) {
         this.selectedVideo = null
      } else {
         this.selectedVideo = videoId
         const linksContainer = document.getElementById('videoLinks')
         if (linksContainer) {
            linksContainer.scrollTop = linksContainer.scrollHeight
         }
      }
      this.forceUpdate()
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
               Espeacially thanks to{' '}
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
                     <span
                        style={linkStyle}
                        onClick={() => this.toggleVideo('8p3Oi4DL0eI')}
                     >
                        The Hitchhacker’s Guide to iPhone Lightning and JTAG
                        Hacking
                     </span>
                     {this.selectedVideo === '8p3Oi4DL0eI' &&
                        this.embedYouTubeVideo('8p3Oi4DL0eI')}
                  </li>
                  <li>
                     <span
                        style={linkStyle}
                        onClick={() => this.toggleVideo('vmQcrU5pNvU')}
                     >
                        Inside Apple's Lightning: JTAGging The iPhone For
                        Fuzzing And Profit
                     </span>
                     {this.selectedVideo === 'vmQcrU5pNvU' &&
                        this.embedYouTubeVideo('vmQcrU5pNvU')}
                  </li>
                  <li>
                     <span
                        style={linkStyle}
                        onClick={() => this.toggleVideo('-nFWcKHIUN4')}
                     >
                        Stacksmashing- Inside Apple’s Lightning: JTAGging the
                        iPhone for Fuzzing and Profit
                     </span>
                     {this.selectedVideo === '-nFWcKHIUN4' &&
                        this.embedYouTubeVideo('-nFWcKHIUN4')}
                  </li>
                  <li>
                     <span
                        style={linkStyle}
                        onClick={() => this.toggleVideo('p5tMaWsuGk0')}
                     >
                        The secrets of Apple Lightning - Part 1
                     </span>
                     {this.selectedVideo === 'p5tMaWsuGk0' &&
                        this.embedYouTubeVideo('p5tMaWsuGk0')}
                  </li>
                  <li>
                     <span
                        style={linkStyle}
                        onClick={() => this.toggleVideo('D8UGlvBubkA')}
                     >
                        Getting JTAG on the iPhone 15
                     </span>
                     {this.selectedVideo === 'D8UGlvBubkA' &&
                        this.embedYouTubeVideo('D8UGlvBubkA')}
                  </li>
               </ul>
            </div>
         </StyledCreditContainer>
      )
   }
}

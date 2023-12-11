import React, { useState } from 'react';

const Credits = () => {
  const containerStyle = {
    margin: '0 10%',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const contentStyle = {
    color: 'white',
    fontSize: '1.2em',
  };

  const linkStyle = {
    color: '#9a197e',
    textDecoration: 'none',
    fontSize: '1.2em',
    cursor: 'pointer',
  };

  const videoContainerStyle = {
    width: '100%',
    height: '674px',
    margin: '20px auto 20px', // Center the video container
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

 const toggleVideo = (videoId) => {
   if (selectedVideo === videoId) {
     setSelectedVideo(null); // Toggle off if the same video is clicked
   } else {
     setSelectedVideo(videoId); // Toggle on if a different video is clicked
     // Scroll to the last link
     const linksContainer = document.getElementById('videoLinks');
     if (linksContainer) {
       linksContainer.scrollTop = linksContainer.scrollHeight;
     }
   }
 };

 const videoLinksContainerStyle = {
   ...contentStyle, // Inherit styles from contentStyle
   paddingBottom: '10vh', // Add extra space at the bottom for scrolling
 };

  const embedYouTubeVideo = (videoId) => (
    <div>
      <iframe
        style={videoContainerStyle}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`YouTube Video ${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );

  return (
    <div className="web-serial-container" style={containerStyle}>
      <h1 style={titleStyle}>Credits Page</h1>

      <div style={contentStyle}>
        <h3>SDQ</h3>
        <ul>
          <li>
            <strong>Name:</strong> SDQ (IDBUS) developed by Texas Instruments
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
          <a style={linkStyle} href="https://github.com/nyansatan" target="_blank" rel="noopener noreferrer">
            @nyansatan
          </a>
        </p>
      </div>
      <div style={contentStyle}>
        <h3>SDQ Analyzer & Protocol Decoder for Logic2</h3>
        <ul>
          <li>
            <a style={linkStyle} href="https://github.com/nezza/SDQAnalyzer" target="_blank" rel="noopener noreferrer">
              SDQ Analyzer for Logic2
            </a>
          </li>
        </ul>
      </div>
      <p>
        Credits to{' '}
        <a style={linkStyle} href="https://github.com/nezza" target="_blank" rel="noopener noreferrer">
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
          <a style={linkStyle} href="https://github.com/stacksmashing" target="_blank" rel="noopener noreferrer">
            @stacksmashing
          </a>{' '}
          for an example RaspberryPi-Pico implementation and his talks on the subject.
        </p>
        <p>Here is a list of his talks on YouTube:</p>
        <ul>
          <li>
            <span style={linkStyle} onClick={() => toggleVideo('8p3Oi4DL0eI')}>
              The Hitchhacker’s Guide to iPhone Lightning and JTAG Hacking
            </span>
            {selectedVideo === '8p3Oi4DL0eI' && embedYouTubeVideo('8p3Oi4DL0eI')}
          </li>
          <li>
            <span style={linkStyle} onClick={() => toggleVideo('vmQcrU5pNvU')}>
              Inside Apple's Lightning: JTAGging The iPhone For Fuzzing And Profit
            </span>
            {selectedVideo === 'vmQcrU5pNvU' && embedYouTubeVideo('vmQcrU5pNvU')}
          </li>
          <li>
            <span style={linkStyle} onClick={() => toggleVideo('-nFWcKHIUN4')}>
              Stacksmashing- Inside Apple’s Lightning: JTAGging the iPhone for Fuzzing and Profit
            </span>
            {selectedVideo === '-nFWcKHIUN4' && embedYouTubeVideo('-nFWcKHIUN4')}
          </li>
          <li>
            <span style={linkStyle} onClick={() => toggleVideo('p5tMaWsuGk0')}>
              The secrets of Apple Lightning - Part 1
            </span>
            {selectedVideo === 'p5tMaWsuGk0' && embedYouTubeVideo('p5tMaWsuGk0')}
          </li>
          <li>
            <span style={linkStyle} onClick={() => toggleVideo('D8UGlvBubkA')}>
              Getting JTAG on the iPhone 15
            </span>
            {selectedVideo === 'D8UGlvBubkA' && embedYouTubeVideo('D8UGlvBubkA')}
          </li>
        </ul>
      </div>

      {/* Other content sections */}
    </div>
  );
};

export default Credits;

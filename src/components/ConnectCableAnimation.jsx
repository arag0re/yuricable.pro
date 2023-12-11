// ConnectCableAnimation.jsx
import { useState, useEffect } from 'react';
import '../css/ConnectCableAnimation.css';
import lightning from '../assets/noun-iphone-plug-19802.svg';
import phone from '../assets/phone.png';

const ConnectCableAnimation = () => {
  const [isPlugged, setIsPlugged] = useState(false);

  const handlePlugIn = () => {
    setIsPlugged(true);
    setTimeout(() => setIsPlugged(false), 1500); // Reset after 1.5 seconds
  };

  // Automatic loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handlePlugIn();
    }, 3000); // Adjust the interval time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className={`usb-container`}>
      <img src={phone} alt="phone" id="phone"></img>
      <img src={lightning} alt="lightning" id="lightning" className={`lightning ${isPlugged ? 'plugged' : ''}`}></img>
    </div>
  );
};

export default ConnectCableAnimation;

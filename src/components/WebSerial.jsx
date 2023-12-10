// components/WebSerial.js
import React, { useState, useEffect, useRef } from 'react';
import '../css/WebSerial.css'; // Import the CSS file for styling

const WebSerial = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = () => {
    setInputValue(inputRef.current.innerText);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Handle your submit logic here
      console.log('Submitted:', inputValue);
    }
  };

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div className="web-serial-container">
      <h1>Web Serial Page</h1>
      <div className="console" onKeyDown={handleKeyDown} tabIndex={0}>
        <pre>
          <code>{`> `}</code>
          <code>
            <span className="input-line" contentEditable onInput={handleInputChange} ref={inputRef}></span>
          </code>
        </pre>
      </div>
      {/* Add content for the web serial page */}
    </div>
  );
};

export default WebSerial;

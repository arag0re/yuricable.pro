// components/WebSerial.js
import React, { useState, useEffect, useRef } from 'react';
import { useWebSerial } from 'react-webserial-hook';
import '../css/WebSerial.css'; // Import the CSS file for styling

const WebSerial = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const serial = useWebSerial({
    onData: (data) => {
      const decoder = new TextDecoder();
      console.log(decoder.decode(data));
    },
  });

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
      <h1>YuriConsole</h1>
      <button onClick={() => serial.requestPort()}>Pair a new yuri</button>
      <button onClick={() => serial.openPort()}>Open the selected yuri</button>
      <button onClick={() => serial.startReading()}>Start reading from yuri</button>
      <div className="console" onKeyDown={handleKeyDown} tabIndex={0}>
        <pre>
          <code>{`> `}</code>
          <code>
            <span
              className="input-line"
              contentEditable
              onInput={handleInputChange}
              ref={inputRef}
              spellCheck="false"
            ></span>
          </code>
        </pre>

        {/* Add content for the web serial page */}
      </div>
    </div>
  );
};

export default WebSerial;

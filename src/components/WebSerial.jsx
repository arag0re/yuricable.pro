import { useState, useEffect, useRef } from 'react';
import { useWebSerial } from 'react-webserial-hook';
import '../css/WebSerial.css';

// Custom hook to initialize and hold the serial object
const useSerial = (setConsoleLines, consoleRef, setSerial) => {
  const serial = useWebSerial({
    onData: (data) => {
      const decoder = new TextDecoder();
      setConsoleLines((prevLines) => {
        const decodedData = decoder.decode(data);
        const lastLine = prevLines[prevLines.length - 1];
        const updatedLastLine = lastLine + decodedData;
        const newLines = updatedLastLine.split('\n');
        return [...prevLines.slice(0, -1), ...newLines];
      });
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    },
  });

  useEffect(() => {
    setSerial(serial);
  }, [serial, setSerial]);
};

const WebSerial = () => {
  const [inputValue, setInputValue] = useState('');
  const [consoleLines, setConsoleLines] = useState(['']);
  const inputRef = useRef(null);
  const consoleRef = useRef(null);
  const [serial, setSerial] = useState(null);
  useSerial(setConsoleLines, consoleRef, setSerial);

  useEffect(() => {
    // Additional initialization logic if needed
  }, []);

  const handleInputChange = () => {
    setInputValue(inputRef.current.innerText);
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const inputText = inputValue.trim();
      // Access serial object directly
      if (inputText !== '' && serial.port && serial.port.writable) {
        const encoder = new TextEncoder();
        const dataArray = encoder.encode(inputText);
        await serial.write(dataArray);
      }
    }
  };

  const handleConsoleClick = () => {
    inputRef.current.focus();
  };

  const handleStartReading = async () => {
    if (serial.port) {
      await serial.openPort();
      await serial.startReading();
    }
  };

  return (
    <div className="web-serial-container">
      <h1>YuriConsole</h1>
      <button onClick={() => serial.requestPort()}>Select YuriCable</button>
      <button onClick={handleStartReading}>Connect</button>
      <div className="console" onClick={handleConsoleClick} onKeyDown={handleKeyDown} tabIndex={0} ref={consoleRef}>
        <pre>
          {consoleLines.map((line, index) => (
            <code key={index} className="code">
              {line}
            </code>
          ))}
          <span
            className="input-line"
            contentEditable="true"
            onInput={handleInputChange}
            ref={inputRef}
            spellCheck="false"
          ></span>
        </pre>
      </div>
    </div>
  );
};

export default WebSerial;

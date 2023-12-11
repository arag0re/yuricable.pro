import { useState, useEffect, useRef } from 'react';
import { useWebSerial } from 'react-webserial-hook';
import '../css/WebSerial.css';

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
  const [ctrlPressed, setCtrlPressed] = useState(false);
  useSerial(setConsoleLines, consoleRef, setSerial);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Control') {
        setCtrlPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Control') {
        setCtrlPressed(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleInputChange = () => {
    setInputValue(inputRef.current.innerText);
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const inputText = inputValue.trim();
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
      <div
        className={`console ${ctrlPressed ? 'ctrl-pressed' : ''}`}
        onClick={handleConsoleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={consoleRef}
      >
        <pre>
          {consoleLines.map((line, index) => (
            <code
              key={index}
              className={`code ${ctrlPressed ? 'clickable' : ''}`}
              dangerouslySetInnerHTML={{
                __html: ctrlPressed
                  ? line
                      .replace(/(https?:\/\/\S+)/g, (_, url) => `<a href="${url}" target="_blank">${url}</a>`)
                      .replace(/(http:\/\/\S+)/g, (_, url) => `<a href="${url}" target="_blank">${url}</a>`)
                  : line,
              }}
            />
          ))}
          <span
            className="input-line"
            contentEditable="true"
            onInput={handleInputChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            spellCheck="false"
          ></span>
        </pre>
      </div>
    </div>
  );
};

export default WebSerial;

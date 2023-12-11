import { useState, useEffect, useRef } from 'react';
import { useWebSerial } from 'react-webserial-hook';
import '../css/Console.css';
import power from '../assets/pHcwlAJ6xsRVRPRlwkK8u_power.png';

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

const Console = () => {
  const [inputValue, setInputValue] = useState('');
  const [consoleLines, setConsoleLines] = useState(['']);
  const inputRef = useRef(null);
  const consoleRef = useRef(null);
  const [serial, setSerial] = useState(null);
  const [ctrlPressed, setCtrlPressed] = useState(false);
  const [isConnected, setIsConnected] = useState(false); // New state variable

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
      if (!serial.port.readable) {
        await serial.openPort();
        setIsConnected(true); // Set isConnected to true when reading starts
        await serial.startReading();
      }
      setIsConnected(true);
      await serial.startReading();
    }
  };

  const handleDisconnect = async () => {
    if (serial.port) {
      await serial.stopReading();
      setIsConnected(false);
      await serial.closePort().catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div className="web-serial-container">
      <button onClick={() => serial.requestPort()}>Select YuriCable</button>
      {isConnected ? (
        <button onClick={handleDisconnect}>Disconnect</button>
      ) : (
        <button onClick={handleStartReading}>Connect</button>
      )}
      {isConnected ? (
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
      ) : (
        <img className="power" src={power} alt="power"></img>
      )}
    </div>
  );
};

export default Console;

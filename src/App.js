import './App.css';
import { useState } from 'react';
import iMissImage from './img/i_miss.png';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="halloween-app">
      {/* Envelope in center */}
      <div className="envelope-container">
        {!isEnvelopeOpen ? (
          <div className="envelope" onClick={handleEnvelopeClick}>
            <div className="envelope-front">
              <div className="envelope-flap"></div>
            </div>
            <div className="envelope-back"></div>
            <div className="envelope-text">💌</div>
          </div>
        ) : (
          <div className="envelope-content">
            <img
              src={iMissImage}
              alt="I Miss You"
              className="envelope-image"
            />
            <div className="envelope-message">
              <p>Te extraño mucho 💕</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

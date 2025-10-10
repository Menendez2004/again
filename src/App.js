import './App.css';
import { useState } from 'react';
import halloweenImage from './img/dulce.jpeg';
import loveImage from './img/love.webp';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedOption(null);
  };

  return (
    <div className="halloween-app">
      {/* Background decorative elements */}
      <div className="background-elements">
        <div className="floating-element element-1">🍬</div>
        <div className="floating-element element-2">🎃</div>
        <div className="floating-element element-3">🦇</div>
        <div className="floating-element element-4">👻</div>
        <div className="floating-element element-5">🍭</div>
        <div className="floating-element element-6">✨</div>
        <div className="floating-element element-7">✨</div>
        <div className="floating-element element-8">✨</div>
        <div className="floating-element element-9">✨</div>
        <div className="floating-element element-10">✨</div>
      </div>

      {/* Main container */}
      <div className="main-container">
        {/* Image container */}
        <div className="image-container">
          <img
            src={halloweenImage}
            alt="Imagen Halloween"
            className="main-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="image-placeholder" style={{ display: 'none' }}>
            <div className="upload-icon">📷</div>

          </div>
        </div>

        {/* Choice buttons */}
        <div className="choice-buttons">
          <button
            className="choice-btn choice-1"
            onClick={() => handleOptionSelect('intentarlo')}
          >
            💕Si, hay que intentarlo
          </button>
          <button
            className="choice-btn choice-2"
            onClick={() => handleOptionSelect('conocernos')}
          >
            💕Si, hay que intentarlo
          </button>
        </div>
      </div>

      {/* Interactive Dialog Box */}
      {showDialog && (
        <div className="dialog-overlay" onClick={handleCloseDialog}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <h3>¡Tu elección!</h3>
              <button className="close-btn" onClick={handleCloseDialog}>×</button>
            </div>
            <div className="dialog-content">
              <div className="dialog-image-container">
                <img
                  src={loveImage}
                  alt="Love"
                  className="dialog-image"
                />
              </div>
              <div className="dialog-text">
                si : si
              </div>
              <div className="dialog-message">
                {selectedOption === 'intentarlo'
                  ? '¡Lo siento por todo!, te quiero mucho '
                  : '¡Lo siento por todo!, te quiero mucho de aca a la luna con pasos de tortuga'
                }
              </div>

            </div>
            <div className="dialog-actions">
              <button className="action-btn confirm" onClick={handleCloseDialog}>
                💕
              </button>
            </div>
            <small>
              no logre hacer un weebhok para que me notifique tu respuesta, vas a tener que escribirmela
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

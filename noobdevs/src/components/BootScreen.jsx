import { useState, useEffect } from 'react';
import './BootScreen.css';

function BootScreen({ onBootComplete }) {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show text after brief delay
    setTimeout(() => {
      setShowText(true);
    }, 600);

    // Animate progress bar (XP style)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 10 + 3;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    // Fade out and transition to desktop after boot (faster)
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onBootComplete();
      }, 400);
    }, 3200);

    return () => clearInterval(interval);
  }, [onBootComplete]);

  return (
    <div className={`boot-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="boot-content">
        {/* Windows XP Logo */}
        <div className="xp-logo">
          <div className="windows-flag">
            <div className="flag-red"></div>
            <div className="flag-green"></div>
            <div className="flag-blue"></div>
            <div className="flag-yellow"></div>
          </div>
          <h1 className="xp-title">NoobDev OS</h1>
        </div>

        {/* Boot Text & Progress */}
        {showText && (
          <div className="boot-text">
            <p className="boot-message">Starting NoobDev experience...</p>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="boot-footer">
          <p>&copy; 2026 NoobDev Corporation. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default BootScreen;
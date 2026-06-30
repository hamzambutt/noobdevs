import { useState, useEffect } from 'react';
import './PosthogTaskbar.css';

function PosthogTaskbar({ windows, onToggleWindow, onToggleMode }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ph-taskbar">
      <div className="ph-taskbar-left">
        <button className="ph-taskbar-start">
          <span className="ph-start-icon">N</span>
          Start
        </button>
        
        <div className="ph-taskbar-divider"></div>

        {/* Open Apps */}
        {windows.map(win => (
          <button 
            key={win.id}
            className={`ph-taskbar-app ${win.isOpen && !win.isMinimized ? 'active' : ''}`}
            onClick={() => onToggleWindow(win.id)}
          >
            <span className="ph-app-icon">{win.icon}</span>
            {win.title}
          </button>
        ))}
      </div>

      <div className="ph-taskbar-right">
        <button className="ph-taskbar-mode-toggle" onClick={onToggleMode}>
          Website View ↗
        </button>
        
        <div className="ph-taskbar-tray">
          <span className="ph-tray-icon">📶</span>
          <span className="ph-tray-icon">🔋</span>
          <span className="ph-tray-time">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PosthogTaskbar;

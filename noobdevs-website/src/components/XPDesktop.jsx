import { useState, useEffect } from 'react';
import './XPDesktop.css';

function XPDesktop({ onOpenBrowser, onOpenProjects }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const desktopIcons = [
    { id: 'browser', label: 'Internet Browser', icon: '🌐', action: onOpenBrowser },
    { id: 'projects', label: 'PROJECTS', icon: '💼', action: onOpenProjects },
    { id: 'about', label: 'About Us', icon: '📄', action: () => {} },
    { id: 'recycle', label: 'Recycle Bin', icon: '🗑️', action: () => {} }
  ];

  return (
    <div className="xp-desktop">
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {desktopIcons.map((item) => (
          <div 
            key={item.id} 
            className="desktop-icon"
            onClick={item.action}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <span className="icon-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Taskbar */}
      <div className="xp-taskbar">
        {/* Start Button & Quick Launch */}
        <div className="taskbar-left">
          <button className="start-button">
            <span className="windows-logo">🪟</span>
            <span className="start-text">Start</span>
          </button>
          <div className="quick-launch">
            <span className="quick-icon" onClick={onOpenBrowser} title="Quick Launch - Browser">🌐</span>
          </div>
        </div>

        {/* Task Items */}
        <div className="taskbar-items">
          <button className="task-item active">
            <span className="task-icon">💼</span>
            <span className="task-label">PROJECTS - Noobdevs</span>
          </button>
        </div>

        {/* System Tray */}
        <div className="system-tray">
          <span className="tray-icon" title="Volume">🔊</span>
          <span className="tray-icon" title="Network">📶</span>
          <span className="clock" title={formatTime(currentTime)}>
            {formatTime(currentTime)}
          </span>
        </div>
      </div>

      {/* Start Menu (Hidden by default, would toggle on click) */}
      <div className="start-menu">
        <div className="start-header">
          <div className="user-avatar">👤</div>
          <span className="username">Administrator</span>
        </div>
        <div className="start-items">
          <div className="start-item">
            <span className="item-icon">🌐</span>
            <span className="item-text">Internet Browser</span>
          </div>
          <div className="start-item">
            <span className="item-icon">💼</span>
            <span className="item-text">PROJECTS</span>
          </div>
          <div className="start-item">
            <span className="item-icon">📧</span>
            <span className="item-text">Email</span>
          </div>
          <div className="start-item">
            <span className="item-icon">📁</span>
            <span className="item-text">My Documents</span>
          </div>
          <div className="start-item">
            <span className="item-icon">⚙️</span>
            <span className="item-text">Control Panel</span>
          </div>
        </div>
        <div className="start-footer">
          <button className="shutdown-btn">Shutdown</button>
        </div>
      </div>
    </div>
  );
}

export default XPDesktop;
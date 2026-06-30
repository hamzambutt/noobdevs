import './XPWindow.css';

function XPWindow({ 
  title, 
  icon = '📁', 
  children, 
  onClose, 
  onMinimize,
  width = '90%',
  height = '70%',
  position = { top: '50px', left: '50px' },
  showStatus = false,
  statusText = ''
}) {
  return (
    <div className="xp-window" style={{ width, height, ...position }}>
      {/* Title Bar */}
      <div className="xp-titlebar">
        <div className="xp-titlebar-text">
          <span className="xp-titlebar-icon">{icon}</span>
          {title}
        </div>
        <div className="xp-titlebar-buttons">
          <button 
            className="xp-titlebar-btn xp-btn-minimize" 
            onClick={onMinimize}
            title="Minimize"
          >
            _
          </button>
          {!onClose && (
            <button 
              className="xp-titlebar-btn xp-btn-maximize" 
              title="Maximize"
            >
              □
            </button>
          )}
          {onClose && (
            <button 
              className="xp-titlebar-btn xp-btn-close" 
              onClick={onClose}
              title="Close"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Browser Address Bar */}
      <div className="browser-chrome">
        <div className="browser-nav-btn">←</div>
        <div className="browser-nav-btn">→</div>
        <div className="browser-address-bar">
          <span className="browser-address-icon">🔒</span>
          <input 
            type="text" 
            className="browser-address-input" 
            defaultValue="https://noobdevs.io"
            readOnly
          />
        </div>
      </div>

      {/* Window Body / Content Area */}
      <div className="xp-window-body">
        <div className="content-area">
          {children}
        </div>
      </div>

      {/* Status Bar */}
      {showStatus && (
        <div className="xp-statusbar">
          {statusText || 'Ready'}
        </div>
      )}
    </div>
  );
}

export default XPWindow;
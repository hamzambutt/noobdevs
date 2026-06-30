import { useState, useRef, useEffect } from 'react';
import './MDXWindow.css';

function MDXWindow({ 
  title = 'home.mdx', 
  onClose, 
  onMinimize, 
  isMinimized,
  children 
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Offset from initial centered position
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    // Only drag on titlebar
    if (e.target.closest('.mdx-window-control')) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Basic bounds checking (optional, but good for keeping it on screen)
      setPosition({ x: newX, y: Math.max(-100, newY) });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  if (isMinimized) return null;

  return (
    <div 
      className={`mdx-window ${isDragging ? 'dragging' : ''}`}
      ref={windowRef}
      style={{
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
      }}
    >
      {/* Title Bar - Draggable */}
      <div 
        className="mdx-titlebar"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="mdx-titlebar-left">
          <span className="mdx-icon-file">📄</span>
          <span className="mdx-titlebar-dropdown">v</span>
        </div>
        <div className="mdx-titlebar-center">
          {title} <span className="mdx-titlebar-dropdown">v</span>
        </div>
        <div className="mdx-titlebar-right">
          <span className="mdx-window-control" onClick={onMinimize}>—</span>
          <span className="mdx-window-control">□</span>
          <span className="mdx-window-control" onClick={onClose}>✕</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mdx-toolbar">
        <div className="mdx-toolbar-group">
          <button className="mdx-toolbar-btn">↺</button>
          <button className="mdx-toolbar-btn">↻</button>
        </div>
        
        <div className="mdx-toolbar-group">
          <button className="mdx-toolbar-select">Zoom <span>v</span></button>
        </div>
        
        <div className="mdx-toolbar-group">
          <button className="mdx-toolbar-btn font-bold">B</button>
          <button className="mdx-toolbar-btn italic">I</button>
          <button className="mdx-toolbar-btn underline">U</button>
        </div>
        
        <div className="mdx-toolbar-group">
          <button className="mdx-toolbar-select">Font <span>v</span></button>
        </div>
        
        <div className="mdx-toolbar-group">
          <button className="mdx-toolbar-btn align-left">≡</button>
          <button className="mdx-toolbar-btn align-center">≡</button>
          <button className="mdx-toolbar-btn align-right">≡</button>
        </div>
        
        <div className="mdx-toolbar-group">
          <button className="mdx-toolbar-btn">🔗</button>
          <button className="mdx-toolbar-btn">💬</button>
        </div>

        <div className="mdx-toolbar-spacer"></div>

        <div className="mdx-toolbar-group">
          <button className="mdx-toolbar-btn">🔍</button>
          <button className="mdx-toolbar-btn">⚙️</button>
          <a href="#pricing" className="ph-btn-cta mdx-toolbar-cta">Get started - free</a>
        </div>
      </div>

      {/* Content Area */}
      <div className="mdx-content">
        {children}
      </div>
    </div>
  );
}

export default MDXWindow;

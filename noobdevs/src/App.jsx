import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BootScreen from './components/BootScreen';
import MDXWindow from './components/MDXWindow';
import PosthogTaskbar from './components/PosthogTaskbar';
import './App.css';

function App() {
  const [phase, setPhase] = useState('boot'); // starts in boot
  const [mode, setMode] = useState(window.innerWidth < 768 ? 'website' : 'os'); // 'os' or 'website'
  
  // OS Mode Window State
  const [windows, setWindows] = useState([
    { id: 'home', title: 'home.mdx', icon: '📄', isOpen: true, isMinimized: false }
  ]);

  const handleBootComplete = () => {
    setPhase('main');
  };

  const toggleMode = () => {
    setMode(mode === 'os' ? 'website' : 'os');
  };

  const handleIconClick = (e, targetId) => {
    e.preventDefault();
    
    // Ensure home window is open
    setWindows(windows.map(w => 
      w.id === 'home' ? { ...w, isOpen: true, isMinimized: false } : w
    ));

    // Wait a tick for the window to render before scrolling
    setTimeout(() => {
      if (targetId === 'top') return;
      const element = document.getElementById(targetId);
      const container = document.querySelector('.mdx-content');
      if (element && container) {
        container.scrollTo({
          top: element.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const toggleWindow = (id) => {
    setWindows(windows.map(w => {
      if (w.id === id) {
        if (!w.isOpen) return { ...w, isOpen: true, isMinimized: false };
        if (w.isOpen && !w.isMinimized) return { ...w, isMinimized: true };
        if (w.isOpen && w.isMinimized) return { ...w, isMinimized: false };
      }
      return w;
    }));
  };

  const closeWindow = (id) => {
    setWindows(windows.map(w => w.id === id ? { ...w, isOpen: false } : w));
  };

  // 1. Boot Screen
  if (phase === 'boot') {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  // 2. Seamless Website Mode
  if (mode === 'website') {
    return (
      <div className="website-mode-container">
        <Navbar onToggleMode={toggleMode} showModeToggle={true} />
        <main className="website-main">
          <Hero />
        </main>
      </div>
    );
  }

  // 3. NoobDev OS (PostHog Desktop)
  const homeWindow = windows.find(w => w.id === 'home');

  return (
    <div className="desktop-site os-mode">
      <Navbar />

      <div className="desktop-layout">
        {/* Left Desktop Icons */}
        <aside className="desktop-sidebar desktop-sidebar-left">
          <a href="#" className="sidebar-icon" onClick={(e) => handleIconClick(e, 'top')}>
            <span className="sidebar-icon-img">📄</span>
            <span className="sidebar-icon-label">home.mdx</span>
          </a>
          <a href="#services" className="sidebar-icon" onClick={(e) => handleIconClick(e, 'services')}>
            <span className="sidebar-icon-img">📋</span>
            <span className="sidebar-icon-label">Services</span>
          </a>
          <a href="#pricing" className="sidebar-icon" onClick={(e) => handleIconClick(e, 'pricing')}>
            <span className="sidebar-icon-img">📁</span>
            <span className="sidebar-icon-label">Pricing</span>
          </a>
          <a href="#customers" className="sidebar-icon" onClick={(e) => handleIconClick(e, 'customers')}>
            <span className="sidebar-icon-img">📝</span>
            <span className="sidebar-icon-label">customers.mdx</span>
          </a>
          <a href="#demo" className="sidebar-icon" onClick={(e) => handleIconClick(e, 'demo')}>
            <span className="sidebar-icon-img">🎬</span>
            <span className="sidebar-icon-label">demo.mov</span>
          </a>
          <a href="#docs" className="sidebar-icon" onClick={(e) => handleIconClick(e, 'docs')}>
            <span className="sidebar-icon-img">📚</span>
            <span className="sidebar-icon-label">Docs</span>
          </a>
        </aside>

        {/* Main Desktop Area (where windows open) */}
        <main className="desktop-main">
          {homeWindow.isOpen && (
            <MDXWindow 
              title={homeWindow.title}
              isMinimized={homeWindow.isMinimized}
              onClose={() => closeWindow('home')}
              onMinimize={() => toggleWindow('home')}
            >
              <div id="top"></div>
              <Hero />
            </MDXWindow>
          )}
        </main>

        {/* Right Desktop Icons */}
        <aside className="desktop-sidebar desktop-sidebar-right">
          <a href="#why" className="sidebar-icon" onClick={(e) => handleIconClick(e, 'why')}>
            <span className="sidebar-icon-img">🦔</span>
            <span className="sidebar-icon-label">Why NoobDev?</span>
          </a>
          <a href="#" className="sidebar-icon">
            <span className="sidebar-icon-img">🔔</span>
            <span className="sidebar-icon-label">Changelog</span>
          </a>
          <a href="#" className="sidebar-icon">
            <span className="sidebar-icon-img">📖</span>
            <span className="sidebar-icon-label">Company handbook</span>
          </a>
          <a href="#" className="sidebar-icon">
            <span className="sidebar-icon-img">🗑️</span>
            <span className="sidebar-icon-label">Trash</span>
          </a>
        </aside>
      </div>

      <PosthogTaskbar 
        windows={windows} 
        onToggleWindow={toggleWindow}
        onToggleMode={toggleMode}
      />
    </div>
  );
}

export default App;
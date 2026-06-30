import { useState } from 'react';
import './Navbar.css';

function Navbar({ onToggleMode, showModeToggle }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const ChevronDown = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5 }}>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <nav className="ph-navbar">
      <div className="ph-navbar-content">
        <div className="ph-navbar-left">
          <a href="#" className="ph-logo">
            <span className="ph-logo-icon">N</span>
          </a>

          <ul className="ph-nav-menu">
            <li 
              className="ph-nav-item"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="ph-nav-link ph-dropdown-trigger">
                Product OS <ChevronDown />
              </span>
              {activeDropdown === 'products' && (
                <div className="ph-dropdown-menu">
                  <a href="#services" className="ph-dropdown-item">
                    <span className="ph-dropdown-icon">📱</span>
                    <div>
                      <div className="ph-dropdown-title">Mobile Apps</div>
                      <div className="ph-dropdown-desc">iOS & Android development</div>
                    </div>
                  </a>
                  {/* ... other dropdown items ... */}
                </div>
              )}
            </li>

            <li className="ph-nav-item">
              <a href="#pricing" className="ph-nav-link">Pricing</a>
            </li>

            <li className="ph-nav-item">
              <a href="#docs" className="ph-nav-link">Docs</a>
            </li>

            <li 
              className="ph-nav-item"
              onMouseEnter={() => handleMouseEnter('community')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="ph-nav-link ph-dropdown-trigger">
                Community <ChevronDown />
              </span>
              {/* Dropdown content */}
            </li>
            
            <li className="ph-nav-item">
              <a href="#company" className="ph-nav-link">Company</a>
            </li>
            
            <li className="ph-nav-item">
              <a href="#more" className="ph-nav-link">More</a>
            </li>
          </ul>
        </div>

        <div className="ph-navbar-right">
          <a href="#cta" className="ph-btn-cta">
            Get started - free
          </a>
          {showModeToggle && (
            <span className="ph-navbar-icon" title="Switch to OS Mode" onClick={onToggleMode} style={{cursor: 'pointer'}}>
              🪟
            </span>
          )}
          <span className="ph-navbar-icon">🔍</span>
          <span className="ph-navbar-icon">🔔</span>
          <span className="ph-navbar-icon" style={{border: '1px solid #ccc', borderRadius: '4px', height: '24px', width: '24px', fontSize: '0.8rem'}}>1</span>
          <span className="ph-navbar-icon">👤</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
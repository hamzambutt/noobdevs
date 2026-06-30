import { useState } from 'react';
import './MobileApps.css';

function MobileApps() {
  const [selectedApp, setSelectedApp] = useState(0);

  const apps = [
    {
      name: 'Orbit',
      icon: '🛰️',
      description: 'Decentralized tactical communication with zero-trust architecture.',
      features: [
        'End-to-end encrypted messaging',
        'Voice & video calls',
        'Group channels',
        'File sharing (AES-256)',
        'Offline mesh networking',
        'Cross-platform sync'
      ],
      tech: ['Kotlin', 'Matrix Protocol', 'Jetpack Compose'],
      screenshots: ['chat', 'calls', 'groups']
    },
    {
      name: 'Waffle Command',
      icon: '🚁',
      description: 'Real-time drone fleet coordination and mission control.',
      features: [
        'Live drone telemetry',
        'Mission planning interface',
        'Camera feed (RGB/Lidar/Depth)',
        'Battery & status monitoring',
        'Auto-pilot controls',
        'Fleet management'
      ],
      tech: ['Kotlin Multiplatform', 'ROS2', 'gRPC'],
      screenshots: ['telemetry', 'missions', 'fleet']
    },
    {
      name: 'IntelHub Mobile',
      icon: '🔍',
      description: 'Full OSINT intelligence platform in your pocket.',
      features: [
        'Email/phone/CNIC lookups',
        'Social media scanning',
        'Username cross-reference',
        'Data export (JSON/PDF)',
        'Saved investigations',
        'Real-time scraping'
      ],
      tech: ['Kotlin', 'FastAPI Client', 'Room DB'],
      screenshots: ['search', 'results', 'profile']
    }
  ];

  const selectedAppData = apps[selectedApp];

  return (
    <section className="mobile-apps" id="mobile">
      <div className="apps-container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label label-android-green">MOBILITY</span>
          <h2>ANDROID APPLICATIONS</h2>
          <p>Native Android apps built with modern architecture. Clean, fast, and secure.</p>
        </div>

        {/* Main Content */}
        <div className="apps-content reveal">
          {/* App List (Left Side) */}
          <div className="app-list-panel">
            <h3>SELECT APP</h3>
            <div className="app-grid">
              {apps.map((app, index) => (
                <button
                  key={index}
                  className={`app-card ${selectedApp === index ? 'active' : ''}`}
                  onClick={() => setSelectedApp(index)}
                >
                  <span className="app-icon-large">{app.icon}</span>
                  <span className="app-name">{app.name}</span>
                  <span className="app-status">
                    {index === 2 ? 'BETA' : 'LIVE'}
                  </span>
                </button>
              ))}
            </div>

            {/* App Details */}
            <div className="app-details">
              <h4>ABOUT {selectedAppData.name}</h4>
              <p className="app-description">{selectedAppData.description}</p>
              
              <div className="features-list">
                <h5>KEY FEATURES</h5>
                <ul>
                  {selectedAppData.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack-mobile">
                <h5>TECHNOLOGY</h5>
                <div className="tech-tags">
                  {selectedAppData.tech.map(t => (
                    <span key={t} className="tech-tag-android">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup (Right Side) */}
          <div className="phone-mockup">
            <div className="phone-frame">
              {/* Notch */}
              <div className="phone-notch"></div>
              
              {/* Status Bar */}
              <div className="phone-status-bar">
                <span className="time">12:00</span>
                <div className="status-icons">
                  <span className="signal-icon">📶</span>
                  <span className="wifi-icon">📡</span>
                  <span className="battery-icon">🔋</span>
                </div>
              </div>

              {/* App Header */}
              <div className="app-header-mob">
                <button className="back-btn">←</button>
                <h2>{selectedAppData.name}</h2>
                <span className="menu-dots">⋮</span>
              </div>

              {/* Phone Screen Content */}
              <div className="phone-screen">
                {/* Welcome Banner */}
                <div className="welcome-banner">
                  <div className="banner-icon">{selectedAppData.icon}</div>
                  <div className="banner-text">
                    <h3>Welcome to {selectedAppData.name}</h3>
                    <p>{selectedAppData.description.substring(0, 60)}...</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                  {[0, 1, 2].map(i => (
                    <button key={i} className="action-btn">
                      <span className="action-icon">{['📊', '🔍', '⚙️'][i]}</span>
                      <span>{['Dashboard', 'Search', 'Settings'][i]}</span>
                    </button>
                  ))}
                </div>

                {/* Content Cards */}
                <div className="content-cards">
                  <div className="card-header">
                    <h4>Recent Activity</h4>
                    <span className="view-all">View All →</span>
                  </div>
                  
                  {[0, 1, 2].map(i => (
                    <div key={i} className="activity-card">
                      <div className="card-icon" style={{background: ['rgba(61,220,132,0.1)', 'rgba(66,133,244,0.1)', 'rgba(251,188,4,0.1)'][i]}}>
                        {['📧', '👤', '🌐'][i]}
                      </div>
                      <div className="card-content">
                        <h5>{['Email Lookup', 'Username Search', 'Social Scan'][i]}</h5>
                        <p>Completed {i + 1}m ago</p>
                      </div>
                      <span className={`status-pill ${i === 0 ? 'success' : i === 1 ? 'pending' : 'info'}`}>
                        {['Done', 'Pending', 'Running'][i]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Navigation */}
                <div className="bottom-nav">
                  <button className="nav-item active">
                    <span>🏠</span>
                    <span>Home</span>
                  </button>
                  <button className="nav-item">
                    <span>📊</span>
                    <span>Stats</span>
                  </button>
                  <button className="nav-item">
                    <span>🔔</span>
                    <span>Alerts</span>
                  </button>
                  <button className="nav-item">
                    <span>👤</span>
                    <span>Profile</span>
                  </button>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="home-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApps;
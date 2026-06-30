import './SiteContent.css';

function SiteContent() {
  const projects = [
    {
      id: 'waffle',
      icon: '🚁',
      title: 'W.A.F.F.L.E.',
      subtitle: 'Wireless Autonomous Flying Fleet for Life Emergencies',
      classification: 'Drone Systems',
      status: 'Active',
      description: 'A resilient drone swarm system engineered for rapid disaster management and critical payload delivery in zero-connectivity zones. Coordinates autonomous navigation, real-time terrain mapping, and precision payload deployment across distributed fleet operations.',
      specs: [
        { label: 'Range', value: '50km Radius' },
        { label: 'Fleet Size', value: '12 Units' },
        { label: 'Payload', value: 'Med / Comm / Thermal' }
      ],
      tech: ['Python', 'ROS2', 'PX4', 'C++', 'Computer Vision', 'LTE-M']
    },
    {
      id: 'orbit',
      icon: '🛰️',
      title: 'Orbit',
      subtitle: 'Decentralized Tactical Communication Network',
      classification: 'Secure Comms',
      status: 'Active',
      description: 'A hardened, cross-platform communication node built on the Matrix protocol. Zero-trust architecture with end-to-end encryption across Android and Desktop environments for operations where connectivity is intermittent and data integrity is non-negotiable.',
      specs: [
        { label: 'Encryption', value: 'AES-256-GCM' },
        { label: 'Security', value: 'Zero-Trust' },
        { label: 'Platforms', value: 'Android + Desktop' }
      ],
      tech: ['Matrix Protocol', 'React', 'Vite', 'FastAPI', 'PostgreSQL', 'Node.js']
    },
    {
      id: 'intelhub',
      icon: '🔍',
      title: 'IntelHub',
      subtitle: 'OSINT Investigation Platform',
      classification: 'Data Intelligence',
      status: 'Live',
      description: 'Full-stack intelligence gathering platform with command palette (Ctrl+K), multi-source data fusion, Pakistan database integration, and OSINT tools for email/phone/username/CNIC lookups. Features X/Twitter, TikTok & Facebook scraping panels.',
      specs: [
        { label: 'Modules', value: '8+ Lookup Tools' },
        { label: 'Databases', value: 'PA + Global' },
        { label: 'Feature', value: 'Ctrl+K Palette' }
      ],
      tech: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'Express.js', 'Maigret']
    },
    {
      id: 'wafflesim',
      icon: '🗺️',
      title: 'WaffleSim Map',
      subtitle: 'High-Fidelity Drone Simulation World',
      classification: 'Simulation',
      status: 'Active',
      description: 'A high-fidelity drone/vehicle simulation world bridging AirSim with real-world 3D geospatial data via Cesium for Unreal. Includes pre-configured environments, Lidar/RGB/depth cameras, and Python API for deep learning and reinforcement training.',
      specs: [
        { label: 'Engine', value: 'Unreal 5.7' },
        { label: 'Integration', value: 'Cesium + AirSim' },
        { label: 'Sensors', value: 'Lidar / RGB / Depth' }
      ],
      tech: ['Unreal Engine', 'C++', 'AirSim', 'Cesium', 'Python API', 'ROS2']
    },
    {
      id: 'mobile',
      icon: '📱',
      title: 'Mobile Applications',
      subtitle: 'Native Android & Cross-Platform Solutions',
      classification: 'Mobile Development',
      status: 'In Progress',
      description: 'Native Android apps built with Kotlin Multiplatform and Jetpack Compose. Clean UI, smooth animations, Firebase-backed backend — from productivity tools to social applications that deliver exceptional user experience.',
      specs: [
        { label: 'Framework', value: 'Kotlin Multiplatform' },
        { label: 'UI Layer', value: 'Jetpack Compose' },
        { label: 'Backend', value: 'Firebase / Custom API' }
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'KMP', 'Firebase', 'Coroutines', 'Hilt']
    }
  ];

  return (
    <div className="site-content">
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <div className="brand">
            <h1>NOOBDEVS</h1>
            <span className="tagline">Engineering Tomorrow's Systems Today</span>
          </div>
          <nav className="main-nav">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h2>We Build Systems That <span className="highlight">Matter</span></h2>
          <p className="hero-subtitle">
            From autonomous drone swarms to secure communication networks — 
            we engineer cutting-edge solutions for the most demanding environments.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Active Systems</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Mission Critical</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Our Projects</h2>
            <p>Each system is designed, built, and operated to the highest standards of reliability and performance.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-meta">
                    <span className="project-classification">{project.classification}</span>
                    <span className={`status-badge status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-specs">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="spec-box">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Noobdevs</h2>
              <p>
                We are a team of engineers, developers, and systems architects who specialize in 
                building mission-critical technology. From autonomous drone systems to secure 
                communication networks, our work spans the full spectrum of modern technology.
              </p>
              <p>
                Every project we build is designed with reliability, scalability, and performance 
                at its core. We don't just write code — we engineer complete systems that operate 
                in the real world, under real conditions, delivering real results.
              </p>
              <div className="about-values">
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <h4>Precision</h4>
                  <p>Clean architecture, tested code, reliable systems.</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">🔒</span>
                  <h4>Security First</h4>
                  <p>End-to-end encryption, zero-trust by default.</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">⚡</span>
                  <h4>Performance</h4>
                  <p>Built for speed, designed to scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-content">
            <h2>Get In Touch</h2>
            <p>Ready to discuss your next project? We'd love to hear from you.</p>
            <div className="contact-links">
              <a href="mailto:hello@noobdevs.io" className="contact-card">
                <span className="contact-icon">📧</span>
                <h4>Email</h4>
                <p>hello@noobdevs.io</p>
              </a>
              <a href="#" className="contact-card">
                <span className="contact-icon">💼</span>
                <h4>LinkedIn</h4>
                <p>Noobdevs Technologies</p>
              </a>
              <a href="#" className="contact-card">
                <span className="contact-icon">🐙</span>
                <h4>GitHub</h4>
                <p>@noobdevs</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 Noobdevs Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default SiteContent;
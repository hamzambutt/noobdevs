import './CoreProjects.css';

function CoreProjects() {
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
    <section className="core-projects section-padding" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label label-emerald">Our Work</span>
          <h2>Featured Projects</h2>
          <p>A selection of systems we have designed, built, and continue to operate at scale. Each one delivers measurable impact.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card reveal">
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-meta">
                  <span className="project-classification">{project.classification}</span>
                  <span className={`status-indicator status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
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
  );
}

export default CoreProjects;
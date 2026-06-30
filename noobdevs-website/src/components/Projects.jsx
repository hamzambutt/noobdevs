import './Projects.css';

const projects = [
  {
    icon: '📡',
    name: 'OSINT News Scraper',
    category: 'Automated Intelligence Pipeline',
    description: 'Multi-platform OSINT scraper monitoring X, Telegram, and news feeds. Uses AI for intelligent filtering and automated report generation with formatted intelligence dispatch.',
    tech: ['Python', 'Playwright', 'Grok API', 'Ollama', 'WhatsApp API']
  },
  {
    icon: '🔍',
    name: 'IntelHub Platform',
    category: 'Full-Stack Intelligence System',
    description: 'Comprehensive intelligence gathering platform with multi-source data fusion, Pakistan database integration, and OSINT tools for email/phone/username lookups.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Express.js', 'Maigret']
  },
  {
    icon: '🚁',
    name: 'WaffleSim Environment',
    category: 'Drone Simulation Platform',
    description: 'High-fidelity drone simulation bridging AirSim with real-world 3D geospatial data via Cesium. Includes Lidar/RGB/depth cameras and Python API for deep learning.',
    tech: ['Unreal Engine 5.7', 'C++', 'AirSim', 'Cesium', 'ROS2']
  },
  {
    icon: '🎮',
    name: 'Interactive Simulations',
    category: 'Game Development & Simulation',
    description: 'Full-cycle game development from concept to deployment. 2D/3D games, interactive experiences, and real-time simulation environments built with modern engines.',
    tech: ['Unity', 'Unreal Engine', 'C#', 'Blueprints', 'Multiplayer Netcode']
  }
];

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Featured Projects</span>
          <h2>Selected Work</h2>
          <p>A snapshot of the production systems we have engineered for clients and internal platforms.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card reveal" style={{ '--accent-color': ['#1E3A5F', '#2563EB', '#059669', '#B8860B'][index] }}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.name}</h3>
              <span className="project-category">{project.category}</span>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
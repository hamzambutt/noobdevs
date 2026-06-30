import './Services.css';

const services = [
  {
    icon: '📡',
    title: 'OSINT & Data Pipelines',
    description: 'End-to-end open-source intelligence pipelines — from data ingestion and aggregation to processing, analysis, and visualization dashboards.',
    color: '#1E3A5F'
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Custom AI models for NLP, computer vision, predictive analytics, and generative AI. From research to production deployment.',
    color: '#2563EB'
  },
  {
    icon: '🚁',
    title: 'Autonomous Drone Systems',
    description: 'Custom drone firmware, flight control systems, computer vision for aerial data, and autonomous mission planning software.',
    color: '#059669'
  },
  {
    icon: '🎮',
    title: 'Game Development',
    description: 'Full-cycle game development from concept to deployment. 2D/3D games, interactive experiences, and real-time simulation environments built with modern engines.',
    color: '#B8860B'
  },
  {
    icon: '🌐',
    title: 'Web Applications',
    description: 'Production-grade web apps with modern tech stacks, scalable architecture, and CI/CD pipelines. React, Next.js, Node — built for scale.',
    color: '#1E3A5F'
  },
  {
    icon: '📱',
    title: 'Mobile Applications',
    description: 'Native Android and cross-platform mobile applications built with Kotlin Multiplatform, Jetpack Compose, and modern mobile architectures.',
    color: '#059669'
  }
];

function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Services</span>
          <h2>What We Deliver</h2>
          <p>Six core disciplines, each staffed by dedicated specialists. Every engagement receives the same commitment to engineering excellence.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal" style={{ '--accent-color': service.color }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
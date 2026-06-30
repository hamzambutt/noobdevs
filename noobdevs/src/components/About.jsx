import './About.css';

function About() {
  const features = [
    { icon: '⚡', title: 'Rapid Delivery', desc: 'Sprint-based development with weekly demos. Your project status is always transparent and up to date.' },
    { icon: '🎯', title: 'Competitive Pricing', desc: 'Direct engineering without agency markup. Enterprise-quality output at rates that respect your budget.' },
    { icon: '🔒', title: 'NDA & IP Protection', desc: 'All projects covered by NDA. You own 100% of the code, models, and documentation we deliver.' },
    { icon: '📊', title: 'Production-Ready Code', desc: 'Clean architecture, comprehensive tests, CI/CD pipelines, and full documentation with every delivery.' },
  ];

  const stats = [
    { value: '7', label: 'Senior Engineers' },
    { value: '5', label: 'Core Disciplines' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '100%', label: 'IP Ownership' }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <span className="section-label">About Us</span>
            <h2>Seven engineers. Zero middlemen.<br />Direct engineering excellence.</h2>
            <p>We're not a traditional agency with layers of project managers and junior developers. We're seven senior engineers who each own their domain — delivering work that ships on time, every time.</p>

            <div className="about-features">
              {features.map((feature, i) => (
                <div key={i} className="about-feature">
                  <div className="about-feature-icon">{feature.icon}</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual reveal">
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
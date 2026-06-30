import './Hero.css';

function Hero() {
  return (
    <div className="ph-hero">
      {/* Headline */}
      <h1 className="ph-hero-headline">
        The new way to build products
      </h1>

      {/* Subtitle */}
      <p className="ph-hero-subtitle">
        Product development used to mean manually writing code, running analysis, diagnosing bugs, 
        and rolling out changes using dozens of tools. NoobDev is the only agency that acts like a 
        co-pilot for you (and your AI agents) to do it all – autonomously.
      </p>

      {/* CTA Buttons */}
      <div className="ph-hero-cta-group">
        <a href="#pricing" className="ph-btn-primary">
          Get started - free
        </a>
        <a href="#about" className="ph-btn-secondary">
          Talk to a human
        </a>
      </div>

      {/* Install Command */}
      <div className="ph-install-command">
        <div className="ph-install-header">
          <span className="ph-install-title">Get started</span>
          <a href="#" className="ph-install-link">Sign up via web ↗</a>
        </div>
        <code className="ph-install-code">npx create-noobdev@latest</code>
        <p className="ph-install-supports">
          Supports React, Next.js, Python, and more
        </p>

        {/* Additional Links */}
        <div className="ph-hero-extra-links">
          <a href="#projects" className="ph-extra-link">📦 Projects</a>
          <span className="ph-extra-separator">•</span>
          <a href="#about" className="ph-extra-link">▶ Watch a demo</a>
          <span className="ph-extra-separator">•</span>
          <a href="#cta" className="ph-extra-link">💬 Talk to us</a>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="ph-hero-categories">
        <div className="ph-category-header">
          <h2 className="ph-category-title-main">Understand product usage</h2>
          <p className="ph-category-subtitle">One place for product data</p>
        </div>

        <div className="ph-category-grid">
          <div className="ph-category-block ph-category-debug">
            <span className="ph-category-emoji">🐛</span>
            <h3>Debug & fix issues</h3>
          </div>
          <div className="ph-category-block ph-category-test">
            <span className="ph-category-emoji">🧪</span>
            <h3>Test & roll out changes</h3>
          </div>
        </div>
      </div>

      {/* Data Stack Section */}
      <div className="ph-data-stack" id="services">
        <h2 className="ph-data-stack-title">Build better products with better data</h2>
        
        <p className="ph-data-stack-description">
          Not your mama's development agency. We bring all your product data in one place and 
          deliver solutions that live as a first-class citizen. This means you can make more informed decisions.
        </p>

        <div className="ph-categories-grid">
          {/* Data I/O */}
          <div className="ph-category">
            <h4 className="ph-category-title">DATA I/0</h4>
            <div className="ph-category-items">
              <span className="ph-category-item">📥 Data sources & import (ELT)</span>
              <span className="ph-category-item">↗️ Reverse ETL & export</span>
              <a href="#services" className="ph-category-link">View all integrations →</a>
            </div>
          </div>

          {/* Manage & Query */}
          <div className="ph-category">
            <h4 className="ph-category-title">MANAGE & QUERY</h4>
            <div className="ph-category-items">
              <span className="ph-category-item">📊 Data modeling</span>
              <span className="ph-category-item">🗄️ Managed warehouse</span>
              <span className="ph-category-item">🔄 CDP</span>
              <span className="ph-category-item">🔍 SQL editor</span>
              <span className="ph-category-item">📈 BI</span>
            </div>
          </div>

          {/* Automatic Tooling */}
          <div className="ph-category">
            <h4 className="ph-category-title">AUTOMATIC TOOLING</h4>
            <div className="ph-category-items">
              <p className="ph-category-description">
                In a previous era of building products, you'd need to configure everything manually. 
                Now, your AI coding agent can use the NoobDev platform to build without leaving your ADE.
              </p>
            </div>
          </div>

          {/* Understand Product Usage */}
          <div className="ph-category">
            <h4 className="ph-category-title">UNDERSTAND PRODUCT USAGE</h4>
            <div className="ph-category-items">
              <span className="ph-category-item">🌐 Web Analytics</span>
              <span className="ph-category-item">📊 Product Analytics</span>
              <span className="ph-category-item">📈 Graphs & trends</span>
              <span className="ph-category-item">🔻 Funnels</span>
              <span className="ph-category-item">👤 User Paths</span>
            </div>
          </div>

          {/* Debug & Fix Issues */}
          <div className="ph-category">
            <h4 className="ph-category-title">DEBUG & FIX ISSUES</h4>
            <div className="ph-category-items">
              <span className="ph-category-item">🐛 Error Tracking</span>
              <span className="ph-category-item">📝 Logs</span>
              <span className="ph-category-item">🎬 Session Replay</span>
              <span className="ph-category-item">📅 Activity timeline</span>
            </div>
          </div>

          {/* Ship Features */}
          <div className="ph-category">
            <h4 className="ph-category-title">SHIP & GET FEEDBACK</h4>
            <div className="ph-category-items">
              <span className="ph-category-item">🚀 Feature Flags</span>
              <span className="ph-category-item">🧪 Experiments</span>
              <span className="ph-category-item">📋 No-code A/B Testing</span>
              <span className="ph-category-item">💬 Surveys</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="ph-social-proof" id="customers">
        <h2 className="ph-social-heading">Who's using NoobDev?</h2>
        <p className="ph-social-description">
          Here are some of our clients. (Yes they actually use us, no it's not just some random 
          engineer who tried us out 2+ years ago.)
        </p>

        {/* Customer Logos Grid */}
        <div className="ph-customers-grid">
          <div className="ph-customer-logo">Y Combinator</div>
          <div className="ph-customer-logo">Mistral AI</div>
          <div className="ph-customer-logo">Supabase</div>
          <div className="ph-customer-logo">ElevenLabs</div>
          <div className="ph-customer-logo">Lovable</div>
          <div className="ph-customer-logo">Raycast</div>
          <div className="ph-customer-logo">Airbus</div>
          <div className="ph-customer-logo">Arena</div>
        </div>

        {/* Customer Table */}
        <table className="ph-customers-table">
          <thead>
            <tr>
              <th></th>
              <th>Company name</th>
              <th>Services used</th>
              <th>Case study</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><span className="ph-customer-name">Combinator</span></td>
              <td>Experiments, Product Analytics</td>
              <td><a href="#" className="ph-case-study-link">Link ↗</a></td>
              <td>World's premier startup accelerator</td>
            </tr>
            <tr>
              <td>2</td>
              <td><span className="ph-customer-name">Mistral AI</span></td>
              <td>AI Solutions, Web Development</td>
              <td>-</td>
              <td>Open source LLMs</td>
            </tr>
            <tr>
              <td>3</td>
              <td><span className="ph-customer-name">Supabase</span></td>
              <td>AI Solutions, Experiments, Product Analytics</td>
              <td><a href="#" className="ph-case-study-link">Link ↗</a></td>
              <td>Postgres in the cloud</td>
            </tr>
          </tbody>
        </table>

        {/* Why Section */}
        <div className="ph-why-section" id="why">
          <h2 className="ph-why-title-main">Why NoobDev?</h2>
          <p className="ph-why-description-main">
            We're different from most agencies for a bunch of reasons:
          </p>

          <div className="ph-why-grid">
            <div className="ph-why-item">
              <h3 className="ph-why-title">Transparency</h3>
              <p className="ph-why-description">You can read our company handbook, sales manual, and company strategy.</p>
            </div>
            <div className="ph-why-item">
              <h3 className="ph-why-title">We ship fast</h3>
              <p className="ph-why-description">See our changelog and delivery timeline.</p>
            </div>
            <div className="ph-why-item">
              <h3 className="ph-why-title">Actually-technical support</h3>
              <p className="ph-why-description">All our support folks have engineering backgrounds.</p>
            </div>
          </div>
        </div>

        {/* CTA / Pricing Section */}
        <div className="ph-cta-section" id="pricing">
          <h2 className="ph-cta-title">Give NoobDev a try</h2>
          <p className="ph-cta-description">
            No need to pick a plan - try our free version and decide if you want advanced features later!
          </p>
          <a href="#pricing" className="ph-btn-primary ph-btn-large">
            Get started - free
          </a>
        </div>

        {/* Footer */}
        <footer className="ph-footer">
          <div className="ph-footer-content">
            <div className="ph-footer-left">
              <span>© 2026 NoobDev</span>
              <span className="ph-status-indicator">
                <span className="ph-status-dot"></span>
                All systems operational
              </span>
            </div>
            <div className="ph-footer-right">
              <a href="#" className="ph-footer-link">Terms</a>
              <a href="#" className="ph-footer-link">Privacy</a>
              <a href="#" className="ph-footer-link">DPA</a>
              <a href="#" className="ph-footer-link">SOC 2</a>
              <a href="#" className="ph-footer-link">HIPAA</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Hero;
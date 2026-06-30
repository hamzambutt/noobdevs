import './CTA.css';

function CTA() {
  return (
    <section className="cta-section section-padding" id="contact">
      <div className="container">
        <div className="cta-content reveal">
          <span className="section-label">Get in Touch</span>
          <h2>Let's Build Something Together</h2>
          <p>Tell us about your project requirements. Our engineering team responds within 24 hours with a detailed technical proposal and transparent pricing.</p>

          <div className="cta-form-wrapper">
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Smith" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@company.com" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" placeholder="Tell us about your project, timeline, and any specific requirements..." className="form-textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-xl">
                Send Inquiry
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 8 }}>
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>

          <div className="cta-contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>contact@noobdevs.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <span>LinkedIn /company/noobdevs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
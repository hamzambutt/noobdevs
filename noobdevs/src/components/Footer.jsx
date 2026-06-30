import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Terminal-style Header */}
        <div className="footer-terminal-header reveal">
          <div className="terminal-controls">
            <span className="control-btn close"></span>
            <span className="control-btn minimize"></span>
            <span className="control-btn maximize"></span>
          </div>
          <div className="terminal-titlebar">
            <span className="title-icon">⌁</span>
            footer@noobdevs:~
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-col brand-col reveal">
            <div className="footer-logo">
              <span className="logo-prompt">$</span>
              <span className="logo-text">NOOBDEVS</span>
            </div>
            <p className="brand-desc">
              Engineering excellence through intelligent systems.<br />
              OSINT • AI • Drones • Mobile Apps
            </p>
            <div className="social-links">
              <a href="#" className="social-link">GITHUB</a>
              <a href="#" className="social-link">LINKEDIN</a>
              <a href="#" className="social-link">TWITTER</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-cols reveal">
            <div className="footer-col">
              <h4>PIPEDI$</h4>
              <ul>
                <li><a href="#osint">OSINT Pipeline</a></li>
                <li><a href="#">Data Fusion</a></li>
                <li><a href="#">API Docs</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>APPS</h4>
              <ul>
                <li><a href="#mobile">Mobile Apps</a></li>
                <li><a href="#">Orbit Comms</a></li>
                <li><a href="#">Waffle Cmd</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-status">
            <span className="status-dot"></span>
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
          <p className="copyright">© {year} NOOBDEVS — Mission-Critical Operations</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
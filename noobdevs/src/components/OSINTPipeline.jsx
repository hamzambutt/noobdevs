import { useState, useEffect, useRef } from 'react';
import './OSINTPipeline.css';

function OSINTPipeline() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [commandInput, setCommandInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef(null);

  const pipelineInfo = {
    overview: `
╔══════════════════════════════════════════════════════════╗
║           INTELHUB OSINT PIPELINES v4.2.1               ║
║           Status: ACTIVE | Uptime: 99.97%                ║
╚══════════════════════════════════════════════════════════╝

  Modules Loaded:
  ├── [✓] email_enum    - Email enumeration engine
  ├── [✓] phone_lookup  - Phone/CNIC database search  
  ├── [✓] social_scan   - Social media scraping (X/TikTok/FB)
  ├── [✓] username_trl  - Cross-platform username search
  ├── [✓] cnic_verify   - Pakistani CNIC validation
  └── [✓] data_fusion   - Multi-source data correlation

  Databases Connected:
  ├── PA-DB (Pakistani Database) - 240M+ records
  ├── Global-Index - International records
  └── Social-API - Real-time social scraping

  Pipeline Status: ALL SYSTEMS OPERATIONAL`,

    modules: `
╔══════════════════════════════════════════════════════════╗
║                    MODULE DETAIL                          ║
╚══════════════════════════════════════════════════════════╝

  $ cat /opt/intelhub/modules/README.md
  
  ┌─────────────────────────────────────────────────────────┐
  │ MODULE: email_enum                                      │
  │ STATUS: ACTIVE                                          │
  │ ENDPOINTS: 12                                           │
  │ RATE LIMIT: 100 req/min                                 │
  │ LAST UPDATED: 2024-01-15                                │
  └─────────────────────────────────────────────────────────┘
  
  $ cat /opt/intelhub/modules/phone_lookup.conf
  
  ┌─────────────────────────────────────────────────────────┐
  │ MODULE: phone_lookup                                    │
  │ STATUS: ACTIVE                                          │
  │ COVERAGE: PK, US, UK, AE                               │
  │ DATABASES: 3 connected                                  │
  │ AVERAGE RESPONSE: 240ms                                 │
  └─────────────────────────────────────────────────────────┘

  $ cat /opt/intelhub/modules/social_scan.yaml
  
  ┌─────────────────────────────────────────────────────────┐
  │ MODULE: social_scan                                     │
  │ STATUS: ACTIVE                                          │
  │ PLATFORMS: X(Twitter), TikTok, Facebook, Instagram     │
  │ SCRAPING MODE: Headless Chrome                         │
  │ ANTI-DETECT: ENABLED                                    │
  └─────────────────────────────────────────────────────────┘`,

    commands: `
╔══════════════════════════════════════════════════════════╗
║              AVAILABLE COMMANDS                          ║
╚══════════════════════════════════════════════════════════╝

  $ intelhub --help
  
  USAGE:
    intelhub <command> [options]

  COMMANDS:
    search <type> <query>     Start a new search
      Types: email, phone, username, cnic, domain
    
    list                      List all active modules
    status                    Check pipeline status
    stats                     Show usage statistics
    config                    View current configuration
    logs                      View pipeline logs
    clear                     Clear terminal

  EXAMPLES:
    $ intelhub search email user@example.com
    $ intelhub search phone +923001234567
    $ intelhub search username johndoe
    $ intelhub status`,

    stats: `
╔══════════════════════════════════════════════════════════╗
║                   PIPELINE STATS                         ║
╚══════════════════════════════════════════════════════════╝

  ┌─────────────────────────────────────────────────────────┐
  │  METRIC              │ VALUE                             │
  ├─────────────────────────────────────────────────────────┤
  │  Total Queries       │ 14,892,347                        │
  │  Today's Queries     │ 23,847                            │
  │  Success Rate        │ 99.97%                           │
  │  Avg Response Time   │ 186ms                             │
  │  Active Sessions     │ 142                              │
  │  Data Points         │ 847M+ records                     │
  └─────────────────────────────────────────────────────────┘

  $ tail -n 5 /var/log/intelhub/queries.log
  
  [2024-01-20 14:32:01] INFO  query_id=8f3a2c type=email status=SUCCESS duration=142ms
  [2024-01-20 14:32:02] INFO  query_id=8f3a2d type=phone status=SUCCESS duration=267ms  
  [2024-01-20 14:32:03] INFO  query_id=8f3a2e type=username status=SUCCESS duration=89ms
  [2024-01-20 14:32:04] WARN  query_id=8f3a2f type=email status=RATE_LIMIT retrying...
  [2024-01-20 14:32:05] INFO  query_id=8f3a30 type=cnic status=SUCCESS duration=312ms`
  };

  const commandHistory = [];
  let historyIndex = -1;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === 'help') {
      setTerminalHistory(prev => [...prev, 
        { text: `$ ${cmd}`, type: 'input' },
        { text: pipelineInfo.commands.split('$ intelhub --help')[1] || '', type: 'output' }
      ]);
    } else if (trimmed === 'status') {
      setTerminalHistory(prev => [...prev,
        { text: `$ ${cmd}`, type: 'input' },
        { text: pipelineInfo.overview.split('Pipeline Status:')[1] || '', type: 'output' }
      ]);
    } else if (trimmed === 'list') {
      setTerminalHistory(prev => [...prev,
        { text: `$ ${cmd}`, type: 'input' },
        { text: 'Modules: email_enum | phone_lookup | social_scan | username_trl | cnic_verify | data_fusion', type: 'output' }
      ]);
    } else if (trimmed === 'stats') {
      setTerminalHistory(prev => [...prev,
        { text: `$ ${cmd}`, type: 'input' },
        { text: pipelineInfo.stats.split('$ tail')[0].trim(), type: 'output' }
      ]);
    } else if (trimmed === 'config') {
      setTerminalHistory(prev => [...prev,
        { text: `$ ${cmd}`, type: 'input' },
        { text: 'Configuration loaded from /etc/intelhub/config.yml\nAll defaults active. Custom overrides: none.', type: 'output' }
      ]);
    } else if (trimmed === 'logs') {
      setTerminalHistory(prev => [...prev,
        { text: `$ ${cmd}`, type: 'input' },
        { text: pipelineInfo.stats.split('$ tail')[1] || '', type: 'output' }
      ]);
    } else if (trimmed === 'clear') {
      setTerminalHistory([]);
    } else if (trimmed.startsWith('search')) {
      const parts = trimmed.split(' ');
      if (parts.length < 3) {
        setTerminalHistory(prev => [...prev,
          { text: `$ ${cmd}`, type: 'input' },
          { text: 'Usage: intelhub search <email|phone|username|cnic> <query>', type: 'error' }
        ]);
      } else {
        const [_, type, query] = parts;
        setTerminalHistory(prev => [...prev,
          { text: `$ ${cmd}`, type: 'input' },
          { text: `Starting search for ${type}: "${query}"...`, type: 'info' },
          { text: `[${new Date().toISOString()}] Query submitted to pipeline`, type: 'success' },
          { text: `Results will appear in your dashboard.`, type: 'output' }
        ]);
      }
    } else if (trimmed !== '') {
      setTerminalHistory(prev => [...prev,
        { text: `$ ${cmd}`, type: 'input' },
        { text: `Command not found: ${trimmed}. Type "help" for available commands.`, type: 'error' }
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(commandInput);
      setCommandInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        historyIndex++;
        setCommandInput(commandHistory[commandHistory.length - 1 - historyIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        setCommandInput(commandHistory[commandHistory.length - 1 - historyIndex]);
      } else {
        historyIndex = -1;
        setCommandInput('');
      }
    }
  };

  const tabs = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'modules', label: 'MODULES' },
    { id: 'commands', label: 'COMMANDS' },
    { id: 'stats', label: 'STATS' }
  ];

  return (
    <section className="osint-pipeline" id="osint">
      <div className="pipeline-container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-label label-green">INTELHUB</span>
          <h2>OSINT PIPELINE</h2>
          <p>Interactive command-line interface for intelligence gathering and data fusion.</p>
        </div>

        {/* Pipeline Interface */}
        <div className="pipeline-interface reveal">
          {/* Left Panel - Terminal */}
          <div className="pipeline-terminal">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-btn close"></span>
                <span className="control-btn minimize"></span>
                <span className="control-btn maximize"></span>
              </div>
              <div className="terminal-titlebar">
                <span className="title-icon">⌁</span>
                intelhub@pipeline:~
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="tab-navigation">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Terminal Output */}
            <div className="terminal-output" ref={terminalRef}>
              {terminalHistory.length === 0 && (
                <div className="welcome-message">
                  <p className="header-text">┌──(intelhub㉿pipeline)-[~]</p>
                  <p className="header-text">└─$ cat /opt/intelhub/{activeTab}.txt</p>
                  <br />
                  {activeTab === 'overview' && (
                    <>
                      <p className="info-text">Welcome to IntelHub OSINT Pipeline v4.2.1</p>
                      <p className="info-text">Type "help" for available commands.</p>
                      <p className="info-text">Use the tabs above to browse pipeline info.</p>
                    </>
                  )}
                  {activeTab === 'modules' && (
                    <>
                      <p className="header-text">MODULES BROWSER</p>
                      <p className="info-text">Browse all available OSINT modules and their configurations.</p>
                      <p className="info-text">Type "list" to see all loaded modules.</p>
                    </>
                  )}
                  {activeTab === 'commands' && (
                    <>
                      <p className="header-text">COMMAND REFERENCE</p>
                      <p className="info-text">View all available commands and their usage.</p>
                      <p className="info-text">Type "help" to see the full command list.</p>
                    </>
                  )}
                  {activeTab === 'stats' && (
                    <>
                      <p className="header-text">PIPELINE STATISTICS</p>
                      <p className="info-text">View real-time usage statistics and logs.</p>
                      <p className="info-text">Type "stats" or "logs" to see data.</p>
                    </>
                  )}
                </div>
              )}

              {terminalHistory.map((entry, i) => (
                <div key={i} className={`terminal-line ${entry.type}`}>
                  {entry.text}
                </div>
              ))}

              {/* Command Input */}
              <div className="command-input-wrapper">
                <span className="prompt-symbol">└─$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type 'help' for commands..."
                  className="command-input"
                  autoFocus
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Visual Pipeline */}
          <div className="pipeline-visual">
            <div className="visual-header">
              <h3>PIPELINE STATUS</h3>
              <span className="status-badge active">ALL SYSTEMS ONLINE</span>
            </div>

            <div className="module-list">
              {[
                { name: 'email_enum', status: 'active', icon: '@' },
                { name: 'phone_lookup', status: 'active', icon: '#' },
                { name: 'social_scan', status: 'active', icon: 'S' },
                { name: 'username_trl', status: 'active', icon: 'U' },
                { name: 'cnic_verify', status: 'active', icon: 'C' },
                { name: 'data_fusion', status: 'active', icon: '⚬' }
              ].map((module, i) => (
                <div key={i} className={`module-card ${module.status}`}>
                  <div className="module-header">
                    <span className="module-icon">{module.icon}</span>
                    <span className="module-name">{module.name}</span>
                  </div>
                  <div className="module-status">
                    <span className="status-dot active"></span>
                    <span>ACTIVE</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Data Flow Animation */}
            <div className="data-flow">
              <h4>DATA FLOW</h4>
              <div className="flow-diagram">
                <div className="flow-node source">
                  <span>SOURCES</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-node process">
                  <span>PIPELINE</span>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-node output">
                  <span>RESULTS</span>
                </div>
              </div>

              {/* Animated dots */}
              <div className="animated-dots">
                <span className="dot" style={{animationDelay: '0s'}}></span>
                <span className="dot" style={{animationDelay: '0.5s'}}></span>
                <span className="dot" style={{animationDelay: '1s'}}></span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="stat-item">
                <span className="stat-label">QUERIES TODAY</span>
                <span className="stat-value">23,847</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SUCCESS RATE</span>
                <span className="stat-value" style={{color: 'var(--term-green)'}}>99.97%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">AVG RESPONSE</span>
                <span className="stat-value">186ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OSINTPipeline;
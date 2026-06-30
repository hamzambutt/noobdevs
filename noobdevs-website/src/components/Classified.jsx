import './Classified.css';

const classifiedProjects = [
  {
    id: 'SENTINEL',
    name: 'Sentinel OSINT Pipeline',
    acronym: 'S.O.P.',
    division: 'Intelligence Division',
    status: 'Active',
    color: '#3B82F6',
    icon: '📡',
    description: 'An automated intelligence-gathering pipeline that dynamically monitors, ingests, and analyzes unstructured social media and global news feeds in real-time. Processes 50K+ data points per minute across 12 language channels.',
    specs: [
      { label: 'Sources', value: '847+ Feeds' },
      { label: 'Throughput', value: '50K/min' },
      { label: 'Latency', value: '< 120ms' }
    ],
    tech: ['Python', 'Elasticsearch', 'Nexus Arch.', 'TensorFlow', 'Redis', 'Grafana']
  },
  {
    id: 'SPEVTER',
    name: 'Spevter Protocol',
    acronym: 'S.P.R.',
    division: 'Intelligence Division',
    status: 'Active',
    color: '#64748B',
    icon: '🔍',
    description: 'An advanced identity resolution and deep-web OSINT aggregator. Engineered to automate the extraction, cross-referencing, and correlation of fragmented identifiers — compiling them into unified, actionable target profiles in real-time.',
    specs: [
      { label: 'Database', value: '2.4B+ Entries' },
      { label: 'Resolve Time', value: '< 3.2s' },
      { label: 'Accuracy', value: '97.8% Match' }
    ],
    tech: ['Python', 'GraphQL', 'Deep Web API', 'PostgreSQL', 'Docker', 'Kafka']
  },
  {
    id: 'AETHER',
    name: 'Project Aether',
    acronym: 'P.A.',
    division: 'Finance Division',
    status: 'Active',
    color: '#F59E0B',
    icon: '⚡',
    description: 'A low-latency, quantum-resistant predictive trading engine utilizing edge-node compute arrays to execute high-frequency arbitrage in decentralized finance pools. Sub-millisecond execution with adaptive risk models.',
    specs: [
      { label: 'Latency', value: '< 0.8ms' },
      { label: 'Nodes', value: '24 Edge Units' },
      { label: 'Volume', value: '$12M+/Day' }
    ],
    tech: ['Rust', 'C++', 'Solana', 'Ethereum', 'CUDA', 'Kubernetes']
  },
  {
    id: 'NEURAL-X',
    name: 'Neural-X Substrate',
    acronym: 'N.X.',
    division: 'AI Research Division',
    status: 'Deployed',
    color: '#F43F5E',
    icon: '🧠',
    description: 'A distributed hyper-parameter tuning framework designed to seamlessly partition and run 70B+ parameter LLMs across fragmented consumer-grade dual-GPU arrays. Achieves 94% of single-node performance at one-sixth the compute cost.',
    specs: [
      { label: 'Model Size', value: '70B+ Params' },
      { label: 'Cluster', value: '32 Nodes' },
      { label: 'Efficiency', value: '94% Parallel' }
    ],
    tech: ['Python', 'PyTorch', 'NCCL', 'CUDA', 'Ray', 'HuggingFace']
  }
];

function Classified() {
  return (
    <section className="classified section-padding" id="classified">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Classified Division</span>
          <h2>Specialized Operations</h2>
          <p>Enterprise-grade systems operating across defense, finance, and AI research. Each project is engineered for maximum performance under constrained conditions.</p>
        </div>

        <div className="classified-grid">
          {classifiedProjects.map((project) => (
            <div key={project.id} className={`classified-card reveal`} style={{ '--card-accent': project.color }}>
              {/* Top bar */}
              <div className="classified-topbar">
                <span className="division-label">{project.division}</span>
                <span className="status-badge" data-status={project.status.toLowerCase()}>{project.status}</span>
              </div>

              {/* Card header */}
              <div className="classified-header">
                <div className="classified-icon" style={{ '--icon-color': project.color }}>{project.icon}</div>
                <div className="classified-title-group">
                  <h3>{project.name}</h3>
                  <span className="classified-acronym">{project.acronym}</span>
                </div>
              </div>

              {/* Description */}
              <p className="classified-desc">{project.description}</p>

              {/* Specs grid */}
              <div className="classified-specs">
                {project.specs.map((spec, i) => (
                  <div key={i} className="spec-box">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="classified-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag-small">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classified;
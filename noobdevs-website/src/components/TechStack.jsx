import './TechStack.css';

const techCategories = [
  {
    category: 'Backend & Languages',
    items: ['Python', 'Rust', 'C++', 'Kotlin', 'JavaScript']
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'Vite', 'Jetpack Compose', 'Kotlin Multiplatform']
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Cloud Firestore', 'Redis']
  },
  {
    category: 'AI & Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'HuggingFace', 'Ray']
  },
  {
    category: 'Protocols & Networks',
    items: ['Matrix Protocol', 'WebSocket', 'gRPC', 'Kafka']
  },
  {
    category: 'Compute',
    items: ['CUDA', 'NVIDIA NCCL', 'Edge Compute', 'Distributed GPU']
  }
];

function TechStack() {
  return (
    <section className="techstack section-padding" id="techstack">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Technology Stack</span>
          <h2>Built for Scale</h2>
          <p>A curated selection of battle-tested technologies, each chosen for its role in delivering production-grade systems at enterprise scale.</p>
        </div>

        <div className="tech-grid reveal">
          {techCategories.map((cat) => (
            <div key={cat.category} className="tech-category">
              <h4 className="tech-category-title">{cat.category}</h4>
              <div className="tech-items">
                {cat.items.map(item => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
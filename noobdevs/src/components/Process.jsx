import './Process.css';

const steps = [
  { num: '01', title: 'Discovery & Scoping', desc: 'We deep-dive into your requirements, define technical architecture, and deliver a detailed project proposal with timeline and pricing.' },
  { num: '02', title: 'Sprint Planning', desc: 'Work is broken into 2-week sprints with clear milestones. You get a roadmap, weekly demos, and direct Slack access to the team.' },
  { num: '03', title: 'Development & Review', desc: 'Clean code with peer reviews. Each sprint delivers working software. You see progress every week, not just at the end.' },
  { num: '04', title: 'Delivery & Support', desc: 'Full deployment, documentation handoff, and 30 days of post-launch support. We ensure everything runs perfectly in production.' },
];

function Process() {
  return (
    <section className="process-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Process</span>
          <h2>From brief to deployment in four steps</h2>
          <p>A streamlined engagement model designed for speed, transparency, and quality at every stage.</p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.num} className="process-card reveal">
              <div className="process-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
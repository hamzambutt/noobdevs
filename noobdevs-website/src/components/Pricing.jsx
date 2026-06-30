import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    desc: 'Small scope, fast delivery',
    price: '$2,500+',
    note: 'Starting price • Fixed scope projects',
    features: ['Single discipline project', 'Up to 2 engineers assigned', '2-week delivery timeline', 'Source code & documentation', '7-day post-delivery support'],
    cta: 'Get Detailed Quote',
    featured: false,
  },
  {
    name: 'Professional',
    desc: 'Full-featured deliverables',
    price: '$7,500+',
    note: 'Starting price • Custom scoped projects',
    features: ['Multi-discipline project', 'Dedicated 3+ engineer team', 'Agile sprint process', 'Full CI/CD & testing', 'Production deployment', '30-day post-launch support'],
    cta: 'Get Detailed Quote',
    featured: true,
  },
  {
    name: 'Enterprise',
    desc: 'Complex systems & partnerships',
    price: 'Custom',
    note: 'Tailored to your requirements',
    features: ['All 5 disciplines available', 'Dedicated full team (7 engineers)', 'Custom SLA & milestones', 'On-premise deployment option', '90-day priority support', 'Ongoing retainer available'],
    cta: 'Contact Us',
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Pricing</span>
          <h2>Transparent, competitive market pricing</h2>
          <p>Every project gets a custom quote based on scope. Use our packages as a starting point for your budget planning.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''} reveal`}>
              {plan.featured && <span className="pricing-popular">Most Common</span>}
              <div className="pricing-header">
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-desc">{plan.desc}</div>
              </div>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
              </div>
              <p className="pricing-note">{plan.note}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.featured ? 'btn-accent' : 'btn-outline'} btn-full`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
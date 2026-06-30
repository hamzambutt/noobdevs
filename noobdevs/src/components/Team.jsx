import './Team.css';

const team = [
  { id: '01', name: 'Alex Mercer', role: 'Lead Architect / Full-Stack', specialty: 'System Design & Architecture' },
  { id: '02', name: 'Sarah Chen', role: 'OSINT Specialist', specialty: 'Data Pipelines & Intelligence' },
  { id: '03', name: 'James Wright', role: 'ML / AI Engineer', specialty: 'Deep Learning & NLP' },
  { id: '04', name: 'Maria Kowalski', role: 'Drone Systems Engineer', specialty: 'Autonomous Flight Control' },
  { id: '05', name: 'David Park', role: 'Game Developer', specialty: 'Interactive Simulations & 3D' },
  { id: '06', name: 'Rachel Okonkwo', role: 'Backend Engineer', specialty: 'Cloud Infrastructure & APIs' },
  { id: '07', name: 'Thomas Bauer', role: 'Frontend Engineer', specialty: 'UI Systems & Experience Design' },
];

function Team() {
  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Team</span>
          <h2>The Engineers Behind Your Project</h2>
          <p>Seven specialized developers, each a subject matter expert in their domain. Together, they form a complete engineering team ready to deliver.</p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.id} className="team-card reveal">
              <div className="team-avatar">{member.id}</div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <span className="team-specialty">{member.specialty}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
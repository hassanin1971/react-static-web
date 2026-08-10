import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Priya Shah',
    role: 'Founder & Designer',
    bio: 'Started Northbound after ten years designing for larger agencies. Loves clean grids and strong coffee.',
  },
  {
    name: 'Marcus Lee',
    role: 'Frontend Developer',
    bio: 'Turns designs into fast, accessible code. Previously built e-commerce sites for a Portland retail chain.',
  },
  {
    name: 'Jordan Ferreira',
    role: 'Project Manager',
    bio: 'Keeps every project on schedule and every client in the loop, from kickoff call to launch day.',
  },
]

const values = [
  {
    title: 'Plain-language process',
    description:
      'No jargon, no mystery invoices. You always know what stage your project is in and why.',
  },
  {
    title: 'Built to last',
    description:
      "We hand over clean, documented code so you're never locked into us to make a simple update.",
  },
  {
    title: 'Small by design',
    description:
      'We take on a handful of projects at a time so every client gets real attention, not a rotating cast of juniors.',
  },
]

function About() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">About us</p>
        <h1>A small studio that cares about the details.</h1>
        <p className="lead">
          Northbound Studio was founded in 2014 with a simple idea: independent
          businesses deserve the same quality of design as the big brands,
          without the six-figure retainer.
        </p>
      </section>

      <section className="section split">
        <div>
          <h2>Our story</h2>
          <p>
            We started in a shared workspace above a bakery in Portland, Maine,
            building websites for the shop owners we knew personally. Word
            spread, and twelve years later we've worked with restaurants,
            boutiques, nonprofits, and contractors across New England, but the
            approach hasn't changed.
          </p>
          <p>
            Every project starts with a conversation about your customers, not
            a template picker. We design around how people actually find and
            use your site, then build it to be fast, easy to update, and
            genuinely yours.
          </p>
        </div>
        <div className="stat-block">
          <div className="stat">
            <p className="stat-value">2014</p>
            <p className="stat-label">Founded</p>
          </div>
          <div className="stat">
            <p className="stat-value">80+</p>
            <p className="stat-label">Sites launched</p>
          </div>
          <div className="stat">
            <p className="stat-value">3</p>
            <p className="stat-label">Full-time team members</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What we believe</p>
          <h2>The principles behind every project</h2>
        </div>
        <div className="grid-3">
          {values.map((value) => (
            <div className="service-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">The team</p>
          <h2>Meet the people you'll work with</h2>
        </div>
        <div className="grid-3">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="avatar" aria-hidden="true">
                {member.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Want to work together?</h2>
        <p>We'd love to hear about your business and what you're planning.</p>
        <Link to="/contact" className="button primary">
          Say hello
        </Link>
      </section>
    </>
  )
}

export default About

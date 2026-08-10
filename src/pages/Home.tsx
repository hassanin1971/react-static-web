import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Brand & Identity',
    description:
      'Logos, color systems, and typography that give your business a voice worth remembering.',
  },
  {
    title: 'Web Design',
    description:
      'Clean, fast, accessible websites built to convert visitors into customers.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Monthly maintenance, content updates, and performance tuning so your site keeps up with you.',
  },
]

const stats = [
  { value: '80+', label: 'Projects shipped' },
  { value: '12', label: 'Years in business' },
  { value: '96%', label: 'Clients who refer us' },
]

const testimonials = [
  {
    quote:
      "Northbound rebuilt our site in three weeks and our booking rate doubled the following month. They actually listened to what our customers needed.",
    author: 'Maria Alvarez',
    role: 'Owner, Tidewater Kitchen',
  },
  {
    quote:
      'Every deliverable was on time, the copy sounded like us, and the handoff docs made it easy for our team to take over. Would hire again in a heartbeat.',
    author: 'Devon Whitfield',
    role: 'Marketing Lead, Bramblewood Goods',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Web design & development studio</p>
          <h1>Websites that feel like they were built just for you.</h1>
          <p className="lead">
            We're a small studio in Portland, Maine helping independent businesses
            launch fast, good-looking websites without the agency price tag or the
            template feel.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button primary">
              Start a project
            </Link>
            <Link to="/about" className="button ghost">
              Meet the team
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="hero-card card-1">
            <span className="tag">Design</span>
            <p>Homepage draft</p>
            <div className="bar" />
            <div className="bar short" />
          </div>
          <div className="hero-card card-2">
            <span className="tag">Launch</span>
            <p>Ready for review</p>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Everything you need to launch and grow online</h2>
        </div>
        <div className="grid-3">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">Kind words</p>
          <h2>What clients say about working with us</h2>
        </div>
        <div className="grid-2">
          {testimonials.map((testimonial) => (
            <blockquote className="testimonial" key={testimonial.author}>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-author">{testimonial.author}</span>
                <span className="testimonial-role">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Have a project in mind?</h2>
        <p>Tell us about it and we'll get back to you within one business day.</p>
        <Link to="/contact" className="button primary">
          Get in touch
        </Link>
      </section>
    </>
  )
}

export default Home

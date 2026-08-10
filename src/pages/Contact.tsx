import { useState, type FormEvent } from 'react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Most brochure-style sites take four to six weeks from kickoff to launch. Larger projects with custom features can take longer, we’ll give you a firm timeline before any work begins.',
  },
  {
    question: 'Do you work with clients outside of Maine?',
    answer:
      'Yes. About half of our clients are fully remote. All meetings can happen over video call, and we use shared docs to keep everything organized.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Most new websites start around $4,500. After our first call we’ll send a fixed-price proposal so there are no surprises.',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Let's talk about your project.</h1>
        <p className="lead">
          Fill out the form below or reach us directly, we typically reply
          within one business day.
        </p>
      </section>

      <section className="section split">
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <h2>Thanks for reaching out!</h2>
              <p>
                We've received your message and will get back to you within
                one business day.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Jane Doe" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                />
              </div>
              <div className="form-row">
                <label htmlFor="budget">Project budget</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-plus">$10,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="message">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What are you hoping to build?"
                />
              </div>
              <button type="submit" className="button primary">
                Send message
              </button>
            </form>
          )}
        </div>

        <div className="contact-info">
          <div className="info-block">
            <h3>Email</h3>
            <p>hello@northboundstudio.com</p>
          </div>
          <div className="info-block">
            <h3>Phone</h3>
            <p>(207) 555-0148</p>
          </div>
          <div className="info-block">
            <h3>Studio</h3>
            <p>
              142 Fore Street, Suite 3
              <br />
              Portland, ME 04101
            </p>
          </div>
          <div className="info-block">
            <h3>Hours</h3>
            <p>Monday - Friday, 9am - 5pm ET</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Questions we hear a lot</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}

export default Contact

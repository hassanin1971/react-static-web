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
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Let's talk about your project.</h1>
        <p className="lead">
          Reach out any time, we typically reply within one business day.
        </p>
      </section>

      <section className="section">
        <div className="contact-info contact-info-centered">
          <div className="info-block">
            <h3>Email</h3>
            <p>hello@acmeltd.com</p>
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

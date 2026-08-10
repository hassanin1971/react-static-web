import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">N</span>
          <div>
            <p className="footer-title">Northbound Studio</p>
            <p className="footer-tagline">Thoughtful web design for small teams.</p>
          </div>
        </div>

        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-meta">
          <p>hello@northboundstudio.com</p>
          <p>(207) 555-0148</p>
          <p>Portland, Maine</p>
        </div>
      </div>
      <p className="footer-copy">&copy; {year} Northbound Studio. All rights reserved.</p>
    </footer>
  )
}

export default Footer

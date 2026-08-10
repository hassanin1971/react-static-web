import { useState } from 'react'
import { NavLink, type NavLinkRenderProps } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: NavLinkRenderProps) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">A</span>
          Acme Ltd
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

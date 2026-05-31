import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NsfasBadge from './NsfasBadge';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Villa54
        </Link>

        <NsfasBadge />

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="nav" className={menuOpen ? 'active' : ''}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/apply" onClick={closeMenu}>
            Apply
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

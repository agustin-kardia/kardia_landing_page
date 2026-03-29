import { useState, useEffect } from 'react';
import KardiaLogo from './KardiaLogo';
import { scrollToElement } from '../utils/scrollTo';

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSolid(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`nav${isSolid ? ' nav--solid' : ''}`} id="top">
      <div className="container nav-inner">
        <div className="nav-logo" aria-label="KARDIA">
          <KardiaLogo variant="nav" />
        </div>

        <nav className={`nav-links${isMenuOpen ? ' is-open' : ''}`}>
          <a href="#entrenamiento" className="nav-link" onClick={closeMenu}>
            El entrenamiento
          </a>
          <a href="#disciplinas" className="nav-link" onClick={closeMenu}>
            Disciplinas
          </a>
          <a href="#estudios" className="nav-link" onClick={closeMenu}>
            Estudios
          </a>
          <a href="#sumate" className="nav-link" onClick={closeMenu}>
            Sumate
          </a>
        </nav>

        <div className="nav-right">
          <button
            className="nav-cta"
            onClick={() => scrollToElement('#sumate')}
          >
            Unirse
          </button>
          <button
            className="nav-toggle"
            aria-label={isMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

import KardiaLogo from './KardiaLogo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo" aria-label="KARDIA">
          <KardiaLogo variant="footer" />
        </div>
        <nav className="footer-links" aria-label="Links de sitio">
          <a href="#entrenamiento" className="footer-link">
            <span>Quiénes somos</span>
          </a>
          <a href="#sumate" className="footer-link">
            <span>Contacto</span>
          </a>
          <a href="#disciplinas" className="footer-link">
            <span>Locales</span>
          </a>
          <a href="#" className="footer-link">
            <span>Términos y Condiciones</span>
          </a>
          <span className="footer-link">
            <span>© 2026 KARDIA</span>
          </span>
        </nav>
      </div>
    </footer>
  );
}

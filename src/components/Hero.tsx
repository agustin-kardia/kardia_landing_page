import { scrollToElement } from '../utils/scrollTo';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        src="/assets/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-video-scrim" aria-hidden="true" />
      <div className="hero-accent" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-tagline reveal reveal-delay-1">
          PUSH SMARTER LIVE BETTER
        </div>

        <h1 className="hero-heading reveal">
          <span>FITNESS</span>
          <span className="hero-line-red">TO FIT</span>
          <span>YOUR LIFE</span>
        </h1>

        <p className="hero-sub reveal reveal-delay-1">
          Entrenamiento en 45 minutos. Cerca tuyo. Con tecnología que mide cada
          esfuerzo.
        </p>

        <div className="hero-actions reveal reveal-delay-2">
          <button
            className="btn-primary"
            onClick={() => scrollToElement('#sumate')}
          >
            Reservar mi lugar
          </button>
          <a href="#entrenamiento" className="link-ghost">
            Conocer más
          </a>
        </div>

        <div className="hero-meta reveal reveal-delay-3">
          <span>
            Entrenamiento inteligente por bloques, pensado para tu vida real.
          </span>
          <div className="hero-badge">50 personas ya se sumaron</div>
        </div>
      </div>
    </section>
  );
}

import { type FormEvent, useState } from 'react';
import KardiaLogo from './KardiaLogo';

export default function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section
      className="section section--tight waitlist"
      id="sumate"
      aria-labelledby="waitlist-heading"
    >
      <div className="waitlist-ghost" aria-hidden="true">
        <KardiaLogo variant="ghost" />
      </div>

      <div className="container waitlist-inner">
        <div className="section-label reveal">Próximamente</div>
        <h2
          className="waitlist-heading reveal reveal-delay-1"
          id="waitlist-heading"
        >
          SUMATE A LA LISTA DE ESPERA
        </h2>
        <p className="waitlist-sub reveal reveal-delay-2">
          Sé de los primeros en entrenar. Te avisamos cuando abramos las
          puertas.
        </p>

        {!isSubmitted && (
          <form
            className="waitlist-form reveal reveal-delay-2"
            onSubmit={handleSubmit}
          >
            <div className="waitlist-form-row">
              <input
                type="email"
                className="waitlist-input"
                name="email"
                required
                autoComplete="email"
                placeholder="Tu email"
                aria-label="Tu email"
              />
              <button type="submit" className="waitlist-submit">
                Quiero sumarme
              </button>
            </div>
          </form>
        )}

        {isSubmitted && (
          <p className="waitlist-success is-visible">
            ¡Listo! Te avisamos cuando abramos.
          </p>
        )}

        <div className="waitlist-meta reveal reveal-delay-3">
          <span className="dot-pulse" aria-hidden="true" />
          <span>50 personas ya se sumaron a Kardia</span>
        </div>
      </div>
    </section>
  );
}

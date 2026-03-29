interface Discipline {
  index: string;
  code: string;
  name: string;
  body: string;
  tags: string[];
}

interface Studio {
  modifier: string;
  src: string;
  alt: string;
  label: string;
  name: string;
  delay: number;
}

const DISCIPLINES: Discipline[] = [
  {
    index: '01',
    code: 'HIIT',
    name: 'HIIT',
    body: 'Entrenamiento interválico de alta intensidad. Quemá calorías, mejorá tu resistencia y superá tus límites en cada clase.',
    tags: ['Alta intensidad', 'Cardio', 'Resistencia'],
  },
  {
    index: '02',
    code: 'FUNCTIONAL',
    name: 'FUNCTIONAL',
    body: 'Movimientos funcionales que mejoran tu fuerza, movilidad y coordinación. Entrenamiento para la vida real.',
    tags: ['Fuerza', 'Movilidad', 'Coordinación'],
  },
  {
    index: '03',
    code: 'HYBRID',
    name: 'HYBRID',
    body: 'Lo mejor de los dos mundos. Una combinación de HIIT y Functional para un entrenamiento completo e integrado.',
    tags: ['Completo', 'Balanceado', 'Total'],
  },
];

const STUDIOS: Studio[] = [
  {
    modifier: 'frente',
    src: '/assets/studio-frente.png',
    alt: 'Frente del estudio Kardia',
    label: '01 · Exterior',
    name: 'Frente',
    delay: 0,
  },
  {
    modifier: 'recepcion',
    src: '/assets/studio-recepcion.png',
    alt: 'Recepción del estudio Kardia',
    label: '02 · Ingreso',
    name: 'Recepción',
    delay: 1,
  },
  {
    modifier: 'entrenamiento',
    src: '/assets/studio-entrenamiento.png',
    alt: 'Área de entrenamiento Kardia',
    label: '03 · Training',
    name: 'Área de entrenamiento',
    delay: 1,
  },
  {
    modifier: 'lockers',
    src: '/assets/studio-lockers.png',
    alt: 'Vestuarios del estudio Kardia',
    label: '04 · Vestuarios',
    name: 'Lockers',
    delay: 2,
  },
];

function DisciplineCard({
  discipline,
  delay,
}: {
  discipline: Discipline;
  delay: number;
}) {
  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : '';

  return (
    <article className={`discipline-card reveal${delayClass}`}>
      <div className="discipline-overlay" aria-hidden="true" />
      <div className="discipline-meta">
        {discipline.index} · {discipline.code}
      </div>
      <div className="discipline-title-row">
        <h3 className="discipline-name">{discipline.name}</h3>
        <span className="discipline-duration">45 MIN</span>
      </div>
      <p className="discipline-body">{discipline.body}</p>
      <div className="discipline-tags">
        {discipline.tags.map((tag) => (
          <span key={tag} className="discipline-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="discipline-arrow">
        <span>Ver más</span>
        <span className="discipline-arrow-icon" aria-hidden="true" />
      </div>
    </article>
  );
}

function StudioPhoto({ studio }: { studio: Studio }) {
  const delayClass = studio.delay > 0 ? ` reveal-delay-${studio.delay}` : '';

  return (
    <div
      className={`studio-photo studio-photo--${studio.modifier} reveal${delayClass}`}
    >
      <img src={studio.src} alt={studio.alt} loading="lazy" />
      <div className="studio-photo-overlay" aria-hidden="true" />
      <div className="studio-photo-caption">
        <div className="studio-caption-label">{studio.label}</div>
        <div className="studio-caption-name">{studio.name}</div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <>
      {/* Value proposition */}
      <section
        className="section value"
        id="entrenamiento"
        aria-labelledby="value-heading"
      >
        <div className="container">
          <div className="section-label reveal">Por qué Kardia</div>
          <div className="value-main">
            <h2 className="value-title reveal" id="value-heading">
              ENTRENAMIENTO INTELIGENTE. EN 45 MINUTOS.
            </h2>
            <p className="value-body reveal reveal-delay-1">
              Clases de 45 minutos diseñadas para adaptarse a tu vida. Elegí la
              disciplina que más te guste, encontrá el horario que mejor te
              quede y entrenate en el estudio más cercano a vos. Sin excusas,
              sin segunda vuelta.
            </p>
          </div>
          <div className="value-strip reveal reveal-delay-2">
            <div className="value-strip-grid">
              <div>
                <div className="value-item-title">Sensores en tiempo real</div>
                <div className="value-item-body">
                  Medimos tu esfuerzo durante toda la clase.
                </div>
              </div>
              <div>
                <div className="value-item-title">
                  Competí con tu comunidad
                </div>
                <div className="value-item-body">
                  Clasificaciones en vivo durante el entrenamiento.
                </div>
              </div>
              <div>
                <div className="value-item-title">Resultados en tu app</div>
                <div className="value-item-body">
                  Recibí tu resumen completo después de cada clase.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section
        className="section disciplines"
        id="disciplinas"
        aria-labelledby="disciplines-heading"
      >
        <div className="container">
          <div className="disciplines-header">
            <div className="section-label reveal">Las disciplinas</div>
            <h2
              className="section-heading reveal reveal-delay-1"
              id="disciplines-heading"
            >
              ELEGÍ TU FORMA DE ENTRENAR
            </h2>
          </div>
        </div>
        <div className="disciplines-grid">
          {DISCIPLINES.map((d, i) => (
            <DisciplineCard key={d.code} discipline={d} delay={i} />
          ))}
        </div>
      </section>

      {/* Studios gallery */}
      <section
        className="studios"
        id="estudios"
        aria-labelledby="studios-heading"
      >
        <div className="container studios-header">
          <div className="section-label reveal">Los estudios</div>
          <h2
            className="section-heading reveal reveal-delay-1"
            id="studios-heading"
          >
            CONOCÉ NUESTROS ESPACIOS
          </h2>
        </div>
        <div className="studio-gallery">
          {STUDIOS.map((s) => (
            <StudioPhoto key={s.modifier} studio={s} />
          ))}
        </div>
      </section>
    </>
  );
}

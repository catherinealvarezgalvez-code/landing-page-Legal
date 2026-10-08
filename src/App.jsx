import { useState } from 'react';
import './App.css';

function App() {
  const [copiado, setCopiado] = useState(false);
  const [errorCopia, setErrorCopia] = useState(false);
  const email = 'catherine.alvarez.abogada@gmail.com';

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiado(true);
      setErrorCopia(false);
      window.setTimeout(() => setCopiado(false), 3000);
    } catch {
      setErrorCopia(true);
    }
  };

  const serviciosFamilia = [
    'Cuidado personal y relación directa y regular',
    'Pensiones de alimentos: aumento, rebaja y cese',
    'Divorcios: mutuo acuerdo, unilateral y culposo',
    'Medidas de protección y violencia intrafamiliar (VIF)',
  ];

  const serviciosCivil = [
    'Estudio de títulos y compraventa de inmuebles',
    'Juicios de arrendamiento y precario',
    'Indemnización de perjuicios y juicios ejecutivos',
    'Redacción y revisión de contratos',
  ];

  return (
    <div className="landing-container">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Catherine Álvarez Gálvez, inicio">
          <span className="brand-mark" aria-hidden="true">CA</span>
          <span className="brand-copy">
            <strong>Catherine Álvarez Gálvez</strong>
            <span>Abogada</span>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Trayectoria</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto" className="btn-nav">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Derecho de familia y civil</p>
              <h1>Asesoría legal para decisiones que importan.</h1>
              <p className="hero-subtitle">
                Orientación jurídica con rigor, ética y una mirada cercana a cada caso.
              </p>
              <div className="hero-actions">
                <a href="#contacto" className="btn-primary">
                  Solicitar orientación <span aria-hidden="true">↗</span>
                </a>
                <a href="#sobre-mi" className="text-link">Conocer trayectoria</a>
              </div>
            </div>
            <div className="hero-mark" aria-hidden="true">
              <span className="hero-mark-name">Catherine Álvarez Gálvez</span>
              <span className="hero-mark-initials">CA</span>
              <span className="hero-mark-rule" />
              <span className="hero-mark-role">Abogada</span>
              <span className="hero-mark-year">Juramento · 2014</span>
            </div>
          </div>
        </section>

        <section className="credentials" aria-label="Formación y experiencia">
          <dl className="credentials-inner">
            <div>
              <dt>Formación</dt>
              <dd>Universidad Católica de la Santísima Concepción</dd>
            </div>
            <div>
              <dt>Juramento</dt>
              <dd>Corte Suprema · 2014</dd>
            </div>
            <div>
              <dt>Experiencia</dt>
              <dd>SernamEG y Poder Judicial</dd>
            </div>
          </dl>
        </section>

        <section id="sobre-mi" className="about-section">
          <div className="about-layout">
            <div className="section-intro">
              <p className="eyebrow">Trayectoria</p>
              <h2>Experiencia jurídica, mirada cercana.</h2>
            </div>
            <div className="about-content">
              <p>
                Catherine Álvarez Gálvez es abogada de la Universidad Católica de la
                Santísima Concepción. Su trayectoria incluye el cargo de Abogada Jefe
                en el Servicio Nacional de la Mujer y la Equidad de Género (SernamEG),
                funciones en el Poder Judicial y el ejercicio independiente de la profesión.
              </p>
              <a href="#contacto" className="text-link text-link-dark">
                Conversar sobre mi caso <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="servicios" className="services-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Áreas de práctica</p>
              <h2>Asesoría para cada etapa.</h2>
            </div>
            <p className="section-note">
              Derecho de familia y civil, con atención personalizada.
            </p>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <div className="service-heading">
                <span className="service-index">01</span>
                <h3>Derecho de Familia</h3>
              </div>
              <p className="service-subtitle">Orientación y representación ante Tribunales de Familia.</p>
              <ul>
                {serviciosFamilia.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="service-card">
              <div className="service-heading">
                <span className="service-index">02</span>
                <h3>Derecho Civil</h3>
              </div>
              <p className="service-subtitle">Asesoría contractual y representación en asuntos civiles.</p>
              <ul>
                {serviciosCivil.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-layout">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2>Hablemos de tu situación.</h2>
              <p className="contact-lead">
                Escríbeme para evaluar tu caso de forma confidencial y personalizada.
              </p>
            </div>
            <div className="contact-actions">
              <button
                type="button"
                onClick={copiarEmail}
                className={`contact-email${copiado ? ' is-copied' : ''}`}
                aria-label={copiado ? 'Correo electrónico copiado' : `Copiar correo electrónico ${email}`}
              >
                <span>{email}</span>
                <span className="contact-email-action" aria-hidden="true">
                  <svg className="contact-email-icon" viewBox="0 0 20 20" fill="none">
                    {copiado ? (
                      <path d="m4.5 10.5 3.5 3.5 7.5-8" />
                    ) : (
                      <>
                        <rect x="7" y="6" width="9" height="11" rx="1.5" />
                        <path d="M13 6V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v9A1.5 1.5 0 0 0 4.5 15H7" />
                      </>
                    )}
                  </svg>
                  <span className="contact-email-hint">
                    {copiado ? 'Copiado' : 'Haz clic para copiar'}
                  </span>
                </span>
              </button>
              <p className="copy-status" aria-live="polite">
                {errorCopia ? 'No se pudo copiar el correo. Inténtalo de nuevo desde un navegador compatible.' : copiado ? 'Correo copiado al portapapeles.' : ''}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Catherine Álvarez Gálvez · Abogada</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [copiado, setCopiado] = useState(false);
  const email = "catherine.alvarez.abogada@gmail.com";

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000); // Vuelve al estado original a los 3 segundos
  };

  const serviciosFamilia = [
    "Cuidado Personal y Relación Directa y Regular",
    "Pensiones de Alimentos (Aumento, Rebaja, Cese)",
    "Divorcios (De Mutuo Acuerdo, Unilateral, Culposo)",
    "Medidas de Protección y Violencia Intrafamiliar (VIF)"
  ];

  const serviciosCivil = [
    "Estudio de Títulos y Compraventa de Inmuebles",
    "Juicios de Arrendamiento y Precaristas",
    "Indemnización de Perjuicios y Juicios Ejecutivos",
    "Redacción y Revisión de Contratos"
  ];

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="navbar">
        <div className="logo">Catherine Álvarez Gálvez | Abogada</div>
        <nav>
          <a href="#sobre-mi">Trayectoria</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto" className="btn-nav">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Asesoría y Representación Jurídica Especializada</h1>
        <p>Experiencia, compromiso y rigor legal en materias de Derecho de Familia y Derecho Civil.</p>
        <a 
          href="https://wa.me/56912345678" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          Agendar Consulta por WhatsApp
        </a>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="about-section">
        <h2>Trayectoria Profesional</h2>
        <div className="about-content">
          <p>
            Soy <strong>Catherine Álvarez Gálvez</strong>, Abogada titulada de la Universidad Católica de la Santísima Concepción, habiendo prestado juramento ante la Excelentísima Corte Suprema en el año 2014.
          </p>
          <p>
            Cuento con una amplia trayectoria en el ejercicio de la profesión, habiéndome desempeñado como <strong>Abogada Jefe en el Servicio Nacional de la Mujer y la Equidad de Género (SernamEG)</strong> y como funcionaria en el <strong>Poder Judicial</strong>, sumado a años de ejercicio independiente de la profesión.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="services-section">
        <h2>Áreas de Práctica</h2>
        <div className="services-grid">
          {/* Tarjeta Derecho de Familia */}
          <div className="service-card">
            <h3>Derecho de Familia</h3>
            <p className="service-subtitle">Representación integral y defensa efectiva en tribunales de familia.</p>
            <ul>
              {serviciosFamilia.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tarjeta Derecho Civil */}
          <div className="service-card">
            <h3>Derecho Civil</h3>
            <p className="service-subtitle">Asesoría en contratos, bienes y protección de tus patromonios e intereses.</p>
            <ul>
              {serviciosCivil.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contact-section">
        <h2>¿Necesitas Orientación Legal?</h2>
        <p>Escríbeme para evaluar tu caso de forma confidencial y personalizada.</p>
        
        {/* Bloque para copiar el correo */}
        <div className="email-copy-box">
          <span className="email-text">{email}</span>
          <button onClick={copiarEmail} className="btn-copy">
            {copiado ? "✓ ¡Copiado!" : "Copiar Correo"}
          </button>
        </div>

        <div className="contact-buttons">
          <a href={`mailto:${email}`} className="btn-secondary">
            Enviar Email Directo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Catherine Álvarez Gálvez - Abogada. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
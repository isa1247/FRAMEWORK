import React from 'react';

import './inicio.css';

function Inicio() {
  // Recupera el nombre de usuario almacenado en el localStorage
  const storedUsername = localStorage.getItem('username');
  
  return (
    <div>
      <section className="hero">
        <div className="container-inicio">
          <div className="feature">
            {storedUsername ? (
              <h2>Bienvenido, {storedUsername}</h2>
            ) : (
              <h2>Bienvenidos</h2>
            )}
            <p>Biblioteca Virtual ULEAM.</p>
            <a href="#" className="button">
              Más información
            </a>
          </div>
          <div className="feature">
            <h2>Conócenos un poco más</h2>
            <p>ULEAM tu futuro educativo en buenas manos.</p>
            <a href="#" className="button">
              Explorar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;

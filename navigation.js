import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const publicUrl = process.env.PUBLIC_URL;

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Utiliza useEffect para cargar el estado de inicio de sesión desde el almacenamiento local al cargar la página
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedIsLoggedIn === 'true');
  }, []);

  const handleLogout = () => {
    // Realiza el cierre de sesión eliminando la información relevante del localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <header className="custom-header">
      <div className="custom-logo">
        <Link to="/inicio"> {/* Agrega este Link */}
          <img src={process.env.PUBLIC_URL + '/logouleam.png'} alt="Logo de la Universidad" />
        </Link>
      </div>
      <nav>
        <ul className="custom-nav-list">
          {isLoggedIn ? (
            <>
              <li className="custom-nav-item">
                <Link to="/inicio" className="custom-nav-link">
                  Inicio
                </Link>
              </li>
              <li className="custom-nav-item">
                <button onClick={handleLogout} className="custom-nav-link">
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="custom-nav-item">
                <Link to="/inicio-sesion" className="custom-nav-link">
                  Iniciar Sesión
                </Link>
              </li>
              <li className="custom-nav-item">
                <Link to="/registro" className="custom-nav-link">
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

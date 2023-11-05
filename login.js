// En la página de inicio de sesión (Login.js)
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
  
    // Obtener datos almacenados en localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
  
    // Verificar si los datos de inicio de sesión son válidos
    if (userData && userData.inputCorreoRegistro === email && userData.password === password) {
      Swal.fire({
        icon: 'success',
        title: 'Logeo exitoso',
        text: '',
      });
  
      // Actualiza el estado de inicio de sesión en el localStorage
      localStorage.setItem('isLoggedIn', 'true');
  
      // Redirigir al usuario al inicio si las credenciales son válidas
      navigate('/inicio');
    } else {
      // Mostrar un mensaje de error o manejar la autenticación fallida de otra manera
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los datos son incorrectos.',
      });
    }
  };
  



  return (
    <div>
      <form className='form-container form-login' onSubmit={handleLogin}>
        <h1>Iniciar Sesión</h1>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;

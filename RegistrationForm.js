import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Importa useNavigate y Router
import {
    validarCampo,
    verificarPass,
    comprobarPass,
    validarCorreoElectronico,
    validarNumeroTelefono,
    validarCedula,
  } from './validation.js';
  
import './RegistrationForm.css';

function RegistrationForm(props) {
  const [state, setState] = useState({
    nombre: '',
    apellidos: '',
    numeroCedula: '',
    numeroCelular: '',
    inputCorreoRegistro: '',
    facultad: '',
    password: '',
    confirmarPass: '',
  });

  const navigate = useNavigate(); // Obtiene la función de navegación con useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();

    // Desestructura los campos del formulario del estado
    const {
      nombre,
      apellidos,
      numeroCedula,
      numeroCelular,
      inputCorreoRegistro,
      facultad,
      password,
      confirmarPass,
    } = state;

    // Realiza las validaciones utilizando las funciones importadas desde 'validations.js'
    if (
      validarCampo(nombre) &&
      validarCampo(apellidos) &&
      validarCedula(numeroCedula) &&
      validarNumeroTelefono(numeroCelular) &&
      validarCorreoElectronico(inputCorreoRegistro) &&
      validarCampo(facultad) &&
      verificarPass(password) &&
      comprobarPass(confirmarPass)
    ) {
      if (password !== confirmarPass) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Las contraseñas no coinciden.',
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Los datos han sido enviados con éxito.',
        });

        const formData = {
          nombre,
          apellidos,
          numeroCedula,
          numeroCelular,
          inputCorreoRegistro,
          facultad,
          password,
        };

        localStorage.setItem('userData', JSON.stringify(formData));
        setState({
          nombre: '',
          apellidos: '',
          numeroCedula: '',
          numeroCelular: '',
          inputCorreoRegistro: '',
          facultad: '',
          password: '',
          confirmarPass: '',
        });

        navigate('/inicio-sesion'); // Utiliza navigate para redirigir al usuario
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div className="container">
        <form className='registration-form form-container' onSubmit={handleSubmit}>
          <h1>Registro de Usuario</h1>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={state.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={state.apellidos}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="numeroCedula">Cédula:</label>
            <input
              type="number"
              id="numeroCedula"
              name="numeroCedula"
              value={state.numeroCedula}
              onChange={handleChange}
              required
            />
            <p id="PCedula"></p>
          </div>

          <div className="form-group">
            <label htmlFor="numeroCelular">Número de Teléfono:</label>
            <input
              type="number"
              id="numeroCelular"
              name="numeroCelular"
              value={state.numeroCelular}
              onChange={handleChange}
              required
            />
            <p id="resultadoNumeroTelefono"></p>
          </div>

          <div className="form-group">
            <label htmlFor="inputCorreoRegistro">Correo Institucional:</label>
            <input
              type="email"
              id="inputCorreoRegistro"
              name="inputCorreoRegistro"
              value={state.inputCorreoRegistro}
              onChange={handleChange}
              required
            />
            <p id="resultadoCorreoElectronico"></p>
          </div>

          <div className="form-group">
            <label htmlFor="facultad">Facultad a la que Pertenece:</label>
            <input
              type="text"
              id="facultad"
              name="facultad"
              value={state.facultad}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <p id="resultadoPass"></p>
          </div>

          <div className="form-group">
            <label htmlFor="confirmarPass">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmarPass"
              name="confirmarPass"
              value={state.confirmarPass}
              onChange={handleChange}
              required
            />
            <p id="mensajePass"></p>
          </div>

          <div className="form-group">
            <button type="submit">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;

import React from 'react';
import RegistrationForm from './RegistrationForm';
import Login from './login';
import Navigation from './navigation';
import Inicio from './inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      
      <Routes>
        {/* Ruta para la página de registro */}
        <Route path="/registro" element={<RegistrationForm />} />

        {/* Ruta para la página de inicio de sesión */}
        <Route path="/inicio-sesion" element={<Login />} />

        {/* Ruta para la página de inicio (que se mostrará primero) */}
        <Route path='/inicio'index element={<Inicio />} />
      </Routes>
      
    </Router>
  );
}

export default App;

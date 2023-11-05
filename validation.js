// validation.js

export function validarCampo(valor) {
    if (valor === undefined || valor === null) {
      return false; // o realiza alguna otra lógica apropiada
    }
  
    const valorLimpio = valor.trim();
    return valorLimpio !== '';
  }
  
  
  
  // Función para validar contraseñas
  export function verificarPass() {
    const regexPass = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
    const inputPass = document.getElementById("password");
    const resultadoPass = document.getElementById("resultadoPass");
  
    if (!regexPass.test(inputPass.value)) {
      resultadoPass.textContent = "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
      return false;
    }
    resultadoPass.textContent = "";
    return true;
  }
  
  // Función para verificar que las contraseñas coincidan
  export function comprobarPass() {
    const pass = document.getElementById("password").value;
    const confirmarPass = document.getElementById("confirmarPass").value;
    const mensajePass = document.getElementById("mensajePass");
  
    if (pass !== confirmarPass) {
      mensajePass.textContent = "Las contraseñas no coinciden.";
      return false;
    } else {
      mensajePass.textContent = "";
      return true;
    }
  }
  
  // Función para validar una dirección de correo electrónico
  export function validarCorreoElectronico() {
    const regexCorreoElectronico = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const inputCorreoElectronico = document.getElementById("inputCorreoRegistro");
    const resultadoCorreoElectronico = document.getElementById("resultadoCorreoElectronico");
  
    if (!regexCorreoElectronico.test(inputCorreoElectronico.value)) {
      resultadoCorreoElectronico.textContent = "La dirección de correo electrónico no es válida.";
      return false;
    } else {
      resultadoCorreoElectronico.textContent = "";
      return true;
    }
  }
  
  // Función para validar un número de teléfono
  export function validarNumeroTelefono() {
    const regexNumeroTelefono = /^\d{10}$/;
    const inputNumeroTelefono = document.getElementById("numeroCelular");
    const resultadoNumeroTelefono = document.getElementById("resultadoNumeroTelefono");
  
    if (!regexNumeroTelefono.test(inputNumeroTelefono.value.replace(/\D/g, ''))) {
      resultadoNumeroTelefono.textContent = "El número de teléfono no es válido. Debe contener 10 dígitos.";
      return false;
    } else {
      resultadoNumeroTelefono.textContent = "";
      return true;
    }
  }
  
  //Funcion para validar cedula
  export function validarCedula() {
    const cedula = document.getElementById("numeroCedula").value;
    const mensajecedula = document.getElementById("PCedula");
    
    if (cedula.length !== 10) {
        mensajecedula.textContent = "La cédula debe tener 10 dígitos.";
        return false;
    }
  
    if (!/^[0-9]+$/.test(cedula)) {
        mensajecedula.textContent = "La cédula debe contener solo números.";
        return false;
    }
  
    const prov = Number(cedula.substring(0, 2));
    if (prov < 1 || prov > 24) {
        mensajecedula.textContent = "El primer número de la cédula debe estar entre 1 y 24.";
        return false;
    }
  
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    const verificador = Number(cedula[9]);
  
    let suma = 0;
    for (let i = 0; i < 9; i++) {
        let valor = Number(cedula[i]) * coeficientes[i];
        if (valor > 9) {
            valor -= 9;
        }
        suma += valor;
    }
  
    const total = (Math.ceil(suma / 10) * 10);
    const digitoVerificador = total - suma;
  
    if (digitoVerificador === 10) {
        if (verificador !== 0) {
            mensajecedula.textContent = "La cedula es invalida.";
            return false;
        }
    } else {
        if (verificador !== digitoVerificador) {
            mensajecedula.textContent = "La cedula es invalida.";
            return false;
        }
    }
  
    // Si llegamos a este punto, la cédula es válida
    mensajecedula.textContent = "";
    return true;
  }
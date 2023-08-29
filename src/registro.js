import React, { useState } from 'react';

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState();
  const [contrasena, setContraseña] = useState();

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleRegistro = () => {
    console.log('Usuario registrado:', usuario);
    console.log('Contraseña:', contrasena);
  };

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <div>
        <label>Usuario:</label>
        <input className="bloque" type="text" value={usuario} onChange={handleUsuarioChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input className="bloque" type="password" value={contrasena} onChange={handleContraseñaChange} />
      </div>
      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
};

export default RegistroUsuario;

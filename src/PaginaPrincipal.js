import React from 'react';
import { Link } from 'react-router-dom';

function Presentacion() {
  return (
    <div>
      <h1> Bienvenido al sistema de Registro </h1>
      <h3> ¿ No tienes una cuenta ? <Link id="link" to="/registro">Regístrate</Link> </h3>
    </div>
  );
}

export default Presentacion;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Presentacion from './PaginaPrincipal';
import RegistroDeUsuarios from './registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/registro" element={<RegistroDeUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
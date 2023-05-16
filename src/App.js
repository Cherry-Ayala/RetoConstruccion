import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Componentes/login';
import Cuestionario from './Componentes/cuestionario.jsx';
//import vistaadmin from './src/vistaadmin';


function App() {
  return (

      <div className="app">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/cuestionario' element={<Cuestionario />} />
        </Routes>
      </div>

  );
}

//<Route path="/vistaadmin" component={vistaadmin} /> (va abajo de la ruta al cuestionario y antes del cierre del switch, pero aún no hagi la pagina)
export default App;

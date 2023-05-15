import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Login from './login';
import Cuestionario from './cuestionario';
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

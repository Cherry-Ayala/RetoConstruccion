import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Cuestionario from './cuestionario';
//import vistaadmin from './src/vistaadmin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="./login" component={Login} />
        <Route path="./cuestionario" component={Cuestionario} />
        
      </Routes>
    </BrowserRouter>
  );
}

//<Route path="/vistaadmin" component={vistaadmin} /> (va abajo de la ruta al cuestionario y antes del cierre del switch, pero aún no hagi la pagina)
export default App;

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'; 
import { Routes, Route } from 'react-router-dom';

import Login from './Componentes/Login/login.jsx';
import Doctor from './Componentes/Doctor/Doctor.jsx';
import Paciente from './Componentes/Paciente/Paciente.jsx'
import Registro from './Componentes/Registro/Registro.jsx';
//import vistaadmin from './src/vistaadmin';


function App() {
  return (

      <div className="app">
        <Routes>
          {/* <Route exact path='/' element={<Home/>} /> */}
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Doctor' element={<Doctor />} />
          <Route exact path='/Paciente' element={<Paciente/>} />
          <Route exact path='/Registro' element={<Registro/>} />
        </Routes>
      </div>

  );
}

//<Route path="/vistaadmin" component={vistaadmin} /> (va abajo de la ruta al cuestionario y antes del cierre del switch, pero aún no hagi la pagina)
export default App;

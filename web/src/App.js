import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'; 
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';

import Login from './Componentes/Login/login.jsx';
import Doctor from './Componentes/Doctor/Doctor.jsx';
import Paciente from './Componentes/Paciente/Paciente.jsx'
import Registro from './Componentes/Registro/Registro.jsx';
import Bienvenida from './Componentes/Bienvenida/Bienvenida.jsx'
import Unity from './Unity/Unity.jsx'
//import vistaadmin from './src/vistaadmin';


function App() {
  const location = useLocation();
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/Login')
  }

  const handleRegisterClick = () => {
    navigate('/Registro')
  }

  const handleClick = () => {
    navigate('/')
  }
  // const hideButtons = location.pathname !== '/Login' && location.pathname !== '/Registro' && location.pathname !== '/Doctor' && location.pathname !== '/Paciente';
  const hideButtons = location.pathname !== '/';
  return (

    <div className="app">
      {!hideButtons && (
        <div>
          <button className='boton' onClick={() => window.location.href = '/Login'}>Login</button>
          <button className='boton' onClick={() => window.location.href = '/Registro'}>Register</button>
        </div>
      )}
      <Routes>
        <Route exact path='/' element={<Bienvenida/>} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Doctor' element={<Doctor />} />
        <Route exact path='/Paciente' element={<Paciente/>} />
        <Route exact path='/Registro' element={<Registro/>} />
        <Route exact path='/Unity' element={<Unity/>} /> 
      </Routes>
    </div>

  );
}

//<Route path="/vistaadmin" component={vistaadmin} /> (va abajo de la ruta al cuestionario y antes del cierre del switch, pero aún no hagi la pagina)
export default App;

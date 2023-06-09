import React, { useState } from 'react';
//import axios from 'axios';
import './login.css'

function Login () {
    const [ user, setUser ] = useState('a00833419@tec.mx');
    const [ password, setPassword ] = useState('A00833419');

    const handleUserChange = (event) => { setUser(event.target.value);}
    const handlePasswordChange = (event) => { setPassword(event.target.value);}
    const handleSubmit = (event) => {
        event.preventDefault();

        //conectar a la api de la base de datos
        window.location.href = './Doctor';
        // axios.post('api/login', {user, password})
        // .then(response => {
        //     if(response.data.success){  
        //         window.location.href = '../Doctor/Doctor.jsx';
        //     }
        //     else{
        //         console.log(response.data.message)
        //     }
        // })

        // .catch(error => {console.log(error);});
    }
    return (

      <div className='login-container card-block align'>
        <div className='card-login card d-inline-flex p-2'>
          <h1>Login</h1>
          <form className='form-control-lg'>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={password} onChange={handlePasswordChange}/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handlePasswordChange}  />
            </div>
            <button type="submit" class="boton btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    
    );

}

export default Login;
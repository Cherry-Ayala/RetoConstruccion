import React, { useState } from 'react';
import axios from 'axios';
//import { Navigate } from 'react-router-dom';
import './login.css'
import Unity from '../../Unity/Unity.jsx'

function Login () {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [redirectUrl, setRedirectUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/login', { username, password }) //poner api correcta
      .then(response => {
        if (response.data.user === 'Doctor' && response.data.password === 'jueves') {
          window.location.href('/Doctor');
        } else if (response.data.user) {
          window.location.href(Unity);
        } else {
          setErrorMessage('Invalid username or password.');
        }
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again.');
      });
  };
  return (
    <div className="login-container card-block align">
      <div className="card-login card d-inline-flex p-2">
        <h1>Login</h1>
        <form className="form-control-lg" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ingresa usuario..."
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña..."
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="boton btn btn-primary" onClick={() => window.location.href = Unity}>
            Submit
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
      
    </div>
  );
}

export default Login;
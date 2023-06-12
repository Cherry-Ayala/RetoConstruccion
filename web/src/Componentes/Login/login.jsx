import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './login.css'

function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');
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
          setRedirectUrl('/Doctor');
        } else if (response.data.user) {
          setRedirectUrl('/unity');
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
            <label htmlFor="exampleInputEmail1">Correo</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="boton btn btn-primary">
            Submit
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
      {redirectUrl && <Redirect to={redirectUrl} />}
    </div>
  );
}

export default Login;
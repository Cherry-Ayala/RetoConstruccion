import {useRef} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registro.css'
import Unity from '../../Unity/Unity.jsx'


function Registro(){

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);

    const inputRef7 = useRef(null);
    const inputRef8 = useRef(null);
    const inputRef9 = useRef(null);
    const inputRef10 = useRef(null);
    




    function handleClick() {

    const navigate = useNavigate();
      
      console.log(inputRef.current.value);
      var v1 = inputRef.current.value

      console.log(inputRef2.current.value);
      var v2 = inputRef2.current.value

      console.log(inputRef3.current.value);
      var v3 = inputRef3.current.value

      console.log(inputRef4.current.value);
      var v4 = inputRef4.current.value

      console.log(inputRef5.current.value);
      var v5 = inputRef5.current.value

      console.log(inputRef6.current.value);
      var v6 = inputRef6.current.value

      console.log(inputRef7.current.value);
      var v7 = inputRef7.current.value

      console.log(inputRef8.current.value);
      var v8 = inputRef8.current.value

      console.log(inputRef9.current.value);
      var v9 = inputRef9.current.value

      console.log(inputRef10.current.value);
      var v10 = inputRef10.current.value

      function sendDataToAPI(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
        const apiUrl = 'http://localhost:4000/api/addPacienteLog'; // Replace with your API endpoint
      
        // Create the request body with the input data
        const requestBody = {
          "v1": v1, 
          "v2" : v2,
          "v3" : v3,
          "v4" : v4,
          "v5" : v5,
          "v6" : v6,
          "v7" : v7,
          "v8" : v8,
          "v9" : v9,
          "v10" : v10

          
        };
      
        // Send the POST request to the API using Axios
        axios.post(apiUrl, requestBody)
          .then(response => {
            // Handle the API response
            console.log('API response:', response.data);
            // Do something with the response data
          })
          .catch(error => {
            // Handle any errors that occurred during the API request
            console.error('API request error:', error);
          });
      }

    
      navigate('/videogame')
      sendDataToAPI(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
      
    }


    return(
        <div className="registro-container card-block align">
            <div className="card registro-form d-inline-flex p-2">
              <h1>Registro</h1>

                <form className='form-control-lg'>
                    <div className="row">
                        <div className="col">
                       <input type="text" className='form-control' ref = {inputRef}  placeholder='Nombre...'/>
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' ref = {inputRef2} placeholder='Apellido paterno...'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className='form-control' ref = {inputRef3} placeholder='Apellido materno...'/>                         
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' ref = {inputRef4} placeholder='Fecha de nacimiento...'/>                      
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className='form-control' ref = {inputRef5} placeholder='Usuario...'/>
                        </div>
                        <div className="col">
                            <input type="password" className='form-control' ref = {inputRef6} placeholder='Contraseña...'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                            <label for="exampleFormControlSelect1">¿Tomas medicamento?</label>
                            <input type="text" className='form-control' ref = {inputRef7} placeholder='Si/No...'/>
                        </div>
                        <div className='col'>
                            <label for="exampleFormControlSelect1">Ingresa fecha de inicio</label>
                            <input type="text" className='form-control' ref = {inputRef8} placeholder='Fecha...'/>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col'>
                            <label for="exampleFormControlSelect1">Ingresa nombre de medicamento</label>
                            <input type="text" className='form-control' ref = {inputRef9} placeholder='Nombre...'/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlTextarea1">Ingres instrucciones de doctor</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref = {inputRef10} placeholder='Horario, Descripción, Receta, etc...'></textarea>
                        </div>

                    </div>

                    <button onClick={handleClick} className='boton'> Submit </button>
                </form>
               
            </div>
        </div>
    )
}

export default Registro; 
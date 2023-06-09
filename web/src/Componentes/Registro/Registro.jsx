import {useRef} from 'react';
import axios from 'axios';
import './Registro.css'



function Registro(){

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);


    function handleClick() {
      
      console.log(inputRef.current.value);
      var Nombre = inputRef.current.value

      console.log(inputRef2.current.value);
      var Apellido_Paterno = inputRef2.current.value

      console.log(inputRef3.current.value);
      var Apellido_Materno = inputRef3.current.value

      console.log(inputRef.current.value);
      var Fecha_Nacimiento = inputRef4.current.value

      function sendDataToAPI(Nombre, Apellido_Paterno, Apellido_Materno, Fecha_Nacimiento) {
        const apiUrl = 'http://localhost:4000/api/addPaciente'; // Replace with your API endpoint
      
        // Create the request body with the input data
        const requestBody = {
          "Nombre": Nombre, 
          "Apellido_Paterno" : Apellido_Paterno,
          "Apellido_Materno" : Apellido_Materno,
          "Fecha_Nacimiento" : Fecha_Nacimiento
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

      sendDataToAPI(Nombre, Apellido_Paterno, Apellido_Materno, Fecha_Nacimiento);
    }
  

    

    return(
        <div className="registro-container card-block align">
            <div className="card registro-form d-inline-flex p-2">
              <h1>Registro</h1>

                <form className='form-control-lg'>
                    <div className="row">
                        <div className="col">
                       <input type="text" className='form-control' ref = {inputRef}  placeholder='Nombre'/>
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' ref = {inputRef2} placeholder='Apellido_Paterno'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className='form-control' ref = {inputRef3} placeholder='Apellido_Materno'/>                         
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' ref = {inputRef4} placeholder='Fecha_Nacimiento'/>                      
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className='form-control' placeholder='Usuario...'/>
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' placeholder='Contraseña...'/>
                        </div>
                    </div>
                    <button onClick={handleClick} className='boton'> Submit </button>
                </form>
               
            </div>
        </div>
    )
}

export default Registro; 
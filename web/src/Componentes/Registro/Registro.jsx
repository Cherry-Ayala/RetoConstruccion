import './Registro.css'

function Registro(){
    return(
        <div className="registro-container card-block align">
            <div className="card registro-form d-inline-flex p-2">
                <h1>Registro</h1>

                <form className='form-control-lg'>
                    <div className="row">
                        <div className="col">
                          <input type="text" className='form-control' placeholder='Nombre...'/>
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' placeholder='Apellido Paterno...'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className='form-control' placeholder='Apellido Materno...'/>                         
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' placeholder='Fecha de nacimiento...'/>                      
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
                    <input type="submit" className='boton' value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Registro; 
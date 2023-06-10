// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

  async getAlimentos(req, res){
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query("select * from [dbo].[Log_in]")
        res.json(result.recordset)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

async addLogin(req , res){
    try {
        if(req.body.Usuario != null && req.body.Contraseña != null)
        {
        const pool = await poolPromise
        const result = await pool.request()
        .input('Usuario',sql.VarChar, req.body.Usuario)
        .input('Contraseña',sql.VarChar, req.body.Contraseña)
        .query("INSERT INTO [dbo].[Log_in] (Usuario, Contraseña) VALUES(@Usuario, @Contraseña)")
        res.json(result)
        }
        else {
            res.send('Por favor llena todos los datos!')
          }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


async updateLogin(req, res){
    try {
      if(req.body.Usuario != null && req.body.Contraseña != null && req.body.Contraseña != null) {
      const pool = await poolPromise
        const result = await pool.request()
        .input('Id_Paciente',sql.Int, req.params.Id_Paciente)
        .input('nuevoNombre',sql.VarChar, req.body.Nombre)
        .input('nuevoApellido_Paterno',sql.VarChar, req.body.Apellido_Paterno)
        .input('nuevoApellido_Materno',sql.VarChar, req.body.Apellido_Materno)
        .input('nuevaFecha_Nacimiento',sql.Date, req.body.Fecha_Nacimiento)
        .query("update [dbo].[Log_in] set Nombre = @nuevoNombre, Apellido_Paterno = @nuevoApellido_Paterno, Apellido_Materno = @nuevoApellido_Materno, Fecha_Nacimiento = @nuevaFecha_Nacimiento where Id_Paciente = @Id_Paciente")
        res.json(result)
        console.log('Id_Pacientes' + req.params.id)
      } else {
        res.send('Todos los campos obligatorios!')
      }
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

async updateComida(req, res){
    try {
      if(req.body.Id != null, req.body.Descripcion != null) {
      const pool = await poolPromise
        const result = await pool.request()
        .input('Id',sql.Int, req.params.Id)
        .input('newDescripcion',sql.VarChar, req.body.Descripcion)
        .query("update [dbo].[catMedicamentos] set Descripcion = @newDescripcion where Id = @Id")
        res.json(result)
        console.log('Id' + req.params.id)
      } else {
        res.send('Todos los campos obligatorios!')
      }
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

}

const catMedicamentosController = new MainController()
module.exports = catMedicamentosController;
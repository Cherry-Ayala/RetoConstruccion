// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

    async getPacientes(req, res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .query("select * from [dbo].[Pacientes]")
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getPaciente(req , res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Paciente',sql.Int, req.params.Id_Paciente)
            .query("select * from [dbo].[Pacientes] where Id_Paciente = @Id_Paciente")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async addPaciente(req , res){
        try {
          if(req.body.Nombre != null && req.body.Apellido_Paterno != null && req.body.Apellido_Materno != null && req.body.Fecha_Nacimiento != null) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Nombre',sql.VarChar, req.body.Nombre)
            .input('Apellido_Paterno',sql.VarChar, req.body.Apellido_Paterno)
            .input('Apellido_Materno',sql.VarChar, req.body.Apellido_Materno)
            .input('Fecha_Nacimiento',sql.Date, req.body.Fecha_Nacimiento)

            .query("insert into [dbo].[Pacientes] values(@Nombre, @Apellido_Paterno, @Apellido_Materno, @Fecha_Nacimiento)")
            res.json(result)
          } else {
            res.send('Por favor llena todos los datos!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }
    
}

const pacienteController = new MainController()
module.exports = pacienteController;
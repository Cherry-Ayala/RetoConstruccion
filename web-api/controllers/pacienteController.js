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

    async getPacienteNom(req , res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .input('Nombre',sql.VarChar, req.params.Nombre)
          .query("select * from [dbo].[Pacientes] where Nombre = @Nombre")
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

      async addPacienteLog(req , res){
        try {
          if(req.body.v1 != null && req.body.v2 != null && req.body.v3 != null && req.body.v4 != null) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('v1',sql.VarChar, req.body.v1)
            .input('v2',sql.VarChar, req.body.v2)
            .input('v3',sql.VarChar, req.body.v3)
            .input('v4',sql.Date, req.body.v4)

            .query("exec insTuTabla @v1, @v2, @v3, @v4")
            res.json(result)
          } else {
            res.send('Por favor llena todos los datos!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }



      async addPacienteNom(req , res){
        try {
          if(req.body.Nombre != null) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Nombre',sql.VarChar, req.body.Nombre)

            .query("insert into [dbo].[Pacientes] (Nombre) values(@Nombre)")
            res.json(result)
          } else {
            res.send('Por favor llena todos los datos!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }



      async updatePaciente(req, res){
        try {
          if(req.body.Id_Paciente != null, req.body.Nombre != null && req.body.Apellido_Paterno != null && req.body.Apellido_Materno != null && req.body.Fecha_Nacimiento != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Paciente',sql.Int, req.params.Id_Paciente)
            .input('nuevoNombre',sql.VarChar, req.body.Nombre)
            .input('nuevoApellido_Paterno',sql.VarChar, req.body.Apellido_Paterno)
            .input('nuevoApellido_Materno',sql.VarChar, req.body.Apellido_Materno)
            .input('nuevaFecha_Nacimiento',sql.Date, req.body.Fecha_Nacimiento)
            .query("update [dbo].[Pacientes] set Nombre = @nuevoNombre, Apellido_Paterno = @nuevoApellido_Paterno, Apellido_Materno = @nuevoApellido_Materno, Fecha_Nacimiento = @nuevaFecha_Nacimiento where Id_Paciente = @Id_Paciente")
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

      async deletePaciente(req , res){
        try {
          if(req.params.Id_Paciente != null ) {
            const pool = await poolPromise
              const result = await pool.request()
              .input('Id_Paciente',sql.Int, req.params.Id_Paciente)
              .query("delete from [dbo].[Pacientes] where Id_Paciente = @Id_Paciente")
              res.json(result)
            } else {
              res.send('Agrega el id del paciente!')
            }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }
    
}

const pacienteController = new MainController()
module.exports = pacienteController;
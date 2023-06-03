// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

    async getDescansos(req, res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .query("select * from [dbo].[Descanso]")
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getDescanso(req , res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Descanso',sql.Int, req.params.Id_Descanso)
            .query("select * from [dbo].[Descanso] where Id_Descanso = @Id_Descanso")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }


    async addDescanso(req , res){
        try {
          if(req.body.Horas_Dormidas != null && req.body.Calidad_Descanso != null && req.body.FechaDescanso != null && req.body.Id_Paciente != null) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Horas_Dormidas',sql.Int, req.body.Horas_Dormidas)
            .input('Calidad_Descanso',sql.VarChar, req.body.Calidad_Descanso)
            .input('FechaDescanso',sql.Date, req.body.FechaDescanso)
            .input('Id_Paciente',sql.Int, req.body.Id_Paciente)

            .query("insert into [dbo].[Descanso] values(@Horas_Dormidas, @Calidad_Descanso, @FechaDescanso, @Id_Paciente)")
            res.json(result)
          } else {
            res.send('Por favor llena todos los datos!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }


      async addHorasDormidas(req , res){
        try {
            if(req.body.Horas_Dormidas != null && req.body.Id_Paciente != null)
            {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Horas_Dormidas',sql.Int, req.body.Horas_Dormidas)
            .input('Id_Paciente',sql.Int, req.body.Id_Paciente)
            .query("INSERT INTO [dbo].[Descanso] (Horas_Dormidas, Id_Paciente) VALUES(@Horas_Dormidas, @Id_Paciente)")
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


    async addCalidadDescanso(req , res){
        try {
            if(req.body.Calidad_Descanso != null && req.body.Id_Paciente != null)
            {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Calidad_Descanso',sql.VarChar, req.body.Calidad_Descanso)
            .input('Id_Paciente',sql.Int, req.body.Id_Paciente)
            .query("INSERT INTO [dbo].[Descanso] (Calidad_Descanso, Id_Paciente) VALUES(@Calidad_Descanso, @Id_Paciente)")
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


    async addFechaDescanso(req , res){
        try {
            if(req.body.FechaDescanso != null && req.body.Id_Paciente != null)
            {
            const pool = await poolPromise
            const result = await pool.request()
            .input('FechaDescanso',sql.Date, req.body.FechaDescanso)
            .input('Id_Paciente',sql.Int, req.body.Id_Paciente)
            .query("INSERT INTO [dbo].[Descanso] (FechaDescanso, Id_Paciente) VALUES(@FechaDescanso, @Id_Paciente)")
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
    

      async updateDescanso(req, res){
        try {
          if(req.body.Id_Descanso != null, req.body.Horas_Dormidas != null && req.body.Calidad_Descanso != null && req.body.FechaDescanso != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Descanso',sql.Int, req.params.Id_Descanso)
            .input('newHoras_Dormidas',sql.Int, req.body.Horas_Dormidas)
            .input('newCalidad_Descanso',sql.VarChar, req.body.Calidad_Descanso)
            .input('newFechaDescanso',sql.Date, req.body.FechaDescanso)
            .query("update [dbo].[Descanso] set Horas_Dormidas = @newHoras_Dormidas, Calidad_Descanso = @newCalidad_Descanso, FechaDescanso = @newFechaDescanso where Id_Descanso = @Id_Descanso")
            res.json(result)
            console.log('Id_Descanso' + req.params.id)
          } else {
            res.send('Todos los campos obligatorios!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }

      async updateHorasDormidas(req, res){
        try {
          if(req.body.Id_Descanso != null, req.body.Horas_Dormidas != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Descanso',sql.Int, req.params.Id_Descanso)
            .input('newHoras_Dormidas',sql.Int, req.body.Horas_Dormidas)
            .query("update [dbo].[Descanso] set Horas_Dormidas = @newHoras_Dormidas where Id_Descanso = @Id_Descanso")
            res.json(result)
            console.log('Id_Descanso' + req.params.id)
          } else {
            res.send('Todos los campos obligatorios!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }


      async updateCalidadDescanso(req, res){
        try {
          if(req.body.Id_Descanso != null, req.body.Calidad_Descanso != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Descanso',sql.Int, req.params.Id_Descanso)
            .input('newCalidad_Descanso',sql.VarChar, req.body.Calidad_Descanso)
            .query("update [dbo].[Descanso] set Calidad_Descanso = @newCalidad_Descanso where Id_Descanso = @Id_Descanso")
            res.json(result)
            console.log('Id_Descanso' + req.params.id)
          } else {
            res.send('Todos los campos obligatorios!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }

      async updateFechaDescanso(req, res){
        try {
          if(req.body.Id_Descanso != null, req.body.FechaDescanso != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Descanso',sql.Int, req.params.Id_Descanso)
            .input('newFechaDescanso',sql.Date, req.body.FechaDescanso)
            .query("update [dbo].[Descanso] set FechaDescanso = @newFechaDescanso where Id_Descanso = @Id_Descanso")
            res.json(result)
            console.log('Id_Descanso' + req.params.id)
          } else {
            res.send('Todos los campos obligatorios!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }



      /*async deleteDescanso(req , res){
        try {
          if(req.params.Id_Descanso != null ) {
            const pool = await poolPromise
              const result = await pool.request()
              .input('Id_Descanso',sql.Int, req.params.Id_Descanso)
              .query("delete from [dbo].[Descanso] where Id_Descanso = @Id_Descanso")
              res.json(result)
            } else {
              res.send('Agrega el id del Descanso!')
            }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }*/
    
}

const DescansoController = new MainController()
module.exports = DescansoController;
// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

    async getEjercicios(req, res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .query("select * from [dbo].[Ejercicio] select * from catEjercicio")
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }

    async getcatMed(req , res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Paciente',sql.Int, req.params.Id_Paciente)
            .query("select * from [dbo].[catMedicamentos] where Id_Paciente = @Id_Paciente")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }


    async addCatMed(req , res){
        try {
          if(req.body.Nombre_Medicamento != null && req.body.Entrenamiento_realizado != null && req.body.Inicio_Tratamiento != null && req.body.Fin_Tratamiento != null && req.body.Instruccion != null ) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Nombre_Medicamento',sql.VarChar, req.body.Nombre_Medicamento)
            .input('Entrenamiento_realizado',sql.VarChar, req.body.Entrenamiento_realizado)
            .input('Inicio_Tratamiento',sql.Date, req.body.Inicio_Tratamiento)
            .input('Fin_Tratamiento',sql.Date, req.body.Fin_Tratamiento)
            .input('Instruccion',sql.VarChar, req.body.Instruccion)


            .query("insert into [dbo].[catMedicamentos] values(@Nombre_Medicamento, @Entrenamiento_realizado, @Inicio_Tratamiento, @Fin_Tratamiento, @Instruccion)")
            res.json(result)
          } else {
            res.send('Por favor llena todos los datos!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }


      async addDescEjercicio(req , res){
        try {
            if(req.body.Entrenamiento_realizado != null && req.body.IdEjercicio != null)
            {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Entrenamiento_realizado',sql.VarChar, req.body.Entrenamiento_realizado)
            .input('IdEjercicio',sql.Int, req.body.IdEjercicio)
            .query("INSERT INTO [dbo].[Ejercicio] VALUES(@Entrenamiento_realizado, @IdEjercicio)")
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

    async addtiempoEjercicio(req , res){
        try {
            if(req.body.Duracion_minutos != null && req.body.Id != null)
            {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Duracion_minutos',sql.Float, req.body.Duracion_minutos)
            .input('Id',sql.Int, req.body.Id)
            .query("INSERT INTO [dbo].[catEjercicio] VALUES(@Duracion_minutos, @Id)")
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





    async updateDescEjercicio(req, res){
        try {
          if(req.body.Id_Paciente != null, req.body.Entrenamiento_realizado != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id_Paciente',sql.Int, req.params.Id_Paciente)
            .input('newEntrenamiento_realizado',sql.VarChar, req.body.Entrenamiento_realizado)
            .query("update [dbo].[Ejercicio] set Entrenamiento_realizado = @newEntrenamiento_realizado where Id_Paciente = @Id_Paciente")
            res.json(result)
            console.log('Id_Paciente' + req.params.id)
          } else {
            res.send('Todos los campos obligatorios!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }

      async updatetiempoEjercicio(req, res){
        try {
          if(req.body.Id != null, req.body.Duracion_minutos != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id',sql.Int, req.params.Id)
            .input('newDuracion_minutos',sql.VarChar, req.body.Duracion_minutos)
            .query("update [dbo].[catEjercicio] set Duracion_minutos = @newDuracion_minutos where Id = @Id_Paciente")
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
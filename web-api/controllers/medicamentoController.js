// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

    async getcatMeds(req, res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .query("select * from [dbo].[catMedicamentos]")
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
            .input('Id_CatMed',sql.Int, req.params.Id_CatMed)
            .query("select * from [dbo].[catMedicamentos] where Id_CatMed = @Id_CatMed")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }


    async addCatMed(req , res){
        try {
          if(req.body.Nombre_Medicamento != null && req.body.tomoMed != null && req.body.Inicio_Tratamiento != null && req.body.Fin_Tratamiento != null && req.body.Instruccion != null ) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('Nombre_Medicamento',sql.VarChar, req.body.Nombre_Medicamento)
            .input('tomoMed',sql.VarChar, req.body.tomoMed)
            .input('Inicio_Tratamiento',sql.Date, req.body.Inicio_Tratamiento)
            .input('Fin_Tratamiento',sql.Date, req.body.Fin_Tratamiento)
            .input('Instruccion',sql.VarChar, req.body.Instruccion)


            .query("insert into [dbo].[catMedicamentos] values(@Nombre_Medicamento, @tomoMed, @Inicio_Tratamiento, @Fin_Tratamiento, @Instruccion)")
            res.json(result)
          } else {
            res.send('Por favor llena todos los datos!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
      }


      async addTomoMed(req , res){
        try {
            if(req.body.v1 != null)
            {
            const pool = await poolPromise
            const result = await pool.request()
            .input('v1',sql.VarChar, req.body.v1)
            .query("exec insMed @v1")
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

    async updateTomoMed(req, res){
        try {
          if(req.body.Id_CatMed != null, req.body.tomoMed != null) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Id_CatMed',sql.Int, req.params.Id_CatMed)
            .input('newtomoMed',sql.VarChar, req.body.tomoMed)
            .query("update [dbo].[catMedicamentos] set tomoMed = @newtomoMed where Id_CatMed = @Id_CatMed")
            res.json(result)
            console.log('Id_CatMed' + req.params.id)
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
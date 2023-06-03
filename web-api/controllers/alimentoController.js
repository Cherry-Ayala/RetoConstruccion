// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

async addComida(req , res){
    try {
        if(req.body.Descripcion != null && req.body.Id != null)
        {
        const pool = await poolPromise
        const result = await pool.request()
        .input('Descripcion',sql.VarChar, req.body.Descripcion)
        .input('Id',sql.Int, req.body.Id)
        .query("INSERT INTO [dbo].[catAlimentos] (Descripcion, Id) VALUES(@Descripcion, @Id)")
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
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
    
}

const pacienteController = new MainController()
module.exports = pacienteController;
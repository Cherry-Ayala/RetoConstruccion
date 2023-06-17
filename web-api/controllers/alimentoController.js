// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

  async getAlimentos(req, res){
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .query("select * from [dbo].[catAlimentos]")
        res.json(result.recordset)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  async getAlimento(req, res){
    try {
        const pool = await poolPromise
        const result = await pool.request()
        .input('Id_Paciente',sql.Int, req.params.Id_CatMed)
        .query("select * from [dbo].[Alimentos_Paciente] where Id_Paciente = @Id_Paciente")
        res.json(result.recordset)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

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
        .query("update [dbo].[catAlimentos] set Descripcion = @newDescripcion where Id = @Id")
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


  async addDes(req , res){
    try {
        if(req.body.v1 != null)
        {
        const pool = await poolPromise
        const result = await pool.request()
        .input('v1',sql.VarChar, req.body.v1)
        .query("exec insDe @v1;")
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

async addCom(req , res){
  try {
      if(req.body.v1 != null)
      {
      const pool = await poolPromise
      const result = await pool.request()
      .input('v1',sql.VarChar, req.body.v1)
      .query("exec insCo @v1;")
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


async addCe(req , res){
  try {
      if(req.body.v1 != null)
      {
      const pool = await poolPromise
      const result = await pool.request()
      .input('v1',sql.VarChar, req.body.v1)
      .query("exec insCe @v1;")
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


async addSnackDe(req , res){
  try {
      if(req.body.v1 != null)
      {
      const pool = await poolPromise
      const result = await pool.request()
      .input('v1',sql.VarChar, req.body.v1)
      .query("exec insSnackDe @v1;")
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

async addSnackCo(req , res){
  try {
      if(req.body.v1 != null)
      {
      const pool = await poolPromise
      const result = await pool.request()
      .input('v1',sql.VarChar, req.body.v1)
      .query("exec insSnackCo @v1;")
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

async addSnackNo(req , res){
  try {
      if(req.body.v1 != null)
      {
      const pool = await poolPromise
      const result = await pool.request()
      .input('v1',sql.VarChar, req.body.v1)
      .query("exec insSnackNo @v1;")
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

}



const alimentoController = new MainController()
module.exports = alimentoController;
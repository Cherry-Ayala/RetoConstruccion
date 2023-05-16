// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

    async getAvatars(req, res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .query("select * from [dbo].[Avatars]")
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async getAvatar(req , res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('id',sql.Int, req.params.id)
            .query("select * from [dbo].[Avatars] where AvatarID = @id")
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async addAvatar(req , res){
      try {
        if(req.body.avatarID != null && req.body.avatarName != null && req.body.avatar != null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('id',sql.Int, req.body.avatarID)
          .input('name',sql.VarChar, req.body.avatarName)
          .input('avatar',sql.VarChar, req.body.avatar)
          .query("insert into [dbo].[Avatars] values(@id, @name, @avatar)")
          res.json(result)
        } else {
          res.send('Por favor llena todos los datos!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async updateAvatar(req, res){
      try {
        if(req.body.avatarID != null && req.body.avatarName != null && req.body.avatar != null) {
        const pool = await poolPromise
          const result = await pool.request()
          .input('id',sql.Int , req.params.id)
          .input('newName',sql.VarChar, req.body.avatarName)
          .input('newAvatar',sql.VarChar, req.body.avatar)
          .query("update [dbo].[Avatars] set avatarName = @newName, avatar = @newAvatar where avatarID = @id")
          res.json(result)
          console.log('id' + req.params.id)
        } else {
          res.send('Todos los campos obligatorios!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async deleteAvatar(req , res){
      try {
        if(req.params.id != null ) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('id',sql.VarChar, req.params.id)
            .query("delete from [dbo].[Avatars] where avatarID = @id")
            res.json(result)
          } else {
            res.send('Agrega el id del jugador!')
          }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
}

const avatarController = new MainController()
module.exports = avatarController;
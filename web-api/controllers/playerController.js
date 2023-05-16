// import express from 'express'

const { sql,poolPromise } = require('../database/db')

class MainController {

    async getPlayers(req, res){
      try {
          const pool = await poolPromise
          const result = await pool.request()
          .query("select p.id, playerName, p.avatarID, p.points, avatarName, avatar from players as p join avatars as a on p.avatarID = a.avatarID")
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async getPlayer(req , res){
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('id',sql.Int, req.params.id)
            .query("select p.id, playerName, p.avatarID, p.points, avatarName, avatar from players as p join avatars as a on p.avatarID = a.avatarID where id = @id")
            var id = req.params.id
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async addPlayer(req , res){
      try {
        if(req.body.id != null && req.body.playerName != null && req.body.avatarID != null && req.body.points != null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('id',sql.Int, req.body.id)
          .input('name',sql.VarChar, req.body.namePlayer)
          .input('avatar',sql.Int, req.body.avatarPlayer)
          .input('points',sql.Int, req.body.points)
          .query("insert into [dbo].[Players] values(@id, @name, @avatar, @points)")
          res.json(result)
        } else {
          res.send('Por favor llena todos los datos!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async updatePlayer(req, res){
      try {
        if(req.body.id != null && req.body.playerName != null && req.body.avatarID != null && req.body.points != null) {
        const pool = await poolPromise
          const result = await pool.request()
          .input('id',sql.Int , req.params.id)
          .input('newName',sql.VarChar, req.body.playerName)
          .input('newAvatar',sql.Int, req.body.avatarID)
          .input('newPoints',sql.Int, req.body.points)          
          .query("update [dbo].[Players] set playerName = @newName, avatarID = @newAvatar, points = @newPoints where id = @id")
          res.json(result)
        } else {
          res.send('Todos los campos obligatorios!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async deletePlayer(req , res){
      try {
        if(req.params.id != null ) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('id',sql.VarChar, req.params.id)
            .query("delete from [dbo].[Players] where id = @id")
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

const playerController = new MainController()
module.exports = playerController;
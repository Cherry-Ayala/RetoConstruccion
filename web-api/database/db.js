const sql = require('mssql')

const config = {
    user: 'sa',
    password: 'EVAunit01',
    database: 'Medgame',
    server: 'LAPTOP-9TRENFJI.Medgame',
    options: {
    trustedConnection: true
  }
} 
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}
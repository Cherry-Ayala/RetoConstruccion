const sql = require('mssql')

const config = {
    user: 'profesor',
    password: 'Tec21-2021',
    database: 'tc2005b',
    server: 'tc2005b10.database.windows.net',
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
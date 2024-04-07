const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql2')

const app = express()

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

const pool = mysql.createPool({
  //socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock', //path to mysql sock in MAMP
  host: "localhost",
  user: "root",
  password: "root",
  database: "api",
  //port: 8889,
})

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * (max-1))
}

async function getDepartamento(id) {
  const [departamentos] = await pool.promise().query("SELECT * FROM departamentos WHERE id = ?", [
    id,
  ])
  return departamentos[0]
}
async function randomId() {
  const [rows] = await pool.promise().query(
    "SELECT COUNT(*) as total FROM departamentos"
  )
  const { total } = rows[0]
  const randomId = getRandomInt(total)
  return randomId
}

app.get("/test", (req, res) => {
  res.send("<h1>Funciona! 😎</h1>")
})

app.get("/", async (req, res) => {
  try {
    const id = await randomId()
    const departamento = await getDepartamento(id)
    res.send(departamento)
  } catch (error) {
    res.send(error)
  }
})

app.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id) || await randomId()
    const departamento = await getDepartamento(id)
    res.send(departamento)
  } catch (error) {
    res.send(error)
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
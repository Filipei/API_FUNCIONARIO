const express = require("express")
const routes = require("./routes/funcionariosRoutes")
const sequelize = require("./Config/database")

const app = express()

app.use(express.json())
app.use(routes)

// sicroniza tabelas automaticamente
sequelize.sync()

module.exports = app
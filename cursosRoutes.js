const express = require('express');
const app = express.Router();

const cursosController = require("./cursosController")

app.get('/', cursosController.GetAllCursos)


module.exports = app;
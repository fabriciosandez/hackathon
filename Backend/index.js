// Crear backend utilizando Node y Express
// Agregar funcionalidad para borrar candidatos (DELETE /candidatos/id)
// Agregar funcionalidad para editar candidatos (PATCH /candidatos/id)
// Agregar endpoint de login con autenticación (JWTs)
// Agregar middleware que valide autenticación en cualquiera de los endpoints (excepto GET /candidatos)

const express = require("express");
const app = express();
const cors = require("cors");
const { ping } = require("./Controllers/pingpong");
const { afterResponse } = require("./Middlewares/afterResponse");
const egresados = require("./Controllers/egresados");

app.use(express.json());
app.use(cors());

//PING PONG
app.get("/ping", ping, afterResponse);

//GET

// Crear endpoint para traer todos los candidatos (GET /candidatos)
app.get("/candidatos", egresados.verTodos, afterResponse);
// Crear endpoint para traer un único candidato (GET /candidatos/id)
app.get("/candidatos/:id", egresados.verUno, afterResponse);

//POST

// Agregar funcionalidad para añadir nuevo scandidatos (POST /candidatos)
app.post("/candidatos", egresados.agregar, afterResponse);

app.listen(8080, () => {
  console.log("Corriendo 8080");
});
